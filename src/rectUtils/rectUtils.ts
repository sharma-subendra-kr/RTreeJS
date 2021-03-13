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

import { Rect, RectData } from "../interfaces/interfaces";

export const getArea = (rect: Rect): number => {
	return (rect.x2 - rect.x1) * (rect.y2 - rect.y1);
};

export const getAreaDiff = (rectA: Rect, rectB: Rect): number => {
	const areaA = (rectA.x2 - rectA.x1) * (rectA.y2 - rectA.y1);
	const areaB = (rectB.x2 - rectB.x1) * (rectB.y2 - rectB.y1);

	return areaA - areaB;
};

export const getCombinedRect = (rectA: Rect, rectB: Rect): Rect => {
	return {
		x1: rectA.x1 < rectB.x1 ? rectA.x1 : rectB.x1,
		x2: rectA.x2 > rectB.x2 ? rectA.x2 : rectB.x2,
		y1: rectA.y1 < rectB.y1 ? rectA.y1 : rectB.y1,
		y2: rectA.y2 > rectB.y2 ? rectA.y2 : rectB.y2,
	};
};

export const getCombinedRectFromRects = (
	rdArr: RectData[],
	size: number
): Rect => {
	let x1 = Number.MAX_SAFE_INTEGER;
	let x2 = 0;
	let y1 = Number.MAX_SAFE_INTEGER;
	let y2 = 0;

	for (let i = 0; i < size; i++) {
		const rd = rdArr[i];
		x1 = rd.rect.x1 < x1 ? rd.rect.x1 : x1;
		x2 = rd.rect.x2 > x2 ? rd.rect.x2 : x2;
		y1 = rd.rect.y1 < y1 ? rd.rect.y1 : y1;
		y2 = rd.rect.y2 > y2 ? rd.rect.y2 : y2;
	}

	return { x1, x2, y1, y2 };
};