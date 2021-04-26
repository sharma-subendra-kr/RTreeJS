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

import { Rect } from "../interfaces/interfaces";

const SQRT_MAX_SAFE_INTEGER = Math.sqrt(Number.MAX_SAFE_INTEGER) - 1000000;

export const getDiagonalLen = (rect: Rect): number => {
	// return rect.x2 - rect.x1 + (rect.y2 - rect.y1);
	return (
		(rect.x2 - rect.x1) * (rect.x2 - rect.x1) +
		(rect.y2 - rect.y1) * (rect.y2 - rect.y1)
	);
};

export const getDiagonalLenDiff = (rectA: Rect, rectB: Rect): number => {
	// const aD = rectA.x2 - rectA.x1 + (rectA.y2 - rectA.y1);
	// const bD = rectB.x2 - rectB.x1 + (rectB.y2 - rectB.y1);
	const aD =
		(rectA.x2 - rectA.x1) * (rectA.x2 - rectA.x1) +
		(rectA.y2 - rectA.y1) * (rectA.y2 - rectA.y1);
	const bD =
		(rectB.x2 - rectB.x1) * (rectB.x2 - rectB.x1) +
		(rectB.y2 - rectB.y1) * (rectB.y2 - rectB.y1);
	if (aD > bD) {
		return aD - bD;
	} else {
		return bD - aD;
	}
};

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
	rectArr: Rect[],
	size: number,
	start: number = 0
): Rect => {
	let x1 = Number.MAX_SAFE_INTEGER;
	let x2 = 0;
	let y1 = Number.MAX_SAFE_INTEGER;
	let y2 = 0;

	for (let i = start; i < size; i++) {
		const rect = rectArr[i];
		x1 = rect.x1 < x1 ? rect.x1 : x1;
		x2 = rect.x2 > x2 ? rect.x2 : x2;
		y1 = rect.y1 < y1 ? rect.y1 : y1;
		y2 = rect.y2 > y2 ? rect.y2 : y2;
	}

	return { x1, x2, y1, y2 };
};

export const areRectsIdentical = (rectA: Rect, rectB: Rect) => {
	if (
		rectA.x1 === rectB.x1 &&
		rectA.x2 === rectB.x2 &&
		rectA.y1 === rectB.y1 &&
		rectA.y2 === rectB.y2
	) {
		return true;
	}
	return false;
};

export const isRectInside = (containerRect: Rect, rect: Rect) => {
	if (
		containerRect.x1 <= rect.x1 &&
		containerRect.x2 >= rect.x2 &&
		containerRect.y1 <= rect.y1 &&
		containerRect.y2 >= rect.y2
	) {
		return true;
	}
	return false;
};

export const doRectsOverlap = (rectA: Rect, rectB: Rect): boolean => {
	if (
		rectA.x1 >= rectB.x2 ||
		rectB.x1 >= rectA.x2 ||
		rectA.y1 >= rectB.y2 ||
		rectB.y1 >= rectA.y2
	) {
		return false;
	}
	return true;
};

export const doRectsOverlapOrTouch = (rectA: Rect, rectB: Rect): boolean => {
	if (
		rectA.x1 > rectB.x2 ||
		rectB.x1 > rectA.x2 ||
		rectA.y1 > rectB.y2 ||
		rectB.y1 > rectA.y2
	) {
		return false;
	}
	return true;
};
