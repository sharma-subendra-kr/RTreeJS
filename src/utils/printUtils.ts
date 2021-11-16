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

import { ArrayStack as Stack } from "@sharma-subendra-kr/stack";
import { getCombinedRectFromRects } from "../rectUtils/rectUtils";

export const getPrintTreeData = (root: any, length: any, height: any) => {
	if (!root) {
		return [];
	}

	const st = new Stack();
	const result = new Stack();
	let HEIGHT = 0;

	result.push({
		node: getCombinedRectFromRects(root.keys, root.size),
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

	const coloursMapLen = coloursMap.length;
	const colours: any = {};
	const len = data.length;
	for (let i = 0; i < len - 1; i++) {
		if (data[i].HEIGHT < coloursMapLen) {
			colours[data[i].HEIGHT] = coloursMap[data[i].HEIGHT];
		} else {
			colours[data[i].HEIGHT] = "black";
		}
	}
	colours[height] = "red";

	const WIDTH = 1000;

	let w = 0;
	data.forEach((o: any) => {
		w = o.node.x2 > w ? o.node.x2 : w;
	});
	let h = 0;
	data.forEach((o: any) => {
		h = o.node.y2 > h ? o.node.y2 : h;
	});

	const arr = data.map((item: any) => {
		const scaledX1 = (item.node.x1 * WIDTH) / w + 4 * item.HEIGHT;
		let scaledX2 = (item.node.x2 * WIDTH) / w;
		scaledX2 =
			scaledX2 > 4 * item.HEIGHT ? scaledX2 - 4 * item.HEIGHT : scaledX2;
		const scaledY1 = (item.node.y1 * WIDTH) / h + 4 * item.HEIGHT;
		let scaledY2 = (item.node.y2 * WIDTH) / h;
		scaledY2 =
			scaledY2 > 4 * item.HEIGHT ? scaledY2 - 4 * item.HEIGHT : scaledY2;

		const l = scaledX2 - scaledX1 > 0 ? scaledX2 - scaledX1 : 1;
		const b = scaledY2 - scaledY1 > 0 ? scaledY2 - scaledY1 : 1;

		return `<g transform="translate(${scaledX1}, ${scaledY1})">
			<rect width="${l}" height="${b}" stroke="${
			colours[item.HEIGHT]
		}" stroke-width="2" fill-opacity="0"/>
		</g>`;
	});

	const html = arr.reduce((acc: any, current: any) => {
		return acc + current;
	}, "");

	const legend = Object.keys(colours).map((key, index) => {
		return `<g transform="translate(${
			index * 70 + 10
		}, 10)"><circle r="5" fill="${
			colours[key]
		}"/><text dx="10" dy="5">height: ${index}</text></g>`;
	});

	data.sort((a: any, b: any) => {
		return a.HEIGHT - b.HEIGHT;
	});

	const text = data.reduce((acc: any, item: any) => {
		return (
			acc +
			`<div style="display:flex;"><span style="flex: 1;">height: ${item.HEIGHT},</span><span style="flex: 1;">rect: x1: ${item.node.x1},</span><span style="flex: 1;">x2: ${item.node.x2},</span><span style="flex: 1;">y1: ${item.node.y1},</span><span style="flex: 1;">y2: ${item.node.y2}</span></div>`
		);
	}, "");

	return `<svg width="${WIDTH + 20}" height="${
		WIDTH + 20 + 50
	}"><g width="${WIDTH}" height="${WIDTH}" transform="translate(0, 0)">${legend}</g>
	<rect transform="translate(2, 48)" width="${WIDTH}" height="${WIDTH}" stroke="black" stroke-width="2" fill-opacity="0"/>
	<g transform="translate(0, 50)">${html}</g></svg>
	<div style="margin: 16px;">
	<p>height 0 is not an actual node, its just a rect surrounding all the rects in root node.</p>
	<p>Non-leaf node have colours other then red.</p>
	<p>Leaf node is always Red.</p>
	</div>
	<div style="display: flex; flex-direction: column; margin: 16px;">${text}</div>
	`;
};
