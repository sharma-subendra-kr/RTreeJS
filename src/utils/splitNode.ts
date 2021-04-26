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

import { Rect, NodeSplitResult, Node } from "../interfaces/interfaces";
import {
	getDiagonalLen,
	getCombinedRect,
	getCombinedRectFromRects,
} from "../rectUtils/rectUtils";

export const swap = (
	rectArr: Rect[],
	nodeArr: Node[],
	li: number,
	ri: number
): void => {
	const temp: Rect = rectArr[li];
	const tempPtr: Node = nodeArr[li];
	rectArr[li] = rectArr[ri];
	nodeArr[li] = nodeArr[ri];
	rectArr[ri] = temp;
	nodeArr[ri] = tempPtr;
};

export const adjustHighLow = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rect: Rect,
	rectPtr: Node,
	M: number
): void => {
	const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};

	let lIndex = 0;
	let rIndex = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	rectArr[M] = rect;
	nodeArr[M] = rectPtr;
	for (const [i, rect] of rectArr.entries()) {
		if (rect.x2 < min) {
			min = rect.x2;
			lIndex = i;
		}
		if (rect.x1 > max) {
			max = rect.x1;
			rIndex = i;
		}
	}

	swap(rectArr, nodeArr, 0, lIndex);
	swap(rectArr, nodeArr, M, rIndex);
};

export const adjustHighLowOnY = (
	rectArr: Rect[],
	nodeArr: Node[],
	rect: Rect,
	rectPtr: Node,
	M: number
): any => {
	let lIndex = 0;
	let rIndex = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	rectArr[M] = rect;
	nodeArr[M] = rectPtr;
	for (const [i, rect] of rectArr.entries()) {
		if (rect.y2 < min) {
			min = rect.y2;
			lIndex = i;
		}
		if (rect.y1 > max) {
			max = rect.y1;
			rIndex = i;
		}
	}

	swap(rectArr, nodeArr, 0, lIndex);
	swap(rectArr, nodeArr, M, rIndex);

	return {
		rectArrY: rectArr,
		nodeArrY: nodeArr,
	};
};

export const getRightSlice = (
	rectArr: Rect[],
	nodeArr: Node[],
	pivot: number,
	M: number
): NodeSplitResult => {
	const rRectArr: Rect[] = new Array(M + 1); // right RectData Array
	const rNodeArr: Node[] = new Array(M + 1); // right Node Array
	let iter = pivot;
	let count = 0;
	while (iter < M + 1) {
		rRectArr[count] = rectArr[iter];
		rNodeArr[count] = nodeArr[iter];
		count++;
		iter++;
	}

	return {
		rightRect: rRectArr,
		rptrs: rNodeArr,
		rightSize: count,
	};
};

export const getRightNode = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rectArr: Rect[],
	nodeArr: Node[],
	M: number,
	m: number
): NodeSplitResult => {
	let pivot: number = m;

	if (M % 2 === 0) {
		let clRect: Rect = rectArr[0];
		let clDLen = getDiagonalLen(clRect);
		let crRect: Rect = rectArr[m + 1];
		let crDLen = getDiagonalLen(crRect);

		for (let i = 1; i < m; i++) {
			clRect = getCombinedRect(clRect, rectArr[i]);
			clDLen = getDiagonalLen(clRect);
		}

		for (let i = m + 2; i <= M; i++) {
			crRect = getCombinedRect(crRect, rectArr[i]);
			crDLen = getDiagonalLen(crRect);
		}

		const lIntegration: number = getDiagonalLen(
			getCombinedRect(clRect, rectArr[m])
		);
		const rIntegration: number = getDiagonalLen(
			getCombinedRect(crRect, rectArr[m])
		);

		if (lIntegration - clDLen < rIntegration - crDLen) {
			pivot++;
		}
	}

	top.size = pivot;

	// const rRdArr: RectData[] = new Array(M + 1); // right RectData Array
	// const rNodeArr: Node[] = new Array(M + 1); // right Node Array
	// let iter = pivot;
	// let count = 0;
	// while (iter < M + 1) {
	// 	rRdArr[count] = rdArr[iter];
	// 	rNodeArr[count] = nodeArr[iter];
	// 	count++;
	// 	iter++;
	// }

	// return {
	// 	rightRd: rRdArr,
	// 	rptrs: rNodeArr,
	// 	rightSize: count,
	// };

	return getRightSlice(rectArr, nodeArr, pivot, M);
};

export const splitNodeQuadratic = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rect: Rect,
	rectPtr: Node,
	M: number,
	m: number
): NodeSplitResult => {
	const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};
	const copyRectArr = [...rectArr];
	const copyNodeArr = [...nodeArr];
	adjustHighLow(top, rect, rectPtr, M);
	const { rectArrY, nodeArrY } = adjustHighLowOnY(
		copyRectArr,
		copyNodeArr,
		rect,
		rectPtr,
		M
	);

	const lr: Rect = rectArr[0];
	let MIN_LEN: number = Number.MAX_SAFE_INTEGER;
	let index: number;

	const lrY: Rect = rectArrY[0];
	let MIN_LEN_Y: number = Number.MAX_SAFE_INTEGER;
	let indexY: number;

	let count: number = 1;
	let tlr: Rect;
	let tlDLen: number;
	while (count < M + 1) {
		MIN_LEN = Number.MAX_SAFE_INTEGER;
		MIN_LEN_Y = Number.MAX_SAFE_INTEGER;
		index = count;
		indexY = count;
		for (let i = count; i <= M; i++) {
			tlr = getCombinedRect(lr, rectArr[i]);
			tlDLen = getDiagonalLen(tlr);
			if (tlDLen < MIN_LEN) {
				index = i;
				MIN_LEN = tlDLen;
			}

			tlr = getCombinedRect(lrY, rectArrY[i]);
			tlDLen = getDiagonalLen(tlr);
			if (tlDLen < MIN_LEN_Y) {
				indexY = i;
				MIN_LEN_Y = tlDLen;
			}
		}
		swap(rectArr, nodeArr, count, index);
		swap(rectArrY, nodeArrY, count, indexY);
		count++;
	}

	let pivot: number = m;
	let pivotY: number = m;
	if (M % 2 === 0) {
		let clRect: Rect = rectArr[0];
		let clDLen = getDiagonalLen(clRect);
		let crRect: Rect = rectArr[m + 1];
		let crDLen = getDiagonalLen(crRect);

		let clRectY: Rect = rectArr[0];
		let clDLenY = getDiagonalLen(clRect);
		let crRectY: Rect = rectArr[m + 1];
		let crDLenY = getDiagonalLen(crRect);

		for (let i = 1; i < m; i++) {
			clRect = getCombinedRect(clRect, rectArr[i]);
			clDLen = getDiagonalLen(clRect);

			clRectY = getCombinedRect(clRectY, rectArrY[i]);
			clDLenY = getDiagonalLen(clRectY);
		}

		for (let i = m + 2; i <= M; i++) {
			crRect = getCombinedRect(crRect, rectArr[i]);
			crDLen = getDiagonalLen(crRect);

			crRectY = getCombinedRect(crRectY, rectArrY[i]);
			crDLenY = getDiagonalLen(crRectY);
		}

		const lIntegration: number = getDiagonalLen(
			getCombinedRect(clRect, rectArr[m])
		);
		const rIntegration: number = getDiagonalLen(
			getCombinedRect(crRect, rectArr[m])
		);

		const lIntegrationY: number = getDiagonalLen(
			getCombinedRect(clRectY, rectArrY[m])
		);
		const rIntegrationY: number = getDiagonalLen(
			getCombinedRect(crRectY, rectArrY[m])
		);

		if (lIntegration - clDLen < rIntegration - crDLen) {
			pivot++;
		}

		if (lIntegrationY - clDLenY < rIntegrationY - crDLenY) {
			pivotY++;
		}
	}

	const lcDLen = getDiagonalLen(getCombinedRectFromRects(rectArr, pivot - 1));
	const rcDLen = getDiagonalLen(
		getCombinedRectFromRects(rectArr, M + 1, pivot)
	);

	const lcDLenY = getDiagonalLen(
		getCombinedRectFromRects(rectArrY, pivotY - 1)
	);
	const rcDLenY = getDiagonalLen(
		getCombinedRectFromRects(rectArrY, M + 1, pivotY)
	);

	if (lcDLen + rcDLen < lcDLenY + rcDLenY) {
		top.size = pivot;
		return getRightSlice(rectArr, nodeArr, pivot, M);
	} else {
		top.size = pivotY;
		top.keys = rectArrY;
		top.pointers = nodeArrY;
		return getRightSlice(rectArrY, nodeArrY, pivotY, M);
	}

	// return getRightNode(top, rdArr, nodeArr, M, m);
};

export const splitNodeLinear = (
	top: Node = {
		size: 0,
		keys: [],
		pointers: [],
	},
	rect: Rect,
	rectPtr: Node,
	M: number,
	m: number
): NodeSplitResult => {
	const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};

	adjustHighLow(top, rect, rectPtr, M);

	let lr: Rect = rectArr[0]; // left Rect
	let rr: Rect = rectArr[M]; // right Rect

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
		ilr = rectArr[li];
		irr = rectArr[ri];

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
			swap(rectArr, nodeArr, li, ri);
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
				swap(rectArr, nodeArr, li, ri);
				lr = rTempLeftRect;
				leftDLen = rTempLeftDLen;
			} else {
				lr = lTempLeftRect;
				leftDLen = lTempLeftDLen;
			}
			li++;
		} else if (!swapRight) {
			if (rTempRightDLen > lTempRightDLen) {
				swap(rectArr, nodeArr, li, ri);
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

	return getRightNode(top, rectArr, nodeArr, M, m);
};
