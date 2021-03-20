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
__webpack_require__.d(__webpack_exports__, "RTreesIterative", function() { return /* reexport */ rTreesIterative; });

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
const splitNode = (top = { size: 0, keys: [], pointers: [], next: undefined }, rectData, rectDataPtr, M) => {
    // debugger;
    const { keys: rdArr = [], pointers: nodeArr = [] } = top || {};
    let lIndex = 0;
    let rIndex = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
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
    let temp = rdArr[0];
    let tempPtr = nodeArr[0];
    rdArr[0] = rdArr[lIndex];
    nodeArr[0] = nodeArr[lIndex];
    rdArr[lIndex] = temp;
    nodeArr[lIndex] = tempPtr;
    temp = rdArr[M - 1];
    tempPtr = nodeArr[M - 1];
    rdArr[M - 1] = rdArr[rIndex];
    nodeArr[M - 1] = nodeArr[rIndex];
    rdArr[rIndex] = temp;
    nodeArr[rIndex] = tempPtr;
    let lr = rdArr[0].rect; // left Rect
    let rr = rdArr[M - 1].rect; // right Rect
    let li = 1;
    let ri = M - 2;
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
    while (li < ri) {
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
            const temp = rdArr[li];
            const tempPtr = nodeArr[li];
            rdArr[li] = rdArr[ri];
            nodeArr[li] = nodeArr[ri];
            rdArr[ri] = temp;
            nodeArr[ri] = tempPtr;
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
            lr = lTempLeftRect;
            leftArea = lTempLeftArea;
            li++;
        }
        else {
            rr = rTempRightRect;
            rightArea = rTempRightArea;
            ri--;
        }
    }
    let pivot = li; // pivot is starting index for the new node
    top.size = pivot;
    if (li === ri) {
        lTempLeftRect = getCombinedRect(rdArr[li].rect, lr);
        lTempLeftArea = getArea(lTempLeftRect);
        lTempRightRect = getCombinedRect(rdArr[li].rect, rr);
        lTempRightArea = getArea(lTempRightRect);
        if (lTempLeftArea < lTempRightArea) {
            lr = lTempLeftRect;
            leftArea = lTempLeftArea;
            pivot++;
            top.size++;
        }
        else {
            rr = lTempRightRect;
            rightArea = lTempRightArea;
        }
    }
    // top.size = pivot + 1;
    const rRdArr = new Array(M); // right RectData Array
    const rNodeArr = new Array(M); // right Node Array
    let iter = pivot;
    let count = 0;
    while (iter < M) {
        rRdArr[count] = rdArr[iter];
        rNodeArr[count] = nodeArr[iter];
        count++;
        iter++;
    }
    const la = getArea(getCombinedRect(rectData.rect, lr)) - leftArea;
    const ra = getArea(getCombinedRect(rectData.rect, rr)) - rightArea;
    if (la < ra) {
        rdArr[top.size] = rectData;
        nodeArr[top.size] = rectDataPtr;
        top.size++;
    }
    else {
        rRdArr[count] = rectData;
        rNodeArr[count] = rectDataPtr;
        count++;
    }
    return {
        rightRd: rRdArr,
        rptrs: rNodeArr,
        rightSize: count,
    };
};
const getPosToRemove = (rdArr, size, rect) => {
    for (let i = 0; i < size; i++) {
        if (areRectsIdentical(rdArr[i].rect, rect)) {
            return i;
        }
    }
    return -1;
};
const removeRect = (node = { size: 0, keys: [], pointers: [], next: undefined }, idx) => {
    for (let i = idx; i < node.size - 1; i++) {
        node.keys[i] = node.keys[i + 1];
        node.pointers[i] = node.pointers[i + 1];
    }
    node.size--;
};
const tryBorrow = (node = { size: 0, keys: [], pointers: [], next: undefined }, ptr, m) => {
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
const performBorrow = (node = { size: 0, keys: [], pointers: [], next: undefined }, ptr, borrow) => {
    var _a;
    let bptr;
    let bptrPtr;
    let bRect;
    const lenderNode = node.pointers[borrow.ptr] || {
        size: 0,
        keys: [],
        pointers: [],
        next: undefined,
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
        next: undefined,
    };
    borrowerNode.keys[borrowerSize] = { rect: lendRect };
    borrowerNode.pointers[borrowerSize] = lendNode;
    borrowerNode.size++;
    node.keys[ptr].rect = getCombinedRectFromRects(borrowerNode.keys, borrowerNode.size);
};
const merge = (node = { size: 0, keys: [], pointers: [], next: undefined }, ptr, m) => {
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
    node.keys[mergeIndex].rect = RECT;
    const source = node.pointers[ptr] || {
        size: 0,
        keys: [],
        pointers: [],
        next: undefined,
    };
    const dest = node.pointers[mergeIndex] || {
        size: 0,
        keys: [],
        pointers: [],
        next: undefined,
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

// CONCATENATED MODULE: ./src/rTreesIterative.ts
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




// import {getCombinedRect, }
// import { printBinaryTree } from "./utils/printUtils";
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
    *	Max keys in a non-leaf node: M
    *	Max children in a non-leaf node: m = Math.ceil(M/2) - 1
    *	Min Keys in a non-leaf node: m = Math.ceil(M/2) - 1
    *	Min children in a non-leaf node: m = Math.ceil(M/2) - 1
    *	Max Keys in a leaf node: M
    *	Min Keys in a leaf node: m = Math.ceil(M/2) - 1
    *	All leaves appear at the same level
 */
/**
        node = {
            size: <number>,
            pointers: <Array[ node ]>
            keys: <Array[rd]>
            next: <node>
        }
    
        rd = {
            rect: <object>,
            data: <object>
        }

        rect = {
            tl: { x: <number>, y: <number> },
            tr: { x: <number>, y: <number> },
            br: { x: <number>, y: <number> },
            bl: { x: <number>, y: <number> }
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
class rTreesIterative_RTreeIterative {
    constructor(options) {
        var _a, _b, _c;
        this.options = options;
        this.M = options.M || 4;
        this.m = Math.ceil(this.M / 2) - 1;
        if (this.M < 3) {
            throw `Value of M cannot be less than 2`;
        }
        if ((options === null || options === void 0 ? void 0 : options.m) && this.M > 3) {
            this.m = options.m;
        }
        else if (options === null || options === void 0 ? void 0 : options.m) {
            throw "Can't hard set value of m for M equals 3";
        }
        this.root = undefined;
        this.length = 0;
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
            pointers: new Array(this.M),
            keys: new Array(this.M),
            next: undefined,
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
        // debugger;
        let inserted = false;
        let splittedNodes;
        const st = new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]();
        if (this.root === undefined) {
            // insert root
            this.root = this.constructNode(rd);
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
                if (top.size < this.M) {
                    // no node splitting required
                    top.keys[top.size] = rd;
                    top.size++;
                    inserted = true;
                    st.pop();
                    continue;
                }
                // node splitting required
                const spRectData = splitNode(top, rd, undefined, this.M);
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
                    const spRectData = splitNode(top, { rect: crectR }, splittedNodes.right, this.M);
                    splittedNodes = {
                        left: top,
                        right: this.constructNode(undefined, spRectData.rightRd, spRectData.rptrs, spRectData.rightSize),
                    };
                    inserted = true;
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
        }
    }
    remove(rect) {
        return this._remove(rect);
    }
    _remove(rect) {
        debugger;
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
}
// function RTreeIterative(options) {
// 	this.options = options;
// 	this.M = options.M || 4;
// 	this.m = Math.ceil(this.M / 2) - 1;
// 	if (this.M < 2) {
// 		throw `Value of M cannot be less than 2`;
// 	}
// 	this.root = null;
// 	this.length = 0;
// 	this.initialStackSize =
// 		options?.data?.length * 2 || options?.initialStackSize || 500;
// 	this.initialQueueSize =
// 		options?.data?.length * 2 || options?.initialQueueSize || 500;
// 	this.queue = new Queue({ initialSize: this.initialQueueSize });
// 	this.stack = new Stack({ initialSize: this.initialStackSize });
// 	if (Array.isArray(options?.data)) {
// 		this.constructTree(options.data);
// 	}
// 	delete this.options?.data;
// }
// RTreeIterative.prototype.getRoot = function () {
// 	return this.root;
// };
// RTreeIterative.prototype.constructNode = function (rect, data) {
// 	return {
// 		size: 0,
// 		pointers: new Array(this.M),
// 		keys: new Array(this.M),
// 		next: null,
// 		data: data,
// 	};
// };
// RTreeIterative.prototype.constructTree = function (data) {
// 	const length = data.length;
// 	for (let i = 0; i < length; i++) {
// 		this.insert(data[i]);
// 	}
// };
/*
 *	@typedef {Object} rd Object
 *	@property {Object} rect Object defining a rectangle
 *	@property {Object} data Any object passed as data description for the rectangle
 *
 * @param {rd} rd  with rectangle and data
 */
// RTreeIterative.prototype.insert = function (rd) {
// 	return this._insert(rd);
// };
// RTreeIterative.prototype._insert = function (rd) {
// 	const st = new Stack();
// 	if (this.root === null) {
// 		// insert root
// 	}
// 	st.push(this.root);
// 	while (!st.isEmpty()) {
// 		const top = st.peak();
// 		if (!top.keys[0]) {
// 			// reached leaf node, now insert
// 		} else {
// 			// traverse through the internal node whose area increases the least
// 			const POS = getPos(top.keys, rd.rect);
// 		}
// 	}
// };
// RTreeIterative.prototype.find = function (interval, d, findType, comp) {
// 	return this._find(this.root, interval, d, findType, comp);
// };
// RTreeIterative.prototype._find = function (root, interval, d, findType, comp) {
// 	return null;
// };
// RTreeIterative.prototype.findAll = function (
// 	interval,
// 	d,
// 	findType,
// 	comp,
// 	one = false
// ) {
// 	return this._findAll(this.root, interval, d, findType, comp, one);
// };
// RTreeIterative.prototype._findAll = function (
// 	root,
// 	interval,
// 	d,
// 	findType,
// 	comp,
// 	one
// ) {};
// RTreeIterative.prototype.remove = function (interval, d, comp) {
// 	return this._remove(this.root, interval, d, comp);
// };
// RTreeIterative.prototype._remove = function (root, interval, d, comp) {};
// RTreeIterative.prototype.getSortedData = function () {
// };
// RTreeIterative.prototype.setData = function (data) {
// 	this.emptyTree();
// 	this.constructTree(data);
// };
// RTreeIterative.prototype.reset = function () {
// 	this.root = null;
// 	this.length = 0;
// };
// RTreeIterative.prototype.emptyTree = function () {
// 	this.root = null;
// 	this.length = 0;
// 	const len = Math.max(
// 		this.queue.queue.length,
// 		this.stack.stack.length,
// 		this.path.stack.length,
// 		this.result.stack.length,
// 		this.removeList.stack.length
// 	);
// 	for (let i = 0; i < len; i++) {
// 		if (this.queue.queue[i]) {
// 			this.queue.queue[i].interval = null;
// 			this.queue.queue[i].d = null;
// 			this.queue.queue[i].left = null;
// 			this.queue.queue[i].right = null;
// 		}
// 		if (this.stack.stack[i]) {
// 			this.stack.stack[i].interval = null;
// 			this.stack.stack[i].d = null;
// 			this.stack.stack[i].left = null;
// 			this.stack.stack[i].right = null;
// 		}
// 	}
// };
// RTreeIterative.prototype.printHtmlTree = function (func) {
// 	return printBinaryTree(this.root, this.length, func);
// };
/* harmony default export */ var rTreesIterative = (rTreesIterative_RTreeIterative);

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


const a = 1;
const b = a;
console.log(a);

/* harmony default export */ var src_0 = __webpack_exports__["default"] = (rTreesIterative);


/***/ })
/******/ ]);
});