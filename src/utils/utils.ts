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

export const isDuplicate = (rdArr: RectData[], rd: RectData): boolean => {
	const len = rdArr.length;
	for (let i = 0; i < len; i++) {
		if (areRectsIdentical(rdArr[i].rect, rd.rect)) {
			return true;
		}
	}
	return false;
};

export const splitNode = (
	top: Node = { size: 0, keys: [], pointers: [], next: undefined },
	rectData: RectData,
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

	top.size = pivot + 1;

	const rRdArr: RectData[] = new Array(M); // right RectData Array
	const rNodeArr: Node[] = new Array(M); // right Node Array
	let iter = pivot;
	let count = 0;
	while (iter < M) {
		rRdArr[count] = rdArr[iter];
		rNodeArr[count] = rNodeArr[iter];
		count++;
		iter++;
	}

	const la: number = getArea(getCombinedRect(rectData.rect, lr)) - leftArea;
	const ra: number = getArea(getCombinedRect(rectData.rect, rr)) - rightArea;

	if (la < ra) {
		rdArr[top.size] = rectData;
		top.size++;
	} else {
		rRdArr[count++] = rectData;
	}

	return {
		leftRd: rdArr,
		lptrs: nodeArr,
		leftSize: top.size,
		rightRd: rRdArr,
		rptrs: rNodeArr,
		rightSize: count,
	};
};

// /**
//  * [get new dimension of node]
//  * @param  {[object]} contRect [containing rectangle]
//  * @param  {[object]} rect     [rectangle to be inserted into the tree]
//  * @return {[object]}          [rectangle]
//  */
// export const getDimenOnInsert = (contRect, rect) => {
// 	if (!contRect) {
// 		return { increase: -1 };
// 	}
// 	const newRect = {
// 		x1: contRect.x1 < rect.x1 ? contRect.x1 : rect.x1,
// 		y1: contRect.y1 < rect.y1 ? contRect.y1 : rect.y1,
// 		x2: contRect.x2 > rect.x2 ? contRect.x2 : rect.x2,
// 		y2: contRect.y2 > rect.y2 ? contRect.y2 : rect.y2,
// 	};
// 	const increase =
// 		contRect.x1 -
// 		newRect.x1 +
// 		contRect.y1 -
// 		newRect.y1 +
// 		newRect.x2 -
// 		contRect.x2 +
// 		newRect.y2 -
// 		contRect.y2;

// 	return {
// 		newRect,
// 		increase,
// 	};
// };
