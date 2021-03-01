/*

RTreeJS, a JavaScript Tree library that helps to query, insert and delete Rectangles.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

/**
 * [get new dimension of node]
 * @param  {[object]} contRect [containing rectangle]
 * @param  {[object]} rect     [rectangle to be inserted into the tree]
 * @return {[object]}          [rectangle]
 */
export const getDimenOnInsert = (contRect, rect) => {
	if (!contRect) {
		return { increase: -1 };
	}
	const newRect = {
		x1: contRect.x1 < rect.x1 ? contRect.x1 : rect.x1,
		y1: contRect.y1 < rect.y1 ? contRect.y1 : rect.y1,
		x2: contRect.x2 > rect.x2 ? contRect.x2 : rect.x2,
		y2: contRect.y2 > rect.y2 ? contRect.y2 : rect.y2,
	};
	const increase =
		contRect.x1 -
		newRect.x1 +
		contRect.y1 -
		newRect.y1 +
		newRect.x2 -
		contRect.x2 +
		newRect.y2 -
		contRect.y2;

	return {
		newRect,
		increase,
	};
};

export const getMinRect = (rectA, rectB) => {
	const areaA = (rectA.x2 - rectA.x1) * (rectA.y2 - rectA.y1);
	const areaB = (rectB.x2 - rectB.x1) * (rectB.y2 - rectB.y1);

	return areaA - areaB;
};

export const getCombinedRect = (rectA, rectB) => {
	return {
		x1: rectA.x1 < rectB.x1 ? rectA.x1 : rectB.x1,
		y1: rectA.y1 < rectB.y1 ? rectA.y1 : rectB.y1,
		x2: rectA.x2 > rectB.x2 ? rectA.x2 : rectB.x2,
		y2: rectA.y2 > rectB.y2 ? rectA.y2 : rectB.y2,
	};
};
