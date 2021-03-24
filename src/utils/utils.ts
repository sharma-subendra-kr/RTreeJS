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
	node: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	idx: number
): void => {
	for (let i = idx; i < node.size - 1; i++) {
		node.keys[i] = node.keys[i + 1];
		node.pointers[i] = node.pointers[i + 1];
	}
	node.size--;
};

export const tryBorrow = (
	node: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
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
	node: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
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
	node: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
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

	if (mergeIndex === -1) {
		node.size = 0;
		return;
	}

	node.keys[mergeIndex].rect = RECT;

	const source: Node = node.pointers[ptr] || {
		size: 0,
		keys: [],
		pointers: [],
	};
	const dest: Node = node.pointers[mergeIndex] || {
		size: 0,
		keys: [],
		pointers: [],
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
