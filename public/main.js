window.onload = function () {
	console.log("onload");

	var rawData = [
		{ rect: { x1: 2, x2: 5, y1: 1, y2: 3 } },
		{ rect: { x1: 5, x2: 8, y1: 1, y2: 3 } },
		{ rect: { x1: 8, x2: 11, y1: 1, y2: 3 } },
		{ rect: { x1: 11, x2: 15, y1: 1, y2: 3 } },
		// { rect: { x1: 15, x2: 18, y1: 1, y2: 3 } },
		// { rect: { x1: 18, x2: 21, y1: 1, y2: 3 } },
		// { rect: { x1: 21, x2: 24, y1: 1, y2: 3 } },
		// { rect: { x1: 24, x2: 27, y1: 1, y2: 3 } },
		// { rect: { x1: 27, x2: 30, y1: 1, y2: 3 } },
		// { rect: { x1: 30, x2: 33, y1: 1, y2: 3 } },
		// { rect: { x1: 33, x2: 36, y1: 1, y2: 3 } },
	];

	// eslint-disable-next-line no-undef
	window.rt = new RTreeJS.RTreeIterative({
		M: 3,
		// m: 2,
		data: rawData,
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
