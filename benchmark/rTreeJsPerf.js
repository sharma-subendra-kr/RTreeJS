import RTree from "./index.js";

const N = 1000000;
const maxFill = 16;

console.log(`number: ${N}`);
console.log(`maxFill: ${maxFill}`);

function randBox(size) {
	const x = Math.random() * (100 - size);
	const y = Math.random() * (100 - size);
	return {
		x1: x,
		y1: y,
		x2: x + size * Math.random(),
		y2: y + size * Math.random(),
	};
}

function genData(N, size) {
	const data = [];
	for (let i = 0; i < N; i++) {
		data.push(randBox(size));
	}
	return data;
}

const data = genData(N, 1);
const data2 = genData(N, 1);
const bboxes100 = genData(1000, 100 * Math.sqrt(0.1));
const bboxes10 = genData(1000, 10);
const bboxes1 = genData(1000, 1);

const tree = new RTree({
	M: maxFill,
	//splitNode: "linear",
});

console.time("insert one by one");
for (let i = 0; i < N; i++) {
	tree.insert(data[i]);
}
console.timeEnd("insert one by one");

console.time("1000 searches 10%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes100[i], true, true);
}
console.timeEnd("1000 searches 10%");

console.time("1000 searches 1%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes10[i], true, true);
}
console.timeEnd("1000 searches 1%");

console.time("1000 searches 0.01%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes1[i], true, true);
}
console.timeEnd("1000 searches 0.01%");

console.log("===========================");

console.time("1000 searches 10%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes100[i], true);
}
console.timeEnd("1000 searches 10%");

console.time("1000 searches 1%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes10[i], true);
}
console.timeEnd("1000 searches 1%");

console.time("1000 searches 0.01%");
for (let i = 0; i < 1000; i++) {
	tree.find(bboxes1[i], true);
}
console.timeEnd("1000 searches 0.01%");

console.log("===========================");

console.time("remove 1000 one by one");
for (let i = 0; i < 1000; i++) {
	tree.remove(data[i]);
}
console.timeEnd("remove 1000 one by one");

