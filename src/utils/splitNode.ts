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

export const swap = (
	rdArr: RectData[],
	nodeArr: Node[],
	li: number,
	ri: number
): void => {
	const temp: RectData = rdArr[li];
	const tempPtr: Node = nodeArr[li];
	rdArr[li] = rdArr[ri];
	nodeArr[li] = nodeArr[ri];
	rdArr[ri] = temp;
	nodeArr[ri] = tempPtr;
};

export const adjustHighLow = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rectData: RectData,
	rectDataPtr: Node,
	M: number
): void => {
	const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};

	let lIndex = 0;
	let rIndex = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	rdArr[M] = rectData;
	nodeArr[M] = rectDataPtr;
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

	swap(rdArr, nodeArr, 0, lIndex);
	swap(rdArr, nodeArr, M, rIndex);
};

export const getRightNode = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rdArr: RectData[],
	nodeArr: Node[],
	M: number,
	m: number
): NodeSplitResult => {
	const pivot: number = m;
	top.size = pivot;

	const rRdArr: RectData[] = new Array(M + 1); // right RectData Array
	const rNodeArr: Node[] = new Array(M + 1); // right Node Array
	let iter = pivot;
	let count = 0;
	while (iter < M + 1) {
		rRdArr[count] = rdArr[iter];
		rNodeArr[count] = nodeArr[iter];
		count++;
		iter++;
	}

	return {
		rightRd: rRdArr,
		rptrs: rNodeArr,
		rightSize: count,
	};
};

export const splitNodeQuadratic = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rectData: RectData,
	rectDataPtr: Node,
	M: number,
	m: number
): NodeSplitResult => {
	const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};

	adjustHighLow(top, rectData, rectDataPtr, M);

	const lr: Rect = rdArr[0].rect;
	let MIN_AREA: number = Number.MAX_SAFE_INTEGER;
	let index: number;
	let count: number = 1;
	let tlr: Rect;
	let tla: number;
	while (count < M + 1) {
		MIN_AREA = Number.MAX_SAFE_INTEGER;
		index = count;
		for (let i = count; i <= M; i++) {
			tlr = getCombinedRect(lr, rdArr[i].rect);
			tla = getArea(tlr);
			if (tla < MIN_AREA) {
				index = i;
				MIN_AREA = tla;
			}
		}
		swap(rdArr, nodeArr, count, index);
		count++;
	}

	return getRightNode(top, rdArr, nodeArr, M, m);
};

export const splitNode = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rectData: RectData,
	rectDataPtr: Node,
	M: number,
	m: number
): NodeSplitResult => {
	const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};

	adjustHighLow(top, rectData, rectDataPtr, M);

	let lr: Rect = rdArr[0].rect; // left Rect
	let rr: Rect = rdArr[M].rect; // right Rect

	let li = 1;
	let ri = M - 1;
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

	while (li <= ri) {
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
			swap(rdArr, nodeArr, li, ri);
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
			if (lTempLeftArea > rTempLeftArea) {
				swap(rdArr, nodeArr, li, ri);
				lr = rTempLeftRect;
				leftArea = rTempLeftArea;
			} else {
				lr = lTempLeftRect;
				leftArea = lTempLeftArea;
			}
			li++;
		} else {
			if (rTempRightArea > lTempRightArea) {
				swap(rdArr, nodeArr, li, ri);
				rr = lTempRightRect;
				rightArea = lTempRightArea;
			} else {
				rr = rTempRightRect;
				rightArea = rTempRightArea;
			}
			ri--;
		}
		li++;
		ri--;
	}

	return getRightNode(top, rdArr, nodeArr, M, m);
};
