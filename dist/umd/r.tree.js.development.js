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
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RTreeJS"] = factory();
	else
		root["RTreeJS"] = factory();
})(window, function() {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/



if (true) {
	module.exports = __webpack_require__(1);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="assets",r(r.s=0)}([function(t,e,r){"use strict";r.r(e),r.d(e,"ArrayStack",(function(){return i})),r.d(e,"ListStack",(function(){return s}));var n=function(t){var e;this.options=t,this.initialSize=(null==t?void 0:t.initialSize)||100,this.length=this.initialSize,this.stack=new Array(this.length),this.ptr=-1,Array.isArray(null==t?void 0:t.data)&&this.constructStack(t.data,t.constructReverse),null===(e=this.options)||void 0===e||delete e.data};n.prototype.constructStack=function(t,e){var r=t.length;if(e)for(var n=r-1;n>=0;n--)this.push(t[n]);else for(var i=0;i<r;i++)this.push(t[i])},n.prototype.push=function(t){return null!=t&&(this.ptr===this.length-1&&this.resize(),this.stack[++this.ptr]=t,this.ptr+1)},n.prototype.pop=function(){if(this.ptr>=0){var t=this.stack[this.ptr];return this.ptr--,t}},n.prototype.resize=function(){var t=this.length,e=this.stack;this.length=2*this.length,this.stack=new Array(this.length);for(var r=0;r<t;r++)this.stack[r]=e[r]},n.prototype.isEmpty=function(){return this.ptr<0},n.prototype.peek=function(){if(this.ptr>=0)return this.stack[this.ptr]},n.prototype.getData=function(){for(var t=new Array(this.ptr+1),e=0;e<=this.ptr;e++)t[e]=this.stack[e];return t},n.prototype.setData=function(t){var e;this.empty(),this.constructStack(t,null===(e=this.options)||void 0===e?void 0:e.constructReverse)},n.prototype.getSize=function(){return this.ptr+1},n.prototype.empty=function(){this.ptr=-1},n.prototype.wipe=function(){this.length=this.initialSize,this.stack=new Array(this.length),this.ptr=-1};var i=n;function o(t){this.length=0,this.HEAD=null,Array.isArray(null==t?void 0:t.data)&&this.constructStack(t.data,t.constructReverse)}o.prototype.constructNode=function(t){return{next:null,d:t}},o.prototype.constructStack=function(t,e){var r,n=t.length;if(e)for(r=n-1;r>=0;r--)this.push(t[r]);else for(r=0;r<n;r++)this.push(t[r])},o.prototype.push=function(t){var e=this.constructNode(t);return this.HEAD?(e.next=this.HEAD,this.HEAD=e):this.HEAD=e,++this.length},o.prototype.pop=function(){if(this.HEAD){var t=this.HEAD;return this.HEAD=this.HEAD.next,t.next=null,this.length--,t.d}},o.prototype.isEmpty=function(){return!this.HEAD},o.prototype.peek=function(){var t;return null===(t=this.HEAD)||void 0===t?void 0:t.d},o.prototype.getData=function(){for(var t=this.HEAD,e=new Array(this.length),r=0;null!=t;)e[r++]=t.d,t=t.next;return e},o.prototype.getSize=function(){return this.length},o.prototype.empty=function(){this.HEAD=null,this.length=0};var s=o;
/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/}])}));

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

// EXTERNAL MODULE: ./node_modules/@sharma-subendra-kr/stack/dist/index.js
var dist = __webpack_require__(0);

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
const getDiagonalLen = (rect) => {
    return ((rect.x2 - rect.x1) * (rect.x2 - rect.x1) +
        (rect.y2 - rect.y1) * (rect.y2 - rect.y1));
};
const getDiagonalLenDiff = (rectA, rectB) => {
    const aD = (rectA.x2 - rectA.x1) * (rectA.x2 - rectA.x1) +
        (rectA.y2 - rectA.y1) * (rectA.y2 - rectA.y1);
    const bD = (rectB.x2 - rectB.x1) * (rectB.x2 - rectB.x1) +
        (rectB.y2 - rectB.y1) * (rectB.y2 - rectB.y1);
    if (aD > bD) {
        return aD - bD;
    }
    else {
        return bD - aD;
    }
};
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
const getCombinedRectFromRects = (rectArr, size, start = 0) => {
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
const doRectsOverlapOrTouch = (rectA, rectB) => {
    if (rectA.x1 > rectB.x2 ||
        rectB.x1 > rectA.x2 ||
        rectA.y1 > rectB.y2 ||
        rectB.y1 > rectA.y2) {
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

const getPos = (rectArr, rect, size) => {
    let INCREASE = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 0; i < size; i++) {
        const r = rectArr[i];
        const diff = getDiagonalLenDiff(getCombinedRect(r, rect), r);
        if (diff < INCREASE) {
            INCREASE = diff;
            index = i;
        }
    }
    return index;
};
const isDuplicate = (rectArr, size, rect) => {
    for (let i = 0; i < size; i++) {
        if (areRectsIdentical(rectArr[i], rect)) {
            return true;
        }
    }
    return false;
};
const getPosToRemove = (rectArr, size, rect) => {
    for (let i = 0; i < size; i++) {
        if (areRectsIdentical(rectArr[i], rect)) {
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
    let MIN_LEN = Number.MAX_SAFE_INTEGER;
    let ptrIndex = -1;
    let keyIndex = -1;
    const ptrNodeRect = node.keys[ptr];
    for (let i = 0; i < node.size; i++) {
        if (i === ptr || node.pointers[i].size === m) {
            continue;
        }
        const ptrkeys = node.pointers[i].keys;
        const ptrSize = node.pointers[i].size;
        for (let j = 0; j < ptrSize; j++) {
            const rect = ptrkeys[j];
            const combinedDLen = getDiagonalLen(getCombinedRect(ptrNodeRect, rect));
            if (combinedDLen < MIN_LEN) {
                MIN_LEN = combinedDLen;
                ptrIndex = i;
                keyIndex = j;
            }
        }
    }
    if (ptrIndex !== -1) {
        return { ptr: ptrIndex, ptrPtr: keyIndex };
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
    const lendKey = lenderNode.keys[borrow.ptrPtr];
    const lendNode = lenderNode.pointers[borrow.ptrPtr];
    for (let i = borrow.ptrPtr; i < lenderNode.size - 1; i++) {
        lenderNode.keys[i] = lenderNode.keys[i + 1];
        lenderNode.pointers[i] = lenderNode.pointers[i + 1];
    }
    lenderNode.size--;
    node.keys[borrow.ptr] = getCombinedRectFromRects(lenderNode.keys, lenderNode.size);
    const borrowerSize = ((_a = node.pointers[ptr]) === null || _a === void 0 ? void 0 : _a.size) || 0;
    const borrowerNode = node.pointers[ptr] || {
        size: 0,
        keys: [],
        pointers: [],
    };
    borrowerNode.keys[borrowerSize] = lendKey;
    borrowerNode.pointers[borrowerSize] = lendNode;
    borrowerNode.size++;
    node.keys[ptr] = getCombinedRectFromRects(borrowerNode.keys, borrowerNode.size);
};
const merge = (node = {
    size: 0,
    keys: [],
    pointers: [],
}, ptr, m) => {
    let mergeIndex = -1;
    let MIN_LEN = Number.MAX_SAFE_INTEGER;
    let RECT = { x1: -1, x2: -1, y1: -1, y2: -1 };
    for (let i = 0; i < node.size; i++) {
        if (i === ptr) {
            continue;
        }
        const r = getCombinedRect(node.keys[i], node.keys[ptr]);
        const dLen = getDiagonalLen(r);
        if (dLen < MIN_LEN) {
            MIN_LEN = dLen;
            RECT = r;
            mergeIndex = i;
        }
    }
    if (mergeIndex === -1) {
        node.size = 0;
        return;
    }
    node.keys[mergeIndex] = RECT;
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

const swap = (rectArr, nodeArr, li, ri) => {
    const temp = rectArr[li];
    const tempPtr = nodeArr[li];
    rectArr[li] = rectArr[ri];
    nodeArr[li] = nodeArr[ri];
    rectArr[ri] = temp;
    nodeArr[ri] = tempPtr;
};
const adjustHighLow = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rect, rectPtr, M) => {
    const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};
    let lIndex = 0;
    let rIndex = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    rectArr[M] = rect;
    nodeArr[M] = rectPtr;
    for (const [i, rect] of rectArr.entries()) {
        if (rect.x2 < min) {
            min = rect.x2;
            lIndex = i;
        }
        if (rect.x1 > max) {
            max = rect.x1;
            rIndex = i;
        }
    }
    swap(rectArr, nodeArr, 0, lIndex);
    swap(rectArr, nodeArr, M, rIndex);
};
const adjustHighLowOnY = (rectArr, nodeArr, rect, rectPtr, M) => {
    let lIndex = 0;
    let rIndex = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    rectArr[M] = rect;
    nodeArr[M] = rectPtr;
    for (const [i, rect] of rectArr.entries()) {
        if (rect.y2 < min) {
            min = rect.y2;
            lIndex = i;
        }
        if (rect.y1 > max) {
            max = rect.y1;
            rIndex = i;
        }
    }
    swap(rectArr, nodeArr, 0, lIndex);
    swap(rectArr, nodeArr, M, rIndex);
    return {
        rectArrY: rectArr,
        nodeArrY: nodeArr,
    };
};
const getRightSlice = (rectArr, nodeArr, pivot, M) => {
    const rRectArr = new Array(M + 1); // right RectData Array
    const rNodeArr = new Array(M + 1); // right Node Array
    let iter = pivot;
    let count = 0;
    while (iter < M + 1) {
        rRectArr[count] = rectArr[iter];
        rNodeArr[count] = nodeArr[iter];
        count++;
        iter++;
    }
    return {
        rightRect: rRectArr,
        rptrs: rNodeArr,
        rightSize: count,
    };
};
const getRightNode = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rectArr, nodeArr, M, m) => {
    let pivot = m;
    if (M % 2 === 0) {
        let clRect = rectArr[0];
        let clDLen = getDiagonalLen(clRect);
        let crRect = rectArr[m + 1];
        let crDLen = getDiagonalLen(crRect);
        for (let i = 1; i < m; i++) {
            clRect = getCombinedRect(clRect, rectArr[i]);
            clDLen = getDiagonalLen(clRect);
        }
        for (let i = m + 2; i <= M; i++) {
            crRect = getCombinedRect(crRect, rectArr[i]);
            crDLen = getDiagonalLen(crRect);
        }
        const lIntegration = getDiagonalLen(getCombinedRect(clRect, rectArr[m]));
        const rIntegration = getDiagonalLen(getCombinedRect(crRect, rectArr[m]));
        if (lIntegration - clDLen < rIntegration - crDLen) {
            pivot++;
        }
    }
    top.size = pivot;
    // const rRdArr: RectData[] = new Array(M + 1); // right RectData Array
    // const rNodeArr: Node[] = new Array(M + 1); // right Node Array
    // let iter = pivot;
    // let count = 0;
    // while (iter < M + 1) {
    // 	rRdArr[count] = rdArr[iter];
    // 	rNodeArr[count] = nodeArr[iter];
    // 	count++;
    // 	iter++;
    // }
    // return {
    // 	rightRd: rRdArr,
    // 	rptrs: rNodeArr,
    // 	rightSize: count,
    // };
    return getRightSlice(rectArr, nodeArr, pivot, M);
};
const splitNodeQuadratic = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rect, rectPtr, M, m) => {
    const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};
    const copyRectArr = [...rectArr];
    const copyNodeArr = [...nodeArr];
    adjustHighLow(top, rect, rectPtr, M);
    const { rectArrY, nodeArrY } = adjustHighLowOnY(copyRectArr, copyNodeArr, rect, rectPtr, M);
    const lr = rectArr[0];
    let MIN_LEN = Number.MAX_SAFE_INTEGER;
    let index;
    const lrY = rectArrY[0];
    let MIN_LEN_Y = Number.MAX_SAFE_INTEGER;
    let indexY;
    let count = 1;
    let tlr;
    let tlDLen;
    while (count < M + 1) {
        MIN_LEN = Number.MAX_SAFE_INTEGER;
        MIN_LEN_Y = Number.MAX_SAFE_INTEGER;
        index = count;
        indexY = count;
        for (let i = count; i <= M; i++) {
            tlr = getCombinedRect(lr, rectArr[i]);
            tlDLen = getDiagonalLen(tlr);
            if (tlDLen < MIN_LEN) {
                index = i;
                MIN_LEN = tlDLen;
            }
            tlr = getCombinedRect(lrY, rectArrY[i]);
            tlDLen = getDiagonalLen(tlr);
            if (tlDLen < MIN_LEN_Y) {
                indexY = i;
                MIN_LEN_Y = tlDLen;
            }
        }
        swap(rectArr, nodeArr, count, index);
        swap(rectArrY, nodeArrY, count, indexY);
        count++;
    }
    let pivot = m;
    let pivotY = m;
    if (M % 2 === 0) {
        let clRect = rectArr[0];
        let clDLen = getDiagonalLen(clRect);
        let crRect = rectArr[m + 1];
        let crDLen = getDiagonalLen(crRect);
        let clRectY = rectArr[0];
        let clDLenY = getDiagonalLen(clRect);
        let crRectY = rectArr[m + 1];
        let crDLenY = getDiagonalLen(crRect);
        for (let i = 1; i < m; i++) {
            clRect = getCombinedRect(clRect, rectArr[i]);
            clDLen = getDiagonalLen(clRect);
            clRectY = getCombinedRect(clRectY, rectArrY[i]);
            clDLenY = getDiagonalLen(clRectY);
        }
        for (let i = m + 2; i <= M; i++) {
            crRect = getCombinedRect(crRect, rectArr[i]);
            crDLen = getDiagonalLen(crRect);
            crRectY = getCombinedRect(crRectY, rectArrY[i]);
            crDLenY = getDiagonalLen(crRectY);
        }
        const lIntegration = getDiagonalLen(getCombinedRect(clRect, rectArr[m]));
        const rIntegration = getDiagonalLen(getCombinedRect(crRect, rectArr[m]));
        const lIntegrationY = getDiagonalLen(getCombinedRect(clRectY, rectArrY[m]));
        const rIntegrationY = getDiagonalLen(getCombinedRect(crRectY, rectArrY[m]));
        if (lIntegration - clDLen < rIntegration - crDLen) {
            pivot++;
        }
        if (lIntegrationY - clDLenY < rIntegrationY - crDLenY) {
            pivotY++;
        }
    }
    const lcDLen = getDiagonalLen(getCombinedRectFromRects(rectArr, pivot - 1));
    const rcDLen = getDiagonalLen(getCombinedRectFromRects(rectArr, M + 1, pivot));
    const lcDLenY = getDiagonalLen(getCombinedRectFromRects(rectArrY, pivotY - 1));
    const rcDLenY = getDiagonalLen(getCombinedRectFromRects(rectArrY, M + 1, pivotY));
    if (lcDLen + rcDLen < lcDLenY + rcDLenY) {
        top.size = pivot;
        return getRightSlice(rectArr, nodeArr, pivot, M);
    }
    else {
        top.size = pivotY;
        top.keys = rectArrY;
        top.pointers = nodeArrY;
        return getRightSlice(rectArrY, nodeArrY, pivotY, M);
    }
    // return getRightNode(top, rdArr, nodeArr, M, m);
};
const splitNodeLinear = (top = {
    size: 0,
    keys: [],
    pointers: [],
}, rect, rectPtr, M, m) => {
    const { keys: rectArr = [], pointers: nodeArr = [] } = top || {};
    adjustHighLow(top, rect, rectPtr, M);
    let lr = rectArr[0]; // left Rect
    let rr = rectArr[M]; // right Rect
    let li = 1;
    let ri = M - 1;
    let swapLeft;
    let swapRight;
    let ilr; // ith left Rect
    let irr; // ith right Rect
    let leftDLen = getDiagonalLen(lr);
    let rightDLen = getDiagonalLen(rr);
    let lTempLeftRect;
    let lTempRightRect;
    let rTempLeftRect;
    let rTempRightRect;
    let lTempLeftDLen;
    let lTempRightDLen;
    let rTempLeftDLen;
    let rTempRightDLen;
    while (li <= ri) {
        ilr = rectArr[li];
        irr = rectArr[ri];
        lTempLeftRect = getCombinedRect(ilr, lr);
        lTempLeftDLen = getDiagonalLen(lTempLeftRect);
        lTempRightRect = getCombinedRect(ilr, rr);
        lTempRightDLen = getDiagonalLen(lTempRightRect);
        swapLeft = lTempLeftDLen - leftDLen > lTempRightDLen - rightDLen;
        rTempLeftRect = getCombinedRect(irr, lr);
        rTempLeftDLen = getDiagonalLen(rTempLeftRect);
        rTempRightRect = getCombinedRect(irr, rr);
        rTempRightDLen = getDiagonalLen(rTempRightRect);
        swapRight = rTempRightDLen - rightDLen > rTempLeftDLen - leftDLen;
        if (swapLeft && swapRight) {
            swap(rectArr, nodeArr, li, ri);
            lr = rTempLeftRect;
            leftDLen = rTempLeftDLen;
            rr = lTempRightRect;
            rightDLen = lTempRightDLen;
            li++;
            ri--;
        }
        else if (!swapLeft && !swapRight) {
            lr = lTempLeftRect;
            leftDLen = lTempLeftDLen;
            rr = rTempRightRect;
            rightDLen = rTempRightDLen;
            li++;
            ri--;
        }
        else if (!swapLeft) {
            if (lTempLeftDLen > rTempLeftDLen) {
                swap(rectArr, nodeArr, li, ri);
                lr = rTempLeftRect;
                leftDLen = rTempLeftDLen;
            }
            else {
                lr = lTempLeftRect;
                leftDLen = lTempLeftDLen;
            }
            li++;
        }
        else if (!swapRight) {
            if (rTempRightDLen > lTempRightDLen) {
                swap(rectArr, nodeArr, li, ri);
                rr = lTempRightRect;
                rightDLen = lTempRightDLen;
            }
            else {
                rr = rTempRightRect;
                rightDLen = rTempRightDLen;
            }
            ri--;
        }
        else {
            li++;
            ri--;
        }
    }
    return getRightNode(top, rectArr, nodeArr, M, m);
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
    const st = new dist["ArrayStack"]();
    const result = new dist["ArrayStack"]();
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
    const WIDTH = 1000;
    let w = 0;
    data.forEach((o) => {
        w = o.node.x2 > w ? o.node.x2 : w;
    });
    let h = 0;
    data.forEach((o) => {
        h = o.node.y2 > h ? o.node.y2 : h;
    });
    const arr = data.map((item) => {
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
			<rect width="${l}" height="${b}" stroke="${colours[item.HEIGHT]}" stroke-width="2" fill-opacity="0"/>
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
            `<div style="display:flex;"><span style="flex: 1;">height: ${item.HEIGHT},</span><span style="flex: 1;">rect: x1: ${item.node.x1},</span><span style="flex: 1;">x2: ${item.node.x2},</span><span style="flex: 1;">y1: ${item.node.y1},</span><span style="flex: 1;">y2: ${item.node.y2}</span></div>`);
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
            ((_a = options === null || options === void 0 ? void 0 : options.data) === null || _a === void 0 ? void 0 : _a.length) * 2 || (options === null || options === void 0 ? void 0 : options.initialStackSize) || 100;
        this.initialQueueSize =
            ((_b = options === null || options === void 0 ? void 0 : options.data) === null || _b === void 0 ? void 0 : _b.length) * 2 || (options === null || options === void 0 ? void 0 : options.initialQueueSize) || 100;
        this.insertStack = new dist["ArrayStack"]({ initialSize: this.initialStackSize });
        this.ptrStack = new dist["ArrayStack"]({ initialSize: this.initialStackSize });
        this.resultStack = new dist["ArrayStack"]({ initialSize: this.initialStackSize });
        if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
            this.constructTree(options.data);
        }
        (_c = this.options) === null || _c === void 0 ? true : delete _c.data;
    }
    getRoot() {
        return this.root;
    }
    constructNode(rect, rectArr, ptrArr, size) {
        const node = {
            size: 0,
            pointers: new Array(this.M + 1),
            keys: new Array(this.M + 1),
        };
        if (rect) {
            node.keys[0] = rect;
            node.pointers[0] = undefined;
            node.size = 1;
        }
        else if (rectArr && ptrArr) {
            node.keys = rectArr;
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
    insert(rect) {
        return this._insert(rect);
    }
    _insert(rect) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let inserted = false;
        let splittedNodes;
        this.insertStack.empty();
        if (this.root === undefined) {
            // insert root
            this.root = this.constructNode(rect);
            this.length++;
            this.height++;
            return this.root;
        }
        this.insertStack.push({ node: this.root, pos: -1 });
        while (!this.insertStack.isEmpty()) {
            const topItem = this.insertStack.peek();
            const top = topItem.node;
            if (!inserted) {
                if (top === null || top === void 0 ? void 0 : top.pointers[0]) {
                    // traverse through the internal node whose length increases the least
                    const POS = getPos(top.keys, rect, top.size);
                    topItem.pos = POS;
                    this.insertStack.push({ node: top.pointers[POS], pos: POS });
                    continue;
                }
                // reached leaf node, now insert
                if (isDuplicate(top.keys, top.size, rect)) {
                    return;
                }
                this.length++;
                if (top.size < this.M) {
                    // no node splitting required
                    top.keys[top.size] = rect;
                    top.size++;
                    inserted = true;
                    this.insertStack.pop();
                    continue;
                }
                // node splitting required
                const spRectData = this.splitNode(top, rect, undefined, this.M, this.m);
                splittedNodes = {
                    left: top,
                    right: this.constructNode(undefined, spRectData.rightRect, spRectData.rptrs, spRectData.rightSize),
                };
                inserted = true;
                this.insertStack.pop();
            }
            else if (splittedNodes) {
                const crectL = getCombinedRectFromRects(((_a = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _a === void 0 ? void 0 : _a.keys) || [], ((_b = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _b === void 0 ? void 0 : _b.size) || 0);
                top.keys[topItem.pos] = crectL;
                top.pointers[topItem.pos] = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left;
                const crectR = getCombinedRectFromRects(((_c = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _c === void 0 ? void 0 : _c.keys) || [], ((_d = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _d === void 0 ? void 0 : _d.size) || 0);
                if (top.size < this.M) {
                    top.keys[top.size] = crectR;
                    top.pointers[top.size] = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right;
                    top.size++;
                    splittedNodes = undefined;
                }
                else {
                    const spRectData = this.splitNode(top, crectR, splittedNodes.right, this.M, this.m);
                    splittedNodes = {
                        left: top,
                        right: this.constructNode(undefined, spRectData.rightRect, spRectData.rptrs, spRectData.rightSize),
                    };
                    // inserted = true;
                }
                this.insertStack.pop();
            }
            else {
                // condense
                top.keys[topItem.pos] = getCombinedRectFromRects(top.pointers[topItem.pos].keys, top.pointers[topItem.pos].size);
                this.insertStack.pop();
            }
        }
        if (splittedNodes) {
            // split the root
            const crectLeft = getCombinedRectFromRects(((_e = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _e === void 0 ? void 0 : _e.keys) || [], ((_f = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.left) === null || _f === void 0 ? void 0 : _f.size) || 0);
            const crectRight = getCombinedRectFromRects(((_g = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _g === void 0 ? void 0 : _g.keys) || [], ((_h = splittedNodes === null || splittedNodes === void 0 ? void 0 : splittedNodes.right) === null || _h === void 0 ? void 0 : _h.size) || 0);
            const node = this.constructNode();
            if (node) {
                node.size = 2;
                node.keys = [crectLeft, crectRight];
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
        this.ptrStack.empty();
        if (!this.root) {
            return;
        }
        this.ptrStack.push({ node: this.root, ptr: -1 });
        while (!this.ptrStack.isEmpty()) {
            const topItem = this.ptrStack.peek();
            const { node: top } = topItem;
            if (!deleted) {
                if (top.pointers[0]) {
                    // traverse through internal nodes
                    const start = topItem.ptr + 1;
                    for (let i = start; i < top.size; i++) {
                        if (isRectInside(top.keys[i], rect)) {
                            topItem.ptr = i;
                            this.ptrStack.push({ node: top.pointers[i], ptr: -1 });
                            break;
                        }
                    }
                    if (topItem.ptr === start - 1) {
                        this.ptrStack.pop();
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
                    this.ptrStack.pop();
                }
                // else keep looking
            }
            else if (top.pointers[topItem.ptr].size < this.m) {
                // borrow or merge
                top.keys[topItem.ptr] = getCombinedRectFromRects(top.pointers[topItem.ptr].keys, top.pointers[topItem.ptr].size);
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
                this.ptrStack.pop();
            }
            else {
                // condense upper rects
                const crect = getCombinedRectFromRects(top.pointers[topItem.ptr].keys, top.pointers[topItem.ptr].size);
                top.keys[topItem.ptr] = crect;
                this.ptrStack.pop();
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
    find(rect, exact = false, all = false, comp, allowTouching = true) {
        let doesOverlap = doRectsOverlap;
        if (allowTouching) {
            doesOverlap = doRectsOverlapOrTouch;
        }
        return this._find(rect, exact, all, comp, doesOverlap);
    }
    _find(rect, exact = false, all = false, comp, doesOverlap) {
        this.ptrStack.empty();
        this.resultStack.empty();
        if (!this.root && all) {
            return [];
        }
        else if (!this.root) {
            return;
        }
        this.ptrStack.push({ node: this.root, ptr: -1 });
        while (!this.ptrStack.isEmpty()) {
            const topItem = this.ptrStack.peek();
            const { node: top } = topItem;
            if (top.pointers[0]) {
                // traverse through internal nodes
                const start = topItem.ptr + 1;
                for (let i = start; i < top.size; i++) {
                    if (exact && !all
                        ? isRectInside(top.keys[i], rect)
                        : doesOverlap(top.keys[i], rect)) {
                        topItem.ptr = i;
                        this.ptrStack.push({ node: top.pointers[i], ptr: -1 });
                        break;
                    }
                }
                if (topItem.ptr === start - 1) {
                    this.ptrStack.pop();
                }
            }
            else {
                // reached leaf node
                for (let i = 0; i < top.size; i++) {
                    if (exact && !all) {
                        // find exact rectangle
                        if (areRectsIdentical(top.keys[i], rect)) {
                            return top.keys[i];
                        }
                    }
                    else if (!all) {
                        // find overlapping rectangle
                        if (doesOverlap(top.keys[i], rect) &&
                            (comp ? comp(top.keys[i], rect) : true)) {
                            return top.keys[i];
                        }
                    }
                    else {
                        // all
                        if (doesOverlap(top.keys[i], rect) &&
                            (comp ? comp(top.keys[i], rect) : true)) {
                            this.resultStack.push(top.keys[i]);
                        }
                    }
                }
                this.ptrStack.pop();
            }
            // else keep looking
        }
        if (all) {
            return this.resultStack.getData();
        }
    }
    getData(allNodes = false) {
        if (!this.root) {
            return [];
        }
        this.ptrStack.empty();
        this.resultStack.empty();
        this.ptrStack.push({ node: this.root, ptr: -1 });
        while (!this.ptrStack.isEmpty()) {
            const topItem = this.ptrStack.peek();
            const { node: top } = topItem;
            if (top.pointers[0]) {
                // traverse through internal nodes
                if (topItem.ptr + 1 < top.size) {
                    this.ptrStack.push({ node: top.pointers[++topItem.ptr], ptr: -1 });
                    if (allNodes) {
                        this.resultStack.push(top.keys[topItem.ptr]);
                    }
                }
                else {
                    this.ptrStack.pop();
                }
            }
            else {
                // reached leaf node
                for (let i = 0; i < top.size; i++) {
                    this.resultStack.push(top.keys[i]);
                }
                this.ptrStack.pop();
            }
        }
        return this.resultStack.getData();
    }
    reset() {
        this.root = undefined;
        this.length = 0;
        this.height = 0;
    }
    emptyTree() {
        this.root = undefined;
        this.length = 0;
        this.height = 0;
        const len = Math.max(this.insertStack.stack.length, this.ptrStack.length, this.resultStack.length);
        for (let i = 0; i < len; i++) {
            if (this.insertStack.stack[i]) {
                this.insertStack.stack[i].node = undefined;
            }
            if (this.ptrStack.stack[i]) {
                this.ptrStack.stack[i].node = undefined;
            }
            if (this.resultStack.stack[i]) {
                this.resultStack.stack[i] = undefined;
            }
        }
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