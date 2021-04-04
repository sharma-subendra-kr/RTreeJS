window.onload = function () {
	console.log("onload");

	var rawData = [
		{ x1: 2, x2: 5, y1: 1, y2: 3 },
		{ x1: 5, x2: 8, y1: 1, y2: 3 },
		{ x1: 8, x2: 11, y1: 1, y2: 3 },
		{ x1: 11, x2: 15, y1: 1, y2: 3 },
		{ x1: 15, x2: 18, y1: 1, y2: 3 },
		// { x1: 18, x2: 21, y1: 1, y2: 3 },
		//
		// { x1: 21, x2: 24, y1: 1, y2: 3 },
		// { x1: 24, x2: 27, y1: 1, y2: 3 },
		// { x1: 27, x2: 30, y1: 1, y2: 3 },
		// { x1: 30, x2: 33, y1: 1, y2: 3 },
		// { x1: 33, x2: 36, y1: 1, y2: 3 },
		//
		{ x1: 4, x2: 7, y1: 6, y2: 9 },
		{ x1: 5, x2: 9, y1: 8, y2: 12 },
		{ x1: 6, x2: 11, y1: 5, y2: 9 },
		{ x1: 9, x2: 13, y1: 10, y2: 15 },
		{ x1: 18, x2: 24, y1: 18, y2: 21 },
		{ x1: 16, x2: 21, y1: 14, y2: 19 },
		{ x1: 19, x2: 23, y1: 5, y2: 9 },
		{ x1: 21, x2: 25, y1: 3, y2: 6 }, //	1
		{ x1: 15, x2: 19, y1: 7, y2: 10 }, //	2
		{ x1: 18, x2: 20, y1: 9, y2: 12 },
		{ x1: 14, x2: 19, y1: 11, y2: 15 },
		{ x1: 16, x2: 19, y1: 14, y2: 17 },
		{ x1: 17, x2: 21, y1: 16, y2: 18 },
	];

	// var rawData = new Array(20).fill(0).map((o) => {
	// 	return {
	// 		// rect: {
	// 		// 	x1: Math.trunc(Math.random() * 10),
	// 		// 	x2: Math.trunc(Math.random() * 10),
	// 		// 	y1: Math.trunc(Math.random() * 10),
	// 		// 	y2: Math.trunc(Math.random() * 10),
	// 		// },
	// 		rect: {
	// 			x1: Math.random() * 10,
	// 			x2: Math.random() * 10,
	// 			y1: Math.random() * 10,
	// 			y2: Math.random() * 10,
	// 		},
	// 	};
	// });
	// console.log(rawData);
	// eslint-disable-next-line no-undef
	window.rt = new RTreeJS.RTreeIterative({
		M: 4,
		// m: 2,
		data: rawData,
		// splitNode: "linear",
		// initialStackSize: 15,
		// initialQueueSize: 15,
	});
	var $contentBody = document.getElementsByClassName("content-body")[0];
	$contentBody.innerHTML = window.rt.printTree();

	window.printHtmlTree = function () {
		$contentBody.innerHTML = it.printHtmlTree();
	};

	window.remove = function (obj, d) {
		window.rt.remove(obj, d);
		console.log(window.rt);
		window.printTree();
	};

	window.insert = function (obj, d) {
		window.rt.insert(obj, d);
		console.log(window.rt);
		window.printTree();
	};

	window.find = function (obj, exact, all, comp) {
		const res = window.rt.find(obj, exact, all, comp);
		console.log(res);
		console.log(window.rt);
	};

	window.getData = function () {
		const res = window.rt.getData();
		console.log(res);
		console.log(window.rt);
	};

	window.printTree = function () {
		const html = window.rt.printTree();
		$contentBody.innerHTML = html;
	};
};

// insert({rect: {x1: 2, x2:5, y1:1, y2:3}})
// insert({rect: {x1: 5, x2:8, y1:1, y2:3}})
// insert({rect: {x1: 8, x2:11, y1:1, y2:3}})
// insert({rect: {x1: 11, x2:15, y1:1, y2:3}})
// insert({rect: {x1: 15, x2:18, y1:1, y2:3}})
