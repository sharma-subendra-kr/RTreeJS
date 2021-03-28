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
import { getDiagonalLen, getCombinedRect } from "../rectUtils/rectUtils";

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
	let pivot: number = m;

	if (M % 2 === 0) {
		let clRect: Rect = rdArr[0].rect;
		let clDLen = getDiagonalLen(clRect);
		let crRect: Rect = rdArr[m + 1].rect;
		let crDLen = getDiagonalLen(crRect);

		for (let i = 1; i < m; i++) {
			clRect = getCombinedRect(clRect, rdArr[i].rect);
			clDLen = getDiagonalLen(clRect);
		}

		for (let i = m + 2; i <= M; i++) {
			crRect = getCombinedRect(crRect, rdArr[i].rect);
			crDLen = getDiagonalLen(crRect);
		}

		const lIntegration: number = getDiagonalLen(
			getCombinedRect(clRect, rdArr[m].rect)
		);
		const rIntegration: number = getDiagonalLen(
			getCombinedRect(crRect, rdArr[m].rect)
		);

		if (lIntegration - clDLen < rIntegration - crDLen) {
			pivot++;
		}
	}

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
	let MIN_LEN: number = Number.MAX_SAFE_INTEGER;
	let index: number;
	let count: number = 1;
	let tlr: Rect;
	let tlDLen: number;
	while (count < M + 1) {
		MIN_LEN = Number.MAX_SAFE_INTEGER;
		index = count;
		for (let i = count; i <= M; i++) {
			tlr = getCombinedRect(lr, rdArr[i].rect);
			tlDLen = getDiagonalLen(tlr);
			if (tlDLen < MIN_LEN) {
				index = i;
				MIN_LEN = tlDLen;
			}
		}
		swap(rdArr, nodeArr, count, index);
		count++;
	}

	return getRightNode(top, rdArr, nodeArr, M, m);
};

export const splitNodeLinear = (
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
	let leftDLen: number = getDiagonalLen(lr);
	let rightDLen: number = getDiagonalLen(rr);
	let lTempLeftRect: Rect;
	let lTempRightRect: Rect;
	let rTempLeftRect: Rect;
	let rTempRightRect: Rect;
	let lTempLeftDLen: number;
	let lTempRightDLen: number;
	let rTempLeftDLen: number;
	let rTempRightDLen: number;

	while (li <= ri) {
		ilr = rdArr[li].rect;
		irr = rdArr[ri].rect;

		lTempLeftRect = getCombinedRect(ilr, lr);
		lTempLeftDLen = getDiagonalLen(lTempLeftRect);
		lTempRightRect = getCombinedRect(ilr, rr);
		lTempRightDLen = getDiagonalLen(lTempRightRect);
		swapLeft = lTempLeftDLen - leftDLen > lTempRightDLen - rightDLen;

		rTempLeftRect = getCombinedRect(irr, lr);
		rTempLeftDLen = getDiagonalLen(rTempLeftRect);
		rTempRightRect = getCombinedRect(irr, rr);
		rTempRightDLen = getDiagonalLen(rTempRightRect);
		swapRight = rTempRightDLen - rightDLen > rTempLeftDLen - leftDLen;

		if (swapLeft && swapRight) {
			swap(rdArr, nodeArr, li, ri);
			lr = rTempLeftRect;
			leftDLen = rTempLeftDLen;
			rr = lTempRightRect;
			rightDLen = lTempRightDLen;
			li++;
			ri--;
		} else if (!swapLeft && !swapRight) {
			lr = lTempLeftRect;
			leftDLen = lTempLeftDLen;
			rr = rTempRightRect;
			rightDLen = rTempRightDLen;
			li++;
			ri--;
		} else if (!swapLeft) {
			if (lTempLeftDLen > rTempLeftDLen) {
				swap(rdArr, nodeArr, li, ri);
				lr = rTempLeftRect;
				leftDLen = rTempLeftDLen;
			} else {
				lr = lTempLeftRect;
				leftDLen = lTempLeftDLen;
			}
			li++;
		} else if (!swapRight) {
			if (rTempRightDLen > lTempRightDLen) {
				swap(rdArr, nodeArr, li, ri);
				rr = lTempRightRect;
				rightDLen = lTempRightDLen;
			} else {
				rr = rTempRightRect;
				rightDLen = rTempRightDLen;
			}
			ri--;
		} else {
			li++;
			ri--;
		}
	}

	return getRightNode(top, rdArr, nodeArr, M, m);
};
