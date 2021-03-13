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
import { getAreaDiff, getCombinedRect, getArea } from "../rectUtils/rectUtils";

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

export const splitNode = (
	rdArr: RectData[],
	nodeArr: Node[],
	rectData: RectData,
	M: number
): NodeSplitResult => {
	let lIndex = 0;
	let rIndex = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	for (const [i, rd] of rdArr.entries()) {
		if (rd.rect.x1 < min) {
			min = rd.rect.x1;
			lIndex = i;
		}
		if (rd.rect.x2 > max) {
			max = rd.rect.x2;
			rIndex = i;
		}
	}

	const lr: Rect = rdArr[lIndex].rect;
	const rr: Rect = rdArr[rIndex].rect;
	const lRdArr: RectData[] = new Array(M);
	const rRdArr: RectData[] = new Array(M);
	const lNodeArr: Node[] = new Array(M);
	const rNodeArr: Node[] = new Array(M);

	let la: number;
	let ra: number;
	let lc: number = 0;
	let rc: number = 0;
	for (const [i, rd] of rdArr.entries()) {
		if (i === lIndex || i === rIndex) {
			continue;
		}
		la = getArea(getCombinedRect(rd.rect, lr));
		ra = getArea(getCombinedRect(rd.rect, rr));

		if (la < ra) {
			lRdArr[lc] = rd;
			lNodeArr[lc] = nodeArr[i];
			lc++;
		} else {
			rRdArr[rc] = rd;
			rNodeArr[rc] = nodeArr[i];
			rc++;
		}
	}

	la = getArea(getCombinedRect(rectData.rect, lr));
	ra = getArea(getCombinedRect(rectData.rect, rr));

	if (la < ra) {
		lRdArr[lc++] = rectData;
	} else {
		rRdArr[rc++] = rectData;
	}

	return {
		leftRd: lRdArr,
		lptrs: lNodeArr,
		leftSize: lc,
		rightRd: rRdArr,
		rptrs: rNodeArr,
		rightSize: rc,
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
