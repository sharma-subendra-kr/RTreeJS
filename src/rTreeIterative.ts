/*

RTreeJS, a JavaScript Tree library that helps to query, insert and delete Rectangles.

Copyright © 2020-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of RTreeJS.

RTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

RTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with RTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

import { ArrayStack as Stack } from "@sharma-subendra-kr/stack";

import {
	Rect,
	Node,
	NodeSplitResult,
	SplittedNodes,
} from "./interfaces/interfaces";
import {
	getPos,
	isDuplicate,
	getPosToRemove,
	removeRect,
	tryBorrow,
	performBorrow,
	merge,
} from "./utils/utils";
import { splitNodeQuadratic, splitNodeLinear } from "./utils/splitNode";
import {
	getCombinedRectFromRects,
	isRectInside,
	doRectsOverlap,
	doRectsOverlapOrTouch,
	areRectsIdentical,
} from "./rectUtils/rectUtils";
import { printTree as printSVGTree } from "./utils/printUtils";

/*
	Properties of B-Tree:
	* Balanced m way tree
	* Maintains sorted data
	* All leaf nodes must be at the same level
	* B-tree order m has the following properties
	* Every node has max M children
	* Min children: leaf: 0, root: 2, Internal nodes: Math.ceil(M/2)
	* Every node has max M-1 keys
	* Min keys: root node: 1, all other nodes: Math.ceil(M/2)-1

	Properties of R-Tree:
	*	The root node contains at least two children unless it is a leaf node i.e. tree has only 1 rectangle
	*	
	*	Max keys in a non-leaf node: M
	*	Max children in a non-leaf node: M
	*	Min Keys in a non-leaf node: m = Math.ceil(M/2) - 1
	*	Min children in a non-leaf node: m = Math.ceil(M/2) - 1
	*	
	*	Max Keys in a leaf node: M
	*	Min Keys in a leaf node: m = Math.ceil(M/2) - 1
	*	
	*	All leaves appear at the same level
 */

/**
		node = {
			size: <number>,
			pointers: <Array[ node ]>
			keys: <Array[rd]>
		}
	
		rd = {
			rect: <object>,
			data: <object>
		}

		rect = {
			x1: <number>,
			x2: <number>,
			y1: <number>,
			y2: <number>
		}
	*/

/*
	
 */
class RTreeIterative {
	options: Record<string, any>;
	M: number;
	m: number;
	root: Node;
	length: number;
	height: number;
	splitNode: (
		top: Node,
		rect: Rect,
		rectPtr: Node,
		M: number,
		m: number
	) => any;

	initialStackSize: number;
	initialQueueSize: number;
	insertStack: any;
	ptrStack: any;
	resultStack: any;

	constructor(options: Record<string, any>) {
		this.options = options;

		this.M = options.M || 4;
		if (this.M % 2 === 0) {
			this.m = this.M / 2;
		} else {
			this.m = Math.ceil(this.M / 2);
		}

		if (this.M < 2) {
			throw "Value of M cannot be less than 2";
		}

		// m >= 1 check is still retained instead of m >= 2 cuz
		// code to handle this exists in "remove" function and I dont want to change this because of OCD
		// Also I'm not removing support for M = 2 because  of OCD
		if (
			options?.m &&
			Number.isInteger(options.m) &&
			options.m <= Math.ceil(this.M / 2) &&
			options.m >= 1
		) {
			this.m = options.m;
		} else if (options?.m) {
			throw "Can't hard set value of m for M, invalid value of m provided";
		}

		this.splitNode = splitNodeQuadratic;
		if (options?.splitNode === "linear") {
			this.splitNode = splitNodeLinear;
		}

		this.root = undefined;
		this.length = 0;
		this.height = 0;

		this.initialStackSize =
			options?.data?.length * 2 || options?.initialStackSize || 100;
		this.initialQueueSize =
			options?.data?.length * 2 || options?.initialQueueSize || 100;

		this.insertStack = new Stack({ initialSize: this.initialStackSize });
		this.ptrStack = new Stack({ initialSize: this.initialStackSize });
		this.resultStack = new Stack({ initialSize: this.initialStackSize });

		if (Array.isArray(options?.data)) {
			this.constructTree(options.data);
		}

		delete this.options?.data;
	}

	getRoot(): any {
		return this.root;
	}

	constructNode(
		rect?: Rect,
		rectArr?: Rect[],
		ptrArr?: Node[],
		size?: number
	): Node {
		const node: Node = {
			size: 0,
			pointers: new Array(this.M + 1),
			keys: new Array(this.M + 1),
		};
		if (rect) {
			node.keys[0] = rect;
			node.pointers[0] = undefined;
			node.size = 1;
		} else if (rectArr && ptrArr) {
			node.keys = rectArr;
			node.pointers = ptrArr;
			node.size = size || 0;
		}

		return node;
	}

	constructTree(data: Rect[]): void {
		const length = data.length;
		for (let i = 0; i < length; i++) {
			this.insert(data[i]);
		}
	}

	/*
	 *	@typedef {Object} rd Object
	 *	@property {Object} rect Object defining a rectangle
	 *	@property {Object} data Any object passed as data description for the rectangle
	 *
	 * @param {rd} rd  with rectangle and data
	 */
	insert(rect: Rect): any {
		return this._insert(rect);
	}

	_insert(rect: Rect): any {
		let inserted: boolean = false;
		let splittedNodes: SplittedNodes;

		this.insertStack.empty();
		if (this.root === undefined) {
			// insert root
			this.root = this.constructNode(rect);
			this.length++;
			this.height++;
			return this.root;
		}

		this.insertStack.push({ node: this.root, pos: -1 });

		while (!this.insertStack.isEmpty()) {
			const topItem = this.insertStack.peek();
			const top = topItem.node;

			if (!inserted) {
				if (top?.pointers[0]) {
					// traverse through the internal node whose length increases the least
					const POS = getPos(top.keys, rect, top.size);
					topItem.pos = POS;
					this.insertStack.push({ node: top.pointers[POS], pos: POS });
					continue;
				}

				// reached leaf node, now insert

				if (isDuplicate(top.keys, top.size, rect)) {
					return;
				}

				this.length++;

				if (top.size < this.M) {
					// no node splitting required
					top.keys[top.size] = rect;
					top.size++;
					inserted = true;
					this.insertStack.pop();
					continue;
				}
				// node splitting required
				const spRectData: NodeSplitResult = this.splitNode(
					top,
					rect,
					undefined,
					this.M,
					this.m
				);
				splittedNodes = {
					left: top,
					right: this.constructNode(
						undefined,
						spRectData.rightRect,
						spRectData.rptrs,
						spRectData.rightSize
					),
				};

				inserted = true;
				this.insertStack.pop();
			} else if (splittedNodes) {
				const crectL = getCombinedRectFromRects(
					splittedNodes?.left?.keys || [],
					splittedNodes?.left?.size || 0
				);
				top.keys[topItem.pos] = crectL;
				top.pointers[topItem.pos] = splittedNodes?.left;

				const crectR: Rect = getCombinedRectFromRects(
					splittedNodes?.right?.keys || [],
					splittedNodes?.right?.size || 0
				);

				if (top.size < this.M) {
					top.keys[top.size] = crectR;
					top.pointers[top.size] = splittedNodes?.right;
					top.size++;
					splittedNodes = undefined;
				} else {
					const spRectData: NodeSplitResult = this.splitNode(
						top,
						crectR,
						splittedNodes.right,
						this.M,
						this.m
					);
					splittedNodes = {
						left: top,
						right: this.constructNode(
							undefined,
							spRectData.rightRect,
							spRectData.rptrs,
							spRectData.rightSize
						),
					};
					// inserted = true;
				}
				this.insertStack.pop();
			} else {
				// condense
				top.keys[topItem.pos] = getCombinedRectFromRects(
					top.pointers[topItem.pos].keys,
					top.pointers[topItem.pos].size
				);
				this.insertStack.pop();
			}
		}

		if (splittedNodes) {
			// split the root

			const crectLeft = getCombinedRectFromRects(
				splittedNodes?.left?.keys || [],
				splittedNodes?.left?.size || 0
			);
			const crectRight = getCombinedRectFromRects(
				splittedNodes?.right?.keys || [],
				splittedNodes?.right?.size || 0
			);
			const node: Node = this.constructNode();
			if (node) {
				node.size = 2;
				node.keys = [crectLeft, crectRight];
				node.pointers = [splittedNodes?.left, splittedNodes?.right];

				this.root = node;
			}
			this.height++;
		}
	}

	remove(rect: Rect): Node {
		return this._remove(rect);
	}

	_remove(rect: Rect): Node {
		let deleted: boolean = false;
		this.ptrStack.empty();

		if (!this.root) {
			return;
		}

		this.ptrStack.push({ node: this.root, ptr: -1 });

		while (!this.ptrStack.isEmpty()) {
			const topItem = this.ptrStack.peek();
			const { node: top } = topItem;

			if (!deleted) {
				if (top.pointers[0]) {
					// traverse through internal nodes
					const start = topItem.ptr + 1;
					for (let i = start; i < top.size; i++) {
						if (isRectInside(top.keys[i], rect)) {
							topItem.ptr = i;
							this.ptrStack.push({ node: top.pointers[i], ptr: -1 });
							break;
						}
					}
					if (topItem.ptr === start - 1) {
						this.ptrStack.pop();
					}
				} else {
					// reached leaf node
					const idx: number = getPosToRemove(top.keys, top.size, rect);
					if (idx >= 0) {
						removeRect(top, idx);
						deleted = true;
						this.length--;

						if (top === this.root && top.size === 0) {
							this.root = undefined;
							this.height = 0;
							this.length = 0;
						}
					}
					this.ptrStack.pop();
				}
				// else keep looking
			} else if (top.pointers[topItem.ptr].size < this.m) {
				// borrow or merge
				top.keys[topItem.ptr] = getCombinedRectFromRects(
					top.pointers[topItem.ptr].keys,
					top.pointers[topItem.ptr].size
				);
				const borrow: any = tryBorrow(top, topItem.ptr, this.m);
				if (borrow) {
					performBorrow(top, topItem.ptr, borrow);
				} else {
					merge(top, topItem.ptr, this.m);

					if (top === this.root && top.size < 2) {
						const currRoot: Node = this.root;
						this.root = currRoot!.pointers[0];
						currRoot!.keys = [];
						for (let i = 0; i < this.M + 1; i++) {
							currRoot!.pointers[i] = undefined;
						}
						this.height--;
						if (this.root!.size === 0) {
							// I think this is a special condition when M is 3 and m is 1
							this.root = undefined;
							this.height = 0;
							this.length = 0;
						}
					}
				}
				this.ptrStack.pop();
			} else {
				// condense upper rects
				const crect = getCombinedRectFromRects(
					top.pointers[topItem.ptr].keys,
					top.pointers[topItem.ptr].size
				);
				top.keys[topItem.ptr] = crect;
				this.ptrStack.pop();
			}
		}
	}

	/**
	 * find rects that are exact or overlap
	 * - passing only one parameter searches for only one overlapping rectangle
	 * - passing rect and exact as parameter searches for an exact rectangle
	 * - passing all as true searches for all the overlapping rectangle
	 *
	 * @param  {Rect}       rect reference rect to search in the tree for exact or overlap match
	 * @param  {boolean =    true}        exact search for identical rectangle, when exact is true all is always false
	 * @param  {boolean =    true}        all   search for all overlapping rectangle, when all is true exact is always false, when all is false we search for only one overlapping rectangle
	 * @param  {()      =>   any}         comp  comperator function taken into account when exact is false
	 * @return {any}             array of matching rectangles
	 */
	find(
		rect: Rect,
		exact: boolean = false,
		all: boolean = false,
		comp: (suspect: Rect, rect: Rect) => any,
		allowTouching: boolean = true
	): any {
		let doesOverlap = doRectsOverlap;
		if (allowTouching) {
			doesOverlap = doRectsOverlapOrTouch;
		}

		return this._find(rect, exact, all, comp, doesOverlap);
	}

	_find(
		rect: Rect,
		exact: boolean = false,
		all: boolean = false,
		comp: (suspect: Rect, rect: Rect) => any,
		doesOverlap: (rectA: Rect, rectB: Rect) => any
	): any {
		this.ptrStack.empty();
		this.resultStack.empty();

		if (!this.root && all) {
			return [];
		} else if (!this.root) {
			return;
		}

		this.ptrStack.push({ node: this.root, ptr: -1 });

		while (!this.ptrStack.isEmpty()) {
			const topItem = this.ptrStack.peek();
			const { node: top } = topItem;

			if (top.pointers[0]) {
				// traverse through internal nodes
				const start = topItem.ptr + 1;
				for (let i = start; i < top.size; i++) {
					if (
						exact && !all
							? isRectInside(top.keys[i], rect)
							: doesOverlap(top.keys[i], rect)
					) {
						topItem.ptr = i;
						this.ptrStack.push({ node: top.pointers[i], ptr: -1 });
						break;
					}
				}
				if (topItem.ptr === start - 1) {
					this.ptrStack.pop();
				}
			} else {
				// reached leaf node
				for (let i = 0; i < top.size; i++) {
					if (exact && !all) {
						// find exact rectangle
						if (areRectsIdentical(top.keys[i], rect)) {
							return top.keys[i];
						}
					} else if (!all) {
						// find overlapping rectangle
						if (
							doesOverlap(top.keys[i], rect) &&
							(comp ? comp(top.keys[i], rect) : true)
						) {
							return top.keys[i];
						}
					} else {
						// all
						if (
							doesOverlap(top.keys[i], rect) &&
							(comp ? comp(top.keys[i], rect) : true)
						) {
							this.resultStack.push(top.keys[i]);
						}
					}
				}
				this.ptrStack.pop();
			}
			// else keep looking
		}

		if (all) {
			return this.resultStack.getData();
		}
	}

	getData(allNodes: boolean = false) {
		if (!this.root) {
			return [];
		}

		this.ptrStack.empty();
		this.resultStack.empty();

		this.ptrStack.push({ node: this.root, ptr: -1 });

		while (!this.ptrStack.isEmpty()) {
			const topItem = this.ptrStack.peek();
			const { node: top } = topItem;

			if (top.pointers[0]) {
				// traverse through internal nodes
				if (topItem.ptr + 1 < top.size) {
					this.ptrStack.push({ node: top.pointers[++topItem.ptr], ptr: -1 });
					if (allNodes) {
						this.resultStack.push(top.keys[topItem.ptr]);
					}
				} else {
					this.ptrStack.pop();
				}
			} else {
				// reached leaf node
				for (let i = 0; i < top.size; i++) {
					this.resultStack.push(top.keys[i]);
				}
				this.ptrStack.pop();
			}
		}

		return this.resultStack.getData();
	}

	reset() {
		this.root = undefined;
		this.length = 0;
		this.height = 0;
	}

	emptyTree() {
		this.root = undefined;
		this.length = 0;
		this.height = 0;

		const len = Math.max(
			this.insertStack.stack.length,
			this.ptrStack.length,
			this.resultStack.length
		);

		for (let i = 0; i < len; i++) {
			if (this.insertStack.stack[i]) {
				this.insertStack.stack[i].node = undefined;
			}
			if (this.ptrStack.stack[i]) {
				this.ptrStack.stack[i].node = undefined;
			}
			if (this.resultStack.stack[i]) {
				this.resultStack.stack[i] = undefined;
			}
		}
	}

	printTree() {
		return printSVGTree(this.root, this.length, this.height);
	}
}

export default RTreeIterative;
