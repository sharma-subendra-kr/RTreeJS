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

import { ArrayStack as Stack } from "Stack";
import { ArrayQueue as Queue } from "Queue";

import {
	Rect,
	RectData,
	Node,
	NodeSplitResult,
	InsertStackItem,
	SplittedNodes,
} from "./interfaces/interfaces";
import { NULL } from "./types/types";
import { getPos, splitNode } from "./utils/utils";
import { getCombinedRectFromRects } from "./rectUtils/rectUtils";
// import {getCombinedRect, }
// import { printBinaryTree } from "./utils/printUtils";

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
	*	Max keys in a non-leaf node: M
	*	Max children in a non-leaf node: m = Math.ceil(M/2) - 1
	*	Min Keys in a non-leaf node: m = Math.ceil(M/2) - 1
	*	Min children in a non-leaf node: m = Math.ceil(M/2) - 1
	*	Max Keys in a leaf node: M
	*	Min Keys in a leaf node: m = Math.ceil(M/2) - 1
	*	All leaves appear at the same level
 */

/**
		node = {
			size: <number>,
			pointers: <Array[ node ]>
			keys: <Array[rd]>
			next: <node>
		}
	
		rd = {
			rect: <object>,
			data: <object>
		}

		rect = {
			tl: { x: <number>, y: <number> },
			tr: { x: <number>, y: <number> },
			br: { x: <number>, y: <number> },
			bl: { x: <number>, y: <number> }
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
	// options: {
	// 	M: number;
	// 	data: Record<string, unknown>;
	// };
	options: Record<string, any>;
	M: number;
	m: number;
	root: Node;
	length: number;
	initialStackSize: number;
	initialQueueSize: number;
	queue: any;
	stack: any;

	constructor(options: Record<string, any>) {
		this.options = options;

		this.M = options.M || 4;
		this.m = Math.ceil(this.M / 2) - 1;

		if (this.M < 2) {
			throw `Value of M cannot be less than 2`;
		}

		this.root = null;
		this.length = 0;

		this.initialStackSize =
			options?.data?.length * 2 || options?.initialStackSize || 500;
		this.initialQueueSize =
			options?.data?.length * 2 || options?.initialQueueSize || 500;

		this.queue = new Queue({ initialSize: this.initialQueueSize });
		this.stack = new Stack({ initialSize: this.initialStackSize });

		if (Array.isArray(options?.data)) {
			this.constructTree(options.data);
		}

		delete this.options?.data;
	}

	getRoot(): any {
		return this.root;
	}

	constructNode(rd?: RectData, rdArr?: RectData[], size?: number): Node {
		const node: Node = {
			size: 0,
			pointers: new Array(this.M),
			keys: new Array(this.M),
			next: null,
		};
		if (rd) {
			node.keys[0] = rd;
			node.size = 1;
		} else if (rdArr) {
			node.keys = rdArr;
			node.size = size || 0;
		}

		return node;
	}

	constructTree(data: RectData[]): void {
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
	insert(rd: RectData): any {
		return this._insert(rd);
	}

	_insert(rd: RectData): any {
		let inserted: boolean = false;
		let splittedNodes: SplittedNodes = null;

		const st = new Stack();
		if (this.root === null) {
			// insert root
			this.root = this.constructNode(rd);
			return this.root;
		}

		st.push({ node: this.root, pos: -1 });

		while (!st.isEmpty()) {
			const topItem = st.peak();
			const top = topItem.node;

			if (!inserted) {
				if (top.pointers[0]) {
					// traverse through the internal node whose area increases the least
					const POS = getPos(top.keys, rd.rect, top.size);
					top.pos = POS;
					st.push({ node: top.pointers[POS], pos: POS });
					continue;
				}

				// reached leaf node, now insert
				if (top.size < this.M) {
					// no node splitting required
					top.keys[top.size] = rd;
					top.size++;
					break;
				}
				// node splitting required
				const spRectData: NodeSplitResult = splitNode(top.keys, rd, this.M);
				splittedNodes = {
					left: this.constructNode(
						undefined,
						spRectData.left,
						spRectData.leftSize
					),
					right: this.constructNode(
						undefined,
						spRectData.right,
						spRectData.rightSize
					),
				};
				inserted = true;
				st.pop();
			} else {
				const crect = getCombinedRectFromRects(
					splittedNodes?.left?.keys || [],
					splittedNodes?.left?.size || 0
				);
				top.keys[topItem.pos] = { rect: crect };
				top.pointers[topItem.pos] = splittedNodes?.left || null;

				if (top.size < this.M) {
					top.keys[top.size] = {
						rect: getCombinedRectFromRects(
							splittedNodes?.right?.keys || [],
							splittedNodes?.right?.size || 0
						),
					};
					top.pointers[top.size] = splittedNodes?.right || null;
					top.size++;
					splittedNodes = null;

					break;
				} else {
					const crect: Rect = getCombinedRectFromRects(
						splittedNodes?.right?.keys || [],
						splittedNodes?.right?.size || 0
					);
					const spRectData: NodeSplitResult = splitNode(
						top.keys,
						{ rect: crect },
						this.M
					);
					splittedNodes = {
						left: this.constructNode(
							undefined,
							spRectData.left,
							spRectData.leftSize
						),
						right: this.constructNode(
							undefined,
							spRectData.right,
							spRectData.rightSize
						),
					};
					inserted = true;
					st.pop();
				}
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
				node.keys = [{ rect: crectLeft }, { rect: crectRight }];
				node.pointers = [splittedNodes?.left, splittedNodes?.right];

				this.root = node;
			}
		}
	}
}

// function RTreeIterative(options) {
// 	this.options = options;

// 	this.M = options.M || 4;
// 	this.m = Math.ceil(this.M / 2) - 1;

// 	if (this.M < 2) {
// 		throw `Value of M cannot be less than 2`;
// 	}

// 	this.root = null;
// 	this.length = 0;

// 	this.initialStackSize =
// 		options?.data?.length * 2 || options?.initialStackSize || 500;
// 	this.initialQueueSize =
// 		options?.data?.length * 2 || options?.initialQueueSize || 500;

// 	this.queue = new Queue({ initialSize: this.initialQueueSize });
// 	this.stack = new Stack({ initialSize: this.initialStackSize });

// 	if (Array.isArray(options?.data)) {
// 		this.constructTree(options.data);
// 	}

// 	delete this.options?.data;
// }

// RTreeIterative.prototype.getRoot = function () {
// 	return this.root;
// };

// RTreeIterative.prototype.constructNode = function (rect, data) {
// 	return {
// 		size: 0,
// 		pointers: new Array(this.M),
// 		keys: new Array(this.M),
// 		next: null,
// 		data: data,
// 	};
// };

// RTreeIterative.prototype.constructTree = function (data) {
// 	const length = data.length;
// 	for (let i = 0; i < length; i++) {
// 		this.insert(data[i]);
// 	}
// };

/*
 *	@typedef {Object} rd Object
 *	@property {Object} rect Object defining a rectangle
 *	@property {Object} data Any object passed as data description for the rectangle
 *
 * @param {rd} rd  with rectangle and data
 */
// RTreeIterative.prototype.insert = function (rd) {
// 	return this._insert(rd);
// };

// RTreeIterative.prototype._insert = function (rd) {
// 	const st = new Stack();
// 	if (this.root === null) {
// 		// insert root
// 	}

// 	st.push(this.root);

// 	while (!st.isEmpty()) {
// 		const top = st.peak();
// 		if (!top.keys[0]) {
// 			// reached leaf node, now insert
// 		} else {
// 			// traverse through the internal node whose area increases the least
// 			const POS = getPos(top.keys, rd.rect);
// 		}
// 	}
// };

// RTreeIterative.prototype.find = function (interval, d, findType, comp) {
// 	return this._find(this.root, interval, d, findType, comp);
// };

// RTreeIterative.prototype._find = function (root, interval, d, findType, comp) {
// 	return null;
// };

// RTreeIterative.prototype.findAll = function (
// 	interval,
// 	d,
// 	findType,
// 	comp,
// 	one = false
// ) {
// 	return this._findAll(this.root, interval, d, findType, comp, one);
// };

// RTreeIterative.prototype._findAll = function (
// 	root,
// 	interval,
// 	d,
// 	findType,
// 	comp,
// 	one
// ) {};

// RTreeIterative.prototype.remove = function (interval, d, comp) {
// 	return this._remove(this.root, interval, d, comp);
// };

// RTreeIterative.prototype._remove = function (root, interval, d, comp) {};

// RTreeIterative.prototype.getSortedData = function () {

// };

// RTreeIterative.prototype.setData = function (data) {
// 	this.emptyTree();
// 	this.constructTree(data);
// };

// RTreeIterative.prototype.reset = function () {
// 	this.root = null;
// 	this.length = 0;
// };

// RTreeIterative.prototype.emptyTree = function () {
// 	this.root = null;
// 	this.length = 0;

// 	const len = Math.max(
// 		this.queue.queue.length,
// 		this.stack.stack.length,
// 		this.path.stack.length,
// 		this.result.stack.length,
// 		this.removeList.stack.length
// 	);
// 	for (let i = 0; i < len; i++) {
// 		if (this.queue.queue[i]) {
// 			this.queue.queue[i].interval = null;
// 			this.queue.queue[i].d = null;
// 			this.queue.queue[i].left = null;
// 			this.queue.queue[i].right = null;
// 		}

// 		if (this.stack.stack[i]) {
// 			this.stack.stack[i].interval = null;
// 			this.stack.stack[i].d = null;
// 			this.stack.stack[i].left = null;
// 			this.stack.stack[i].right = null;
// 		}
// 	}
// };

// RTreeIterative.prototype.printHtmlTree = function (func) {
// 	return printBinaryTree(this.root, this.length, func);
// };

export default RTreeIterative;