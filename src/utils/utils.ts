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

import {
	Rect,
	RectData,
	NodeSplitResult,
	Node,
} from "../interfaces/interfaces";
import {
	getAreaDiff,
	getCombinedRect,
	getArea,
	areRectsIdentical,
	getCombinedRectFromRects,
} from "../rectUtils/rectUtils";

export const getPos = (rdArr: RectData[], rect: Rect, size: number): number => {
	let INCREASE: number = Number.MAX_SAFE_INTEGER;
	let index: number = 0;

	for (let i = 0; i < size; i++) {
		const rd = rdArr[i];
		const diff = getAreaDiff(getCombinedRect(rd.rect, rect), rd.rect);
		if (diff < INCREASE) {
			INCREASE = diff;
			index = i;
		}
	}

	return index;
};

export const isDuplicate = (
	rdArr: RectData[],
	size: number,
	rd: RectData
): boolean => {
	for (let i = 0; i < size; i++) {
		if (areRectsIdentical(rdArr[i].rect, rd.rect)) {
			return true;
		}
	}
	return false;
};

export const splitNode = (
	top: Node = { size: 0, keys: [], pointers: [], next: undefined },
	rectData: RectData,
	rectDataPtr: Node,
	M: number
): NodeSplitResult => {
	const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};

	let lIndex = 0;
	let rIndex = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	for (const [i, rd] of rdArr.entries()) {
		if (rd.rect.x2 < min) {
			min = rd.rect.x2;
			lIndex = i;
		}
		if (rd.rect.x1 > max) {
			max = rd.rect.x1;
			rIndex = i;
		}
	}

	let temp = rdArr[0];
	let tempPtr = nodeArr[0];
	rdArr[0] = rdArr[lIndex];
	nodeArr[0] = nodeArr[lIndex];
	rdArr[lIndex] = temp;
	nodeArr[lIndex] = tempPtr;

	temp = rdArr[M - 1];
	tempPtr = nodeArr[M - 1];
	rdArr[M - 1] = rdArr[rIndex];
	nodeArr[M - 1] = nodeArr[rIndex];
	rdArr[rIndex] = temp;
	nodeArr[rIndex] = tempPtr;

	let lr: Rect = rdArr[0].rect; // left Rect
	let rr: Rect = rdArr[M - 1].rect; // right Rect

	let li = 1;
	let ri = M - 2;
	let swapLeft: boolean;
	let swapRight: boolean;
	let ilr: Rect; // ith left Rect
	let irr: Rect; // ith right Rect
	let leftArea: number = getArea(lr);
	let rightArea: number = getArea(rr);
	let lTempLeftRect: Rect;
	let lTempRightRect: Rect;
	let rTempLeftRect: Rect;
	let rTempRightRect: Rect;
	let lTempLeftArea: number;
	let lTempRightArea: number;
	let rTempLeftArea: number;
	let rTempRightArea: number;

	while (li < ri) {
		ilr = rdArr[li].rect;
		irr = rdArr[ri].rect;

		lTempLeftRect = getCombinedRect(ilr, lr);
		lTempLeftArea = getArea(lTempLeftRect);
		lTempRightRect = getCombinedRect(ilr, rr);
		lTempRightArea = getArea(lTempRightRect);
		swapLeft = lTempLeftArea - leftArea > lTempRightArea - rightArea;

		rTempLeftRect = getCombinedRect(irr, lr);
		rTempLeftArea = getArea(rTempLeftRect);
		rTempRightRect = getCombinedRect(irr, rr);
		rTempRightArea = getArea(rTempRightRect);
		swapRight = rTempRightArea - rightArea > rTempLeftArea - leftArea;

		if (swapLeft && swapRight) {
			const temp: RectData = rdArr[li];
			const tempPtr: Node = nodeArr[li];
			rdArr[li] = rdArr[ri];
			nodeArr[li] = nodeArr[ri];
			rdArr[ri] = temp;
			nodeArr[ri] = tempPtr;
			lr = rTempLeftRect;
			leftArea = rTempLeftArea;
			rr = lTempRightRect;
			rightArea = lTempRightArea;
			li++;
			ri--;
		} else if (!swapLeft && !swapRight) {
			lr = lTempLeftRect;
			leftArea = lTempLeftArea;
			rr = rTempRightRect;
			rightArea = rTempRightArea;
			li++;
			ri--;
		} else if (!swapLeft) {
			lr = lTempLeftRect;
			leftArea = lTempLeftArea;
			li++;
		} else {
			rr = rTempRightRect;
			rightArea = rTempRightArea;
			ri--;
		}
	}

	let pivot: number = li; // pivot is starting index for the new node
	top.size = pivot;
	if (li === ri) {
		lTempLeftRect = getCombinedRect(rdArr[li].rect, lr);
		lTempLeftArea = getArea(lTempLeftRect);
		lTempRightRect = getCombinedRect(rdArr[li].rect, rr);
		lTempRightArea = getArea(lTempRightRect);
		if (lTempLeftArea < lTempRightArea) {
			lr = lTempLeftRect;
			leftArea = lTempLeftArea;
			pivot++;
			top.size++;
		} else {
			rr = lTempRightRect;
			rightArea = lTempRightArea;
		}
	}

	const rRdArr: RectData[] = new Array(M); // right RectData Array
	const rNodeArr: Node[] = new Array(M); // right Node Array
	let iter = pivot;
	let count = 0;
	while (iter < M) {
		rRdArr[count] = rdArr[iter];
		rNodeArr[count] = nodeArr[iter];
		count++;
		iter++;
	}

	const la: number = getArea(getCombinedRect(rectData.rect, lr)) - leftArea;
	const ra: number = getArea(getCombinedRect(rectData.rect, rr)) - rightArea;

	if (la < ra) {
		rdArr[top.size] = rectData;
		nodeArr[top.size] = rectDataPtr;
		top.size++;
	} else {
		rRdArr[count] = rectData;
		rNodeArr[count] = rectDataPtr;
		count++;
	}

	return {
		rightRd: rRdArr,
		rptrs: rNodeArr,
		rightSize: count,
	};
};

export const getPosToRemove = (
	rdArr: RectData[],
	size: number,
	rect: Rect
): number => {
	for (let i = 0; i < size; i++) {
		if (areRectsIdentical(rdArr[i].rect, rect)) {
			return i;
		}
	}
	return -1;
};

export const removeRect = (
	node: Node = { size: 0, keys: [], pointers: [], next: undefined },
	idx: number
): void => {
	for (let i = idx; i < node.size - 1; i++) {
		node.keys[i] = node.keys[i + 1];
		node.pointers[i] = node.pointers[i + 1];
	}
	node.size--;
};

export const tryBorrow = (
	node: Node = { size: 0, keys: [], pointers: [], next: undefined },
	ptr: number,
	m: number
): any => {
	let MAX_AREA: number = 0;
	let maxAreaIndex: number = -1;
	let area: number;
	for (let i = 0; i < node.size; i++) {
		if (i !== ptr && (node.pointers[i]?.size || -1) > m) {
			area = getArea(node.keys[i].rect);
			if (area > MAX_AREA) {
				MAX_AREA = area;
				maxAreaIndex = i;
			}
		}
	}

	let idx = -1;
	if (maxAreaIndex >= 0) {
		let MIN_AREA = Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER;
		const ptrArea = getArea(node.keys[ptr].rect);
		let tempArea: number;
		for (let i = 0; i < (node.pointers[maxAreaIndex]?.size || -1); i++) {
			tempArea = getArea(
				getCombinedRect(
					node.pointers[maxAreaIndex]?.keys[i].rect || {
						x1: Number.MAX_SAFE_INTEGER,
						x2: Number.MAX_SAFE_INTEGER,
						y1: Number.MAX_SAFE_INTEGER,
						y2: Number.MAX_SAFE_INTEGER,
					},
					node.keys[ptr].rect
				)
			);
			if (Math.abs(tempArea - ptrArea) < MIN_AREA) {
				idx = i;
				MIN_AREA = tempArea;
			}
		}
	}

	if (idx >= 0) {
		return { ptr: maxAreaIndex, ptrPtr: idx };
	}
};

export const performBorrow = (
	node: Node = { size: 0, keys: [], pointers: [], next: undefined },
	ptr: number,
	borrow: any
): void => {
	let bptr: number;
	let bptrPtr: number;
	let bRect: Rect;

	const lenderNode: Node = node.pointers[borrow.ptr] || {
		size: 0,
		keys: [],
		pointers: [],
		next: undefined,
	};
	const lendRect = lenderNode.keys[borrow.ptrPtr].rect;
	const lendNode: Node = lenderNode.pointers[borrow.ptrPtr];

	for (let i = borrow.ptrPtr; i < lenderNode.size - 1; i++) {
		lenderNode.keys[i] = lenderNode.keys[i + 1];
		lenderNode.pointers[i] = lenderNode.pointers[i + 1];
	}
	lenderNode.size--;

	node.keys[borrow.ptr].rect = getCombinedRectFromRects(
		lenderNode.keys,
		lenderNode.size
	);

	const borrowerSize = node.pointers[ptr]?.size || 0;
	const borrowerNode = node.pointers[ptr] || {
		size: 0,
		keys: [],
		pointers: [],
		next: undefined,
	};
	borrowerNode.keys[borrowerSize] = { rect: lendRect };
	borrowerNode.pointers[borrowerSize] = lendNode;
	borrowerNode.size++;

	node.keys[ptr].rect = getCombinedRectFromRects(
		borrowerNode.keys,
		borrowerNode.size
	);
};

export const merge = (
	node: Node = { size: 0, keys: [], pointers: [], next: undefined },
	ptr: number,
	m: number
): void => {
	let mergeIndex = -1;
	let MIN_AREA = Number.MAX_SAFE_INTEGER;
	let RECT: Rect = { x1: -1, x2: -1, y1: -1, y2: -1 };

	for (let i = 0; i < node.size; i++) {
		if (i === ptr) {
			continue;
		}
		const r = getCombinedRect(node.keys[i].rect, node.keys[ptr].rect);
		const area = getArea(r);
		if (area < MIN_AREA) {
			MIN_AREA = area;
			RECT = r;
			mergeIndex = i;
		}
	}

	node.keys[mergeIndex].rect = RECT;

	const source: Node = node.pointers[ptr] || {
		size: 0,
		keys: [],
		pointers: [],
		next: undefined,
	};
	const dest: Node = node.pointers[mergeIndex] || {
		size: 0,
		keys: [],
		pointers: [],
		next: undefined,
	};

	let iter = 0;
	while (iter < source.size) {
		dest.keys[dest.size] = source.keys[iter];
		dest.pointers[dest.size] = source.pointers[iter];
		iter++;
		dest.size++;
	}

	const pivot = ptr;
	for (let i = pivot; i < node.size - 1; i++) {
		node.keys[i] = node.keys[i + 1];
		node.pointers[i] = node.pointers[i + 1];
	}
	node.size--;
};
