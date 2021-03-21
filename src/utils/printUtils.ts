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

import { ArrayStack as Stack } from "Stack";
import { getCombinedRectFromRects } from "../rectUtils/rectUtils";

export const getPrintTreeData = (root: any, length: any, height: any) => {
	if (!root) {
		return [];
	}

	const st = new Stack();
	const result = new Stack();
	let HEIGHT = 0;

	result.push({
		node: {
			rect: getCombinedRectFromRects(root.keys, root.size),
		},
		HEIGHT: HEIGHT,
	});

	st.push({ node: root, ptr: -1, HEIGHT: HEIGHT++ });

	while (!st.isEmpty()) {
		const topItem = st.peek();
		const { node: top } = topItem;

		if (top.pointers[0]) {
			// traverse through internal nodes
			if (topItem.ptr + 1 < top.size) {
				result.push({
					node: top.keys[topItem.ptr + 1],
					HEIGHT: HEIGHT,
				});
				st.push({
					node: top.pointers[++topItem.ptr],
					ptr: -1,
					HEIGHT: HEIGHT++,
				});
			} else {
				st.pop();
				HEIGHT--;
			}
		} else {
			// reached leaf node
			for (let i = 0; i < top.size; i++) {
				result.push({ node: top.keys[i], HEIGHT: HEIGHT });
			}
			st.pop();
			HEIGHT--;
		}
	}

	return result.getData();
};

export const printTree = (root: any, length: any, height: any) => {
	const data = getPrintTreeData(root, length, height);
	if (!data.length) {
		return "<svg></svg>";
	}

	const arr = data.map((item: any) => {
		return `<g transform="translate(${item.node.rect.x1 * 20}, ${
			item.node.rect.y1 * 20
		})">
		<rect width="${item.node.rect.x2 * 20 - item.node.rect.x1 * 20}" height="${
			item.node.rect.y2 * 20 - item.node.rect.y1 * 20
		}" stroke="blue" fill-opacity="0"/>
		</g>`;
	});

	const html = arr.reduce((acc: any, current: any) => {
		return acc + current;
	}, "");

	return `<svg width="${data[0].node.rect.x2 * 20 + 20}" height="${
		data[0].node.rect.y2 * 20 + 20
	}">${html}</svg>`;
};
