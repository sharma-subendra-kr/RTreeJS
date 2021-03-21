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

const coloursMap = [
	"green",
	"purple",
	"blue",
	"orange",
	"aqua",
	"blueviolet",
	"brown",
	"cadetblue",
	"yellow",
	"violet",
	"thistle",
	"teal",
	"steelblue",
	"silver",
	"sienna",
	"sandybrown",
	"salmon",
	"saddlebrown",
	"olive",
];

export const printTree = (root: any, length: any, height: any) => {
	const data = getPrintTreeData(root, length, height);
	console.log("data", data);
	if (!data.length) {
		return "No Data";
	}

	const colours: any = {};
	const len = data.length;
	for (let i = 0; i < len - 1; i++) {
		if (i < coloursMap.length) {
			colours[i] = coloursMap[i];
		} else {
			colours[i] = "black";
		}
	}
	colours[len - 1] = "red";

	const WIDTH = 600;

	const w = data[0].node.rect.x2 - 0;

	const arr = data.map((item: any) => {
		const scaledX1 = (item.node.rect.x1 * WIDTH) / w + 2 * item.HEIGHT;
		const scaledX2 = (item.node.rect.x2 * WIDTH) / w - 2 * item.HEIGHT;
		const scaledY1 = (item.node.rect.y1 * WIDTH) / w + 2 * item.HEIGHT;
		const scaledY2 = (item.node.rect.y2 * WIDTH) / w - 2 * item.HEIGHT;
		return `<g transform="translate(${scaledX1}, ${scaledY1})">
			<rect width="${scaledX2 - scaledX1}" height="${scaledY2 - scaledY1}" stroke="${
			colours[item.HEIGHT]
		}" stroke-width="1" fill-opacity="0"/>
		</g>`;
	});

	const html = arr.reduce((acc: any, current: any) => {
		return acc + current;
	}, "");

	return `<svg width="${WIDTH + 20}" height="${WIDTH + 20}">${html}</svg>`;
};
