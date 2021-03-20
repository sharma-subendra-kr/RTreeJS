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

import { Nullable, NULL } from "../types/types";

export interface Rect {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export interface RectData {
	rect: Rect;
	data?: Nullable<any>;
}

export interface NODE {
	size: number;
	pointers: Node[];
	keys: RectData[];
	next: Node;
	prev: Node;
}

export type Node = NODE | undefined;

export interface NodeSplitResult {
	rightRd: RectData[];
	rptrs: Node[];
	rightSize: number;
}

export interface _SplittedNodes_ {
	left: Node;
	right: Node;
}

export type SplittedNodes = _SplittedNodes_ | undefined;

// export interface InsertStackItem {
// 	node: Node;
// 	pos: number;
// }
