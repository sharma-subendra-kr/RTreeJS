window.onload = function () {
	console.log("onload");

	var rawData = [
		{ x1: 2, y1: 5, x2: 2, y2: 4 },
		{ x1: 3, y1: 6, x2: 5, y2: 7 },
		{ x1: 6, y1: 9, x2: 1, y2: 3 },
	];

	window.rt = new RTreeJS.RTreesIterative({
		M: 3,
		// data: rawData,
		// initialStackSize: 15,
		// initialQueueSize: 15,
	});
	var $contentBody = document.getElementsByClassName("content-body")[0];
	// $contentBody.innerHTML = rt.printHtmlTree();

	window.printHtmlTree = function () {
		$contentBody.innerHTML = it.printHtmlTree();
	};

	window.remove = function (obj, d) {
		window.rt.remove(obj, d);
	};

	window.insert = function (obj, d) {
		window.rt.insert(obj, d);
		console.log(window.rt);
	};
};

// insert({rect: {x1: 2, x2:5, y1:1, y2:3}})
// insert({rect: {x1: 5, x2:8, y1:1, y2:3}})
// insert({rect: {x1: 8, x2:11, y1:1, y2:3}})
// insert({rect: {x1: 11, x2:15, y1:1, y2:3}})
// insert({rect: {x1: 15, x2:18, y1:1, y2:3}})
