window.onload = function () {
	console.log("onload");

	var rawData = [
		{ x1: 2, y1: 5, x2: 2, y2: 4 },
		{ x1: 3, y1: 6, x2: 5, y2: 7 },
		{ x1: 6, y1: 9, x2: 1, y2: 3 },
	];

	window.rt = new RTreeJS.RTreesIterative({
		data: rawData,
		initialStackSize: 15,
		initialQueueSize: 15,
	});
	var $contentBody = document.getElementsByClassName("content-body")[0];
	// $contentBody.innerHTML = rt.printHtmlTree();

	window.printHtmlTree = function () {
		$contentBody.innerHTML = it.printHtmlTree();
	};

	window.remove = function (obj, d) {
		it.remove(obj, d);
		printHtmlTree();
	};

	window.removeAll = function (obj, d) {
		it.removeAll(obj, d);
		printHtmlTree();
	};
};
