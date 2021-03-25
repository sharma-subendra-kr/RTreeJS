/** @license RTreeJS

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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Stack"), require("Queue"));
	else if(typeof define === 'function' && define.amd)
		define(["Stack", "Queue"], factory);
	else if(typeof exports === 'object')
		exports["RTreeJS"] = factory(require("Stack"), require("Queue"));
	else
		root["RTreeJS"] = factory(root["Stack"], root["Queue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "RTreeIterative", function() { return /* reexport */ rTreeIterative; });

// EXTERNAL MODULE: external {"commonjs":"Stack","commonjs2":"Stack","amd":"Stack","root":"Stack"}
var external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"commonjs":"Queue","commonjs2":"Queue","amd":"Queue","root":"Queue"}
var external_commonjs_Queue_commonjs2_Queue_amd_Queue_root_Queue_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/rectUtils/rectUtils.ts
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
const SQRT_MAX_SAFE_INTEGER = Math.sqrt(Number.MAX_SAFE_INTEGER) - 1000000;
const getArea = (rect) => {
    return (rect.x2 - rect.x1) * (rect.y2 - rect.y1);
};
const getAreaDiff = (rectA, rectB) => {
    const areaA = (rectA.x2 - rectA.x1) * (rectA.y2 - rectA.y1);
    const areaB = (rectB.x2 - rectB.x1) * (rectB.y2 - rectB.y1);
    return areaA - areaB;
};
const getCombinedRect = (rectA, rectB) => {
    return {
        x1: rectA.x1 < rectB.x1 ? rectA.x1 : rectB.x1,
        x2: rectA.x2 > rectB.x2 ? rectA.x2 : rectB.x2,
        y1: rectA.y1 < rectB.y1 ? rectA.y1 : rectB.y1,
        y2: rectA.y2 > rectB.y2 ? rectA.y2 : rectB.y2,
    };
};
const getCombinedRectFromRects = (rdArr, size) => {
    let x1 = SQRT_MAX_SAFE_INTEGER;
    let x2 = 0;
    let y1 = SQRT_MAX_SAFE_INTEGER;
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
const areRectsIdentical = (rectA, rectB) => {
    if (rectA.x1 === rectB.x1 &&
        rectA.x2 === rectB.x2 &&
        rectA.y1 === rectB.y1 &&
        rectA.y2 === rectB.y2) {
        return true;
    }
    return false;
};
const isRectInside = (containerRect, rect) => {
    if (containerRect.x1 <= rect.x1 &&
        containerRect.x2 >= rect.x2 &&
        containerRect.y1 <= rect.y1 &&
        containerRect.y2 >= rect.y2) {
        return true;
    }
    return false;
};
const doRectsOverlap = (rectA, rectB) => {
    if (rectA.x1 >= rectB.x2 ||
        rectB.x1 >= rectA.x2 ||
        rectA.y1 >= rectB.y2 ||
        rectB.y1 >= rectA.y2) {
        return false;
    }
    return true;
};

// CONCATENATED MODULE: ./src/utils/utils.ts
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

const getPos = (rdArr, rect, size) => {
    let INCREASE = Number.MAX_SAFE_INTEGER;
    let index = 0;
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
const isDuplicate = (rdArr, size, rd) => {
    for (let i = 0; i < size; i++) {
        if (areRectsIdentical(rdArr[i].rect, rd.rect)) {
            return true;
        }
    }
    return false;
};
const getPosToRemove = (rdArr, size, rect) => {
    for (let i = 0; i < size; i++) {
        if (areRectsIdentical(rdArr[i].rect, rect)) {
            return i;
        }
    }
    return -1;
};
const removeRect = (node = {
    size: 0,
    keys: [],
    pointers: [],
}, idx) => {
    for (let i = idx; i < node.size - 1; i++) {
        node.keys[i] = node.keys[i + 1];
        node.pointers[i] = node.pointers[i + 1];
    }
    node.size--;
};
const tryBorrow = (node = {
    size: 0,
    keys: [],
    pointers: [],
}, ptr, m) => {
    var _a, _b, _c;
    let MAX_AREA = 0;
    let maxAreaIndex = -1;
    let area;
    for (let i = 0; i < node.size; i++) {
        if (i !== ptr && (((_a = node.pointers[i]) === null || _a === void 0 ? void 0 : _a.size) || -1) > m) {
            area = getArea(node.keys[i].rect);
            if (area > MAX_AREA) {
                MAX_AREA = area;
                maxAreaIndex = i;
            }
        }
    }
    let idx = -1;
    if (maxAreaIndex >= 0) {
        let MIN_AREA = Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER;
        const ptrArea = getArea(node.keys[ptr].rect);
        let tempArea;
        for (let i = 0; i < (((_b = node.pointers[maxAreaIndex]) === null || _b === void 0 ? void 0 : _b.size) || -1); i++) {
            tempArea = getArea(getCombinedRect(((_c = node.pointers[maxAreaIndex]) === null || _c === void 0 ? void 0 : _c.keys[i].rect) || {
                x1: Number.MAX_SAFE_INTEGER,
                x2: Number.MAX_SAFE_INTEGER,
                y1: Number.MAX_SAFE_INTEGER,
                y2: Number.MAX_SAFE_INTEGER,
            }, node.keys[ptr].rect));
            if (Math.abs(tempArea - ptrArea) < MIN_AREA) {
                idx = i;
                MIN_AREA = tempArea;
            }
        }
    }
    if (idx >= 0) {
        return { ptr: maxAreaIndex, ptrPtr: idx };
    }
};
const performBorrow = (node = {
    size: 0,
    keys: [],
    pointers: [],
}, ptr, borrow) => {
    var _a;
    let bptr;
    let bptrPtr;
    let bRect;
    const lenderNode = node.pointers[borrow.ptr] || {
        size: 0,
        keys: [],
        pointers: [],
    };
    const lendRect = lenderNode.keys[borrow.ptrPtr].rect;
    const lendNode = lenderNode.pointers[borrow.ptrPtr];
    for (let i = borrow.ptrPtr; i < lenderNode.size - 1; i++) {
        lenderNode.keys[i] = lenderNode.keys[i + 1];
        lenderNode.pointers[i] = lenderNode.pointers[i + 1];
    }
    lenderNode.size--;
    node.keys[borrow.ptr].rect = getCombinedRectFromRects(lenderNode.keys, lenderNode.size);
    const borrowerSize = ((_a = node.pointers[ptr]) === null || _a === void 0 ? void 0 : _a.size) || 0;
    const borrowerNode = node.pointers[ptr] || {
        size: 0,
        keys: [],
        pointers: [],
    };
    borrowerNode.keys[borrowerSize] = { rect: lendRect };
    borrowerNode.pointers[borrowerSize] = lendNode;
    borrowerNode.size++;
    node.keys[ptr].rect = getCombinedRectFromRects(borrowerNode.keys, borrowerNode.size);
};
const merge = (node = {
    size: 0,
    keys: [],
    pointers: [],
}, ptr, m) => {
    let mergeIndex = -1;
    let MIN_AREA = Number.MAX_SAFE_INTEGER;
    let RECT = { x1: -1, x2: -1, y1: -1, y2: -1 };
    for (let i = 0; i < node.size; i++) {
        if (i === ptr) {
            continue;
        }
        const r = getCombinedRect(node.keys[i].rect, node.keys[ptr].rect);
        const area = getArea(r);
        if (area < MIN_AREA) {
            MIN_AREA = area;
            RECT = r;
            mergeIndex = i;
        }
    }
    if (mergeIndex === -1) {
        node.size = 0;
        return;
    }
    node.keys[mergeIndex].rect = RECT;
    const source = node.pointers[ptr] || {
        size: 0,
        keys: [],
        pointers: [],
    };
    const dest = node.pointers[mergeIndex] || {
        size: 0,
        keys: [],
        pointers: [],
    };
    let iter = 0;
    while (iter < source.size) {
        dest.keys[dest.size] = source.keys[iter];
        dest.pointers[dest.size] = source.pointers[iter];
        iter++;
        dest.size++;
    }
    const pivot = ptr;
    for (let i = pivot; i < node.size - 1; i++) {
        node.keys[i] = node.keys[i + 1];
        node.pointers[i] = node.pointers[i + 1];
    }
    node.size--;
};

// CONCATENATED MODULE: ./src/utils/splitNode.ts
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

const swap = (rdArr, nodeArr, li, ri) => {
    const temp = rdArr[li];
    const tempPtr = nodeArr[li];
    rdArr[li] = rdArr[ri];
    nodeArr[li] = nodeArr[ri];
    rdArr[ri] = temp;
    nodeArr[ri] = tempPtr;
};
const adjustHighLow = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rectData, rectDataPtr, M) => {
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
const getRightNode = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rdArr, nodeArr, M, m) => {
    const pivot = m;
    top.size = pivot;
    const rRdArr = new Array(M + 1); // right RectData Array
    const rNodeArr = new Array(M + 1); // right Node Array
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
const splitNodeQuadratic = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rectData, rectDataPtr, M, m) => {
    const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};
    adjustHighLow(top, rectData, rectDataPtr, M);
    const lr = rdArr[0].rect;
    let MIN_AREA = Number.MAX_SAFE_INTEGER;
    let index;
    let count = 1;
    let tlr;
    let tla;
    while (count < M + 1) {
        MIN_AREA = Number.MAX_SAFE_INTEGER;
        index = count;
        for (let i = count; i <= M; i++) {
            tlr = getCombinedRect(lr, rdArr[i].rect);
            tla = getArea(tlr);
            if (tla < MIN_AREA) {
                index = i;
                MIN_AREA = tla;
            }
        }
        swap(rdArr, nodeArr, count, index);
        count++;
    }
    return getRightNode(top, rdArr, nodeArr, M, m);
};
const splitNodeLinear = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rectData, rectDataPtr, M, m) => {
    const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};
    adjustHighLow(top, rectData, rectDataPtr, M);
    let lr = rdArr[0].rect; // left Rect
    let rr = rdArr[M].rect; // right Rect
    let li = 1;
    let ri = M - 1;
    let swapLeft;
    let swapRight;
    let ilr; // ith left Rect
    let irr; // ith right Rect
    let leftArea = getArea(lr);
    let rightArea = getArea(rr);
    let lTempLeftRect;
    let lTempRightRect;
    let rTempLeftRect;
    let rTempRightRect;
    let lTempLeftArea;
    let lTempRightArea;
    let rTempLeftArea;
    let rTempRightArea;
    while (li <= ri) {
        ilr = rdArr[li].rect;
        irr = rdArr[ri].rect;
        lTempLeftRect = getCombinedRect(ilr, lr);
        lTempLeftArea = getArea(lTempLeftRect);
        lTempRightRect = getCombinedRect(ilr, rr);
        lTempRightArea = getArea(lTempRightRect);
        swapLeft = lTempLeftArea - leftArea > lTempRightArea - rightArea;
        rTempLeftRect = getCombinedRect(irr, lr);
        rTempLeftArea = getArea(rTempLeftRect);
        rTempRightRect = getCombinedRect(irr, rr);
        rTempRightArea = getArea(rTempRightRect);
        swapRight = rTempRightArea - rightArea > rTempLeftArea - leftArea;
        if (swapLeft && swapRight) {
            swap(rdArr, nodeArr, li, ri);
            lr = rTempLeftRect;
            leftArea = rTempLeftArea;
            rr = lTempRightRect;
            rightArea = lTempRightArea;
            li++;
            ri--;
        }
        else if (!swapLeft && !swapRight) {
            lr = lTempLeftRect;
            leftArea = lTempLeftArea;
            rr = rTempRightRect;
            rightArea = rTempRightArea;
            li++;
            ri--;
        }
        else if (!swapLeft) {
            if (lTempLeftArea > rTempLeftArea) {
                swap(rdArr, nodeArr, li, ri);
                lr = rTempLeftRect;
                leftArea = rTempLeftArea;
            }
            else {
                lr = lTempLeftRect;
                leftArea = lTempLeftArea;
            }
            li++;
        }
        else {
            if (rTempRightArea > lTempRightArea) {
                swap(rdArr, nodeArr, li, ri);
                rr = lTempRightRect;
                rightArea = lTempRightArea;
            }
            else {
                rr = rTempRightRect;
                rightArea = rTempRightArea;
            }
            ri--;
        }
        li++;
        ri--;
    }
    return getRightNode(top, rdArr, nodeArr, M, m);
};

// CONCATENATED MODULE: ./src/utils/printUtils.ts
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


const getPrintTreeData = (root, length, height) => {
    if (!root) {
        return [];
    }
    const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
    const result = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
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
            }
            else {
                st.pop();
                HEIGHT--;
            }
        }
        else {
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
const printTree = (root, length, height) => {
    var _a;
    const data = getPrintTreeData(root, length, height);
    console.log("data", data);
    const coloursMapLen = coloursMap.length;
    const colours = {};
    const len = data.length;
    for (let i = 0; i < len - 1; i++) {
        if (data[i].HEIGHT < coloursMapLen) {
            colours[data[i].HEIGHT] = coloursMap[data[i].HEIGHT];
        }
        else {
            colours[data[i].HEIGHT] = "black";
        }
    }
    colours[height] = "red";
    const WIDTH = 600;
    const w = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.node.rect.x2) - 0;
    const arr = data.map((item) => {
        const scaledX1 = (item.node.rect.x1 * WIDTH) / w + 4 * item.HEIGHT;
        const scaledX2 = (item.node.rect.x2 * WIDTH) / w - 4 * item.HEIGHT;
        const scaledY1 = (item.node.rect.y1 * WIDTH) / w + 4 * item.HEIGHT;
        const scaledY2 = (item.node.rect.y2 * WIDTH) / w - 4 * item.HEIGHT;
        return `<g transform="translate(${scaledX1}, ${scaledY1})">
			<rect width="${scaledX2 - scaledX1}" height="${scaledY2 - scaledY1}" stroke="${colours[item.HEIGHT]}" stroke-width="2" fill-opacity="0"/>
		</g>`;
    });
    const html = arr.reduce((acc, current) => {
        return acc + current;
    }, "");
    const legend = Object.keys(colours).map((key, index) => {
        return `<g transform="translate(${index * 70 + 10}, 10)"><circle r="5" fill="${colours[key]}"/><text dx="10" dy="5">height: ${index}</text></g>`;
    });
    data.sort((a, b) => {
        return a.HEIGHT - b.HEIGHT;
    });
    const text = data.reduce((acc, item) => {
        return (acc +
            `<div style="display:flex;"><span style="flex: 1;">height: ${item.HEIGHT},</span><span style="flex: 1;">rect: x1: ${item.node.rect.x1},</span><span style="flex: 1;">x2: ${item.node.rect.x2},</span><span style="flex: 1;">y1: ${item.node.rect.y1},</span><span style="flex: 1;">y2: ${item.node.rect.y2}</span></div>`);
    }, "");
    return `<svg width="${WIDTH + 20}" height="${WIDTH + 20 + 50}"><g width="${WIDTH}" height="${WIDTH}" transform="translate(0, 0)">${legend}</g>
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

// CONCATENATED MODULE: ./src/rTreeIterative.ts
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






/*
    Properties of B-Tree:
    * Balanced m way tree
    * Maintains sorted data
    * All leaf nodes must be at the same level
    * B-tree order m has the following properties
    * Every node has max M children
    * Min children: leaf: 0, root: 2, Internal nodes: Math.ceil(M/2)
    * Every node has max M-1 keys
    * Min keys: root node: 1, all other nodes: Math.ceil(M/2)-1

    Properties of R-Tree:
    *	The root node contains at least two children unless it is a leaf node i.e. tree has only 1 rectangle
    *
    *	Max keys in a non-leaf node: M
    *	Max children in a non-leaf node: M
    *	Min Keys in a non-leaf node: m = Math.ceil(M/2) - 1
    *	Min children in a non-leaf node: m = Math.ceil(M/2) - 1
    *
    *	Max Keys in a leaf node: M
    *	Min Keys in a leaf node: m = Math.ceil(M/2) - 1
    *
    *	All leaves appear at the same level
 */
/**
        node = {
            size: <number>,
            pointers: <Array[ node ]>
            keys: <Array[rd]>
        }
    
        rd = {
            rect: <object>,
            data: <object>
        }

        rect = {
            x1: <number>,
            x2: <number>,
            y1: <number>,
            y2: <number>
        }
    */
/*
    
 */
class rTreeIterative_RTreeIterative {
    constructor(options) {
        var _a, _b, _c;
        this.options = options;
        this.M = options.M || 4;
        if (this.M % 2 === 0) {
            this.m = this.M / 2;
        }
        else {
            this.m = Math.ceil(this.M / 2);
        }
        if (this.M < 2) {
            throw "Value of M cannot be less than 2";
        }
        // m >= 1 check is still retained instead of m >= 2 cuz
        // code to handle this exists in "remove" function and I dont want to change this because of OCD
        // Also I'm not removing support for M = 2 because  of OCD
        if ((options === null || options === void 0 ? void 0 : options.m) &&
            Number.isInteger(options.m) &&
            options.m <= Math.ceil(this.M / 2) &&
            options.m >= 1) {
            this.m = options.m;
        }
        else if (options === null || options === void 0 ? void 0 : options.m) {
            throw "Can't hard set value of m for M, invalid value of m provided";
        }
        this.splitNode = splitNodeQuadratic;
        if ((options === null || options === void 0 ? void 0 : options.splitNode) === "linear") {
            this.splitNode = splitNodeLinear;
        }
        this.root = undefined;
        this.length = 0;
        this.height = 0;
        this.initialStackSize =
            ((_a = options === null || options === void 0 ? void 0 : options.data) === null || _a === void 0 ? void 0 : _a.length) * 2 || (options === null || options === void 0 ? void 0 : options.initialStackSize) || 500;
        this.initialQueueSize =
            ((_b = options === null || options === void 0 ? void 0 : options.data) === null || _b === void 0 ? void 0 : _b.length) * 2 || (options === null || options === void 0 ? void 0 : options.initialQueueSize) || 500;
        this.queue = new external_commonjs_Queue_commonjs2_Queue_amd_Queue_root_Queue_["ArrayQueue"]({ initialSize: this.initialQueueSize });
        this.stack = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]({ initialSize: this.initialStackSize });
        if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
            this.constructTree(options.data);
        }
        (_c = this.options) === null || _c === void 0 ? true : delete _c.data;
    }
    getRoot() {
        return this.root;
    }
    constructNode(rd, rdArr, ptrArr, size) {
        const node = {
            size: 0,
            pointers: new Array(this.M + 1),
            keys: new Array(this.M + 1),
        };
        if (rd) {
            node.keys[0] = rd;
            node.pointers[0] = undefined;
            node.size = 1;
        }
        else if (rdArr && ptrArr) {
            node.keys = rdArr;
            node.pointers = ptrArr;
            node.size = size || 0;
        }
        return node;
    }
    constructTree(data) {
        const length = data.length;
        for (let i = 0; i < length; i++) {
            this.insert(data[i]);
        }
    }
    /*
     *	@typedef {Object} rd Object
     *	@property {Object} rect Object defining a rectangle
     *	@property {Object} data Any object passed as data description for the rectangle
     *
     * @param {rd} rd  with rectangle and data
     */
    insert(rd) {
        return this._insert(rd);
    }
    _insert(rd) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let inserted = false;
        let splittedNodes;
        const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        if (this.root === undefined) {
            // insert root
            this.root = this.constructNode(rd);
            this.length++;
            this.height++;
            return this.root;
        }
        st.push({ node: this.root, pos: -1 });
        while (!st.isEmpty()) {
            const topItem = st.peek();
            const top = topItem.node;
            if (!inserted) {
                if (top === null || top === void 0 ? void 0 : top.pointers[0]) {
                    // traverse through the internal node whose area increases the least
                    const POS = getPos(top.keys, rd.rect, top.size);
                    topItem.pos = POS;
                    st.push({ node: top.pointers[POS], pos: POS });
                    continue;
                }
                // reached leaf node, now insert
                if (isDuplicate(top.keys, top.size, rd)) {
                    return;
                }
                this.length++;
                if (top.size < this.M) {
                    // no node splitting required
                    top.keys[top.size] = rd;
                    top.size++;
                    inserted = true;
                    st.pop();
                    continue;
                }
                // node splitting required
                const spRectData = this.splitNode(top, rd, undefined, this.M, this.m);
                splittedNodes = {
                    left: top,
                    right: this.constructNode(undefined, spRectData.rightRd, spRectData.rptrs, spRectData.rightSize),
                };
                inserted = true;
                st.pop();
            }
            else if (splittedNodes) {
                const crectL = getCombinedRectFromRects(((_a = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _a === void 0 ? void 0 : _a.keys) || [], ((_b = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _b === void 0 ? void 0 : _b.size) || 0);
                top.keys[topItem.pos] = { rect: crectL };
                top.pointers[topItem.pos] = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left;
                const crectR = getCombinedRectFromRects(((_c = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _c === void 0 ? void 0 : _c.keys) || [], ((_d = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _d === void 0 ? void 0 : _d.size) || 0);
                if (top.size < this.M) {
                    top.keys[top.size] = { rect: crectR };
                    top.pointers[top.size] = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right;
                    top.size++;
                    splittedNodes = undefined;
                }
                else {
                    const spRectData = this.splitNode(top, { rect: crectR }, splittedNodes.right, this.M, this.m);
                    splittedNodes = {
                        left: top,
                        right: this.constructNode(undefined, spRectData.rightRd, spRectData.rptrs, spRectData.rightSize),
                    };
                    // inserted = true;
                }
                st.pop();
            }
            else {
                // condense
                top.keys[topItem.pos] = {
                    rect: getCombinedRectFromRects(top.pointers[topItem.pos].keys, top.pointers[topItem.pos].size),
                };
                st.pop();
            }
        }
        if (splittedNodes) {
            // split the root
            const crectLeft = getCombinedRectFromRects(((_e = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _e === void 0 ? void 0 : _e.keys) || [], ((_f = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _f === void 0 ? void 0 : _f.size) || 0);
            const crectRight = getCombinedRectFromRects(((_g = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _g === void 0 ? void 0 : _g.keys) || [], ((_h = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _h === void 0 ? void 0 : _h.size) || 0);
            const node = this.constructNode();
            if (node) {
                node.size = 2;
                node.keys = [{ rect: crectLeft }, { rect: crectRight }];
                node.pointers = [splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left, splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right];
                this.root = node;
            }
            this.height++;
        }
    }
    remove(rect) {
        return this._remove(rect);
    }
    _remove(rect) {
        let deleted = false;
        const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        if (!this.root) {
            return;
        }
        st.push({ node: this.root, ptr: -1 });
        while (!st.isEmpty()) {
            const topItem = st.peek();
            const { node: top } = topItem;
            if (!deleted) {
                if (top.pointers[0]) {
                    // traverse through internal nodes
                    const start = topItem.ptr + 1;
                    for (let i = start; i < top.size; i++) {
                        if (isRectInside(top.keys[i].rect, rect)) {
                            topItem.ptr = i;
                            st.push({ node: top.pointers[i], ptr: -1 });
                            break;
                        }
                    }
                    if (topItem.ptr === start - 1) {
                        st.pop();
                    }
                }
                else {
                    // reached leaf node
                    const idx = getPosToRemove(top.keys, top.size, rect);
                    if (idx >= 0) {
                        removeRect(top, idx);
                        deleted = true;
                        this.length--;
                        if (top === this.root && top.size === 0) {
                            this.root = undefined;
                            this.height = 0;
                            this.length = 0;
                        }
                    }
                    st.pop();
                }
                // else keep looking
            }
            else if (top.pointers[topItem.ptr].size < this.m) {
                // borrow or merge
                top.keys[topItem.ptr] = {
                    rect: getCombinedRectFromRects(top.pointers[topItem.ptr].keys, top.pointers[topItem.ptr].size),
                };
                const borrow = tryBorrow(top, topItem.ptr, this.m);
                if (borrow) {
                    performBorrow(top, topItem.ptr, borrow);
                }
                else {
                    merge(top, topItem.ptr, this.m);
                    if (top === this.root && top.size < 2) {
                        const currRoot = this.root;
                        this.root = currRoot.pointers[0];
                        currRoot.keys = [];
                        for (let i = 0; i < this.M + 1; i++) {
                            currRoot.pointers[i] = undefined;
                        }
                        this.height--;
                        if (this.root.size === 0) {
                            // I think this is a special condition when M is 3 and m is 1
                            this.root = undefined;
                            this.height = 0;
                            this.length = 0;
                        }
                    }
                }
                st.pop();
            }
            else {
                // condense upper rects
                const crect = getCombinedRectFromRects(top.pointers[topItem.ptr].keys, top.pointers[topItem.ptr].size);
                top.keys[topItem.ptr] = { rect: crect };
                st.pop();
            }
        }
    }
    /**
     * find rects that are exact or overlap
     * - passing only one parameter searches for only one overlapping rectangle
     * - passing rect and exact as parameter searches for an exact rectangle
     * - passing all as true searches for all the overlapping rectangle
     *
     * @param  {Rect}       rect reference rect to search in the tree for exact or overlap match
     * @param  {boolean =    true}        exact search for identical rectangle, when exact is true all is always false
     * @param  {boolean =    true}        all   search for all overlapping rectangle, when all is true exact is always false, when all is false we search for only one overlapping rectangle
     * @param  {()      =>   any}         comp  comperator function taken into account when exact is false
     * @return {any}             array of matching rectangles
     */
    find(rect, exact = false, all = false, comp) {
        return this._find(rect, exact, all, comp);
    }
    _find(rect, exact = false, all = false, comp) {
        const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        const result = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        if (!this.root && all) {
            return [];
        }
        else if (!this.root) {
            return;
        }
        st.push({ node: this.root, ptr: -1 });
        while (!st.isEmpty()) {
            const topItem = st.peek();
            const { node: top } = topItem;
            if (top.pointers[0]) {
                // traverse through internal nodes
                const start = topItem.ptr + 1;
                for (let i = start; i < top.size; i++) {
                    if (exact && !all
                        ? isRectInside(top.keys[i].rect, rect)
                        : doRectsOverlap(top.keys[i].rect, rect)) {
                        topItem.ptr = i;
                        st.push({ node: top.pointers[i], ptr: -1 });
                        break;
                    }
                }
                if (topItem.ptr === start - 1) {
                    st.pop();
                }
            }
            else {
                // reached leaf node
                for (let i = 0; i < top.size; i++) {
                    if (exact && !all) {
                        // find exact rectangle
                        if (areRectsIdentical(top.keys[i].rect, rect)) {
                            return top.keys[i];
                        }
                    }
                    else if (!all) {
                        // find overlapping rectangle
                        if (doRectsOverlap(top.keys[i].rect, rect) &&
                            (comp ? comp(top.keys[i], rect) : true)) {
                            return top.keys[i];
                        }
                    }
                    else {
                        // all
                        if (doRectsOverlap(top.keys[i].rect, rect) &&
                            (comp ? comp(top.keys[i], rect) : true)) {
                            result.push(top.keys[i]);
                        }
                    }
                }
                st.pop();
            }
            // else keep looking
        }
        return result.getData();
    }
    getData() {
        if (!this.root) {
            return [];
        }
        const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        const result = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        st.push({ node: this.root, ptr: -1 });
        while (!st.isEmpty()) {
            const topItem = st.peek();
            const { node: top } = topItem;
            if (top.pointers[0]) {
                // traverse through internal nodes
                if (topItem.ptr + 1 < top.size) {
                    st.push({ node: top.pointers[++topItem.ptr], ptr: -1 });
                }
                else {
                    st.pop();
                }
            }
            else {
                // reached leaf node
                for (let i = 0; i < top.size; i++) {
                    result.push(top.keys[i]);
                }
                st.pop();
            }
        }
        return result.getData();
    }
    reset() {
        this.root = undefined;
        this.length = 0;
    }
    emptyTree() {
        this.root = undefined;
        this.length = 0;
    }
    printTree() {
        return printTree(this.root, this.length, this.height);
    }
}
/* harmony default export */ var rTreeIterative = (rTreeIterative_RTreeIterative);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index.ts
/** @license RTreeJS

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



/* harmony default export */ var src_0 = __webpack_exports__["default"] = (rTreeIterative);


/***/ })
/******/ ]);
});