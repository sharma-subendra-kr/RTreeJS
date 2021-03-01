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

import { getDimenOnInsert, getMinRect } from "./utils/utils";
import { printBinaryTree } from "./utils/printUtils";

// var RTreeIterative = (function() {
/**
		node = {
			rect: {
				x1: <number>,
				y1: <number>,
				x2: <number>,
				y2: <number>,
			}
			leftRect: null,
			left: null,
			rightRect: null,
			right: null
		}
	*/
function RTreeIterative(options) {
	this.options = options;

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

RTreeIterative.prototype.constructor = RTreeIterative;

RTreeIterative.prototype.constructNode = function (rect) {
	return {
		rect: rect,
		leftRect: null,
		left: null,
		rightRect: null,
		right: null,
	};
};

RTreeIterative.prototype.constructTree = function (data) {
	const length = data.length;
	for (let i = 0; i < length; i++) {
		this.insert(data[i]);
	}
};

RTreeIterative.prototype.getRoot = function () {
	return this.root;
};

RTreeIterative.prototype.insert = function (rect) {
	return this._insert(this.root, rect);
};

RTreeIterative.prototype._insert = function (root, rect) {
	let iter = root;
	let prevIter = null;

	if (iter == null) {
		// root is null, first node insert to left
		root = this.constructNode(null);
		root.leftRect = rect;
		root.left = this.constructNode(rect);

		return;
	} else if (iter.right == null) {
		// root has only one child
		root.rightRect = rect;
		root.right = this.constructNode(rect);

		return;
	}

	while (iter != null) {
		prevIter = iter;
		const lInsert = getDimenOnInsert(iter.leftRect, rect);
		const rInsert = getDimenOnInsert(iter.rightRect, rect);
		if (lInsert.increase <= rInsert.increase) {
			// go left
			iter.leftRect = lInsert.newRect;
			iter = iter.left;
		} else {
			// go right
			iter.rightRect = rInsert.newRect;
			iter = iter.right;
		}
	}

	let leftRect = prevIter.rect;
	let rightRect = rect;
	if (getMinRect(prevIter.rect, rect) < 0) {
		// prevIter.rect is smaller in area
		leftRect = prevIter.rect;
		rightRect = rect;
	} else {
		// rect is smaller in area
		leftRect = rect;
		rightRect = prevIter.rect;
	}
	prevIter.leftRect = leftRect;
	prevIter.left = this.constructNode(leftRect);
	prevIter.rightRect = rightRect;
	prevIter.right = this.constructNode(rightRect);
	prevIter.rect = null;
};

RTreeIterative.prototype.find = function (interval, d, findType, comp) {
	return this._find(this.root, interval, d, findType, comp);
};

RTreeIterative.prototype._find = function (root, interval, d, findType, comp) {
	return null;
};

RTreeIterative.prototype.findAll = function (
	interval,
	d,
	findType,
	comp,
	one = false
) {
	return this._findAll(this.root, interval, d, findType, comp, one);
};

RTreeIterative.prototype._findAll = function (
	root,
	interval,
	d,
	findType,
	comp,
	one
) {};

RTreeIterative.prototype.remove = function (interval, d, comp) {
	return this._remove(this.root, interval, d, comp);
};

RTreeIterative.prototype._remove = function (root, interval, d, comp) {};

// RTreeIterative.prototype.getDataInArray = function() {
// pre order
// 	if (this.root === null) return [];

// 	const elements = new Array(this.length);
// 	let iter = 0;

// 	const stack = new Array(this.length);
// 	let stackIter = -1;

// 	stack[++stackIter] = this.root;
// 	let top;
// 	let curr = this.root;
// 	while (stackIter >= 0) {
// 		top = stack[stackIter--];
// 		elements[iter++] = top;

// 		if (top.right !== null) {
// 			stack[++stackIter] = top.right;
// 		}

// 		if (top.left !== null) {
// 			stack[++stackIter] = top.left;
// 		}
// 	}

// 	return elements;
// };

RTreeIterative.prototype.getSortedData = function () {
	// inorder
	if (this.root === null) return [];

	const elements = new Array(this.length);
	let iter = 0;

	this.stack.empty();

	let curr = this.root;

	while (curr !== null || !this.stack.isEmpty()) {
		while (curr !== null) {
			this.stack.push(curr);
			curr = curr.left;
		}

		curr = this.stack.pop();
		elements[iter++] = {
			interval: { low: curr.interval.low, high: curr.interval.high },
			d: curr.d,
		};

		curr = curr.right;
	}

	return elements;
};

RTreeIterative.prototype.doOverlap = function (interval, _interval) {
	if (interval.low <= _interval.high && _interval.low <= interval.high) {
		return true;
	} else {
		return false;
	}
};

RTreeIterative.prototype.isExact = function (interval, _interval) {
	if (interval.low === _interval.low && interval.high === _interval.high) {
		return true;
	} else {
		return false;
	}
};

RTreeIterative.prototype.setData = function (data) {
	this.emptyTree();
	this.constructTree(data);
};

RTreeIterative.prototype.reset = function () {
	this.root = null;
	this.length = 0;
};

RTreeIterative.prototype.emptyTree = function () {
	this.root = null;
	this.length = 0;

	const len = Math.max(
		this.queue.queue.length,
		this.stack.stack.length,
		this.path.stack.length,
		this.result.stack.length,
		this.removeList.stack.length
	);
	for (let i = 0; i < len; i++) {
		if (this.queue.queue[i]) {
			this.queue.queue[i].interval = null;
			this.queue.queue[i].d = null;
			this.queue.queue[i].left = null;
			this.queue.queue[i].right = null;
		}

		if (this.stack.stack[i]) {
			this.stack.stack[i].interval = null;
			this.stack.stack[i].d = null;
			this.stack.stack[i].left = null;
			this.stack.stack[i].right = null;
		}
	}
};

RTreeIterative.prototype.printHtmlTree = function (func) {
	return printBinaryTree(this.root, this.length, func);
};

export default RTreeIterative;
