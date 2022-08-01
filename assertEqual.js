const assertEqual = function (actual, expected) {
	if (actual !== expected) {
		console.log(`Asserion Failed: ${actual} !== ${expected}`);
	} else {
		console.log(`Assertion Passed: ${actual} === ${expected}`);
	}
};

module.exports = assertEqual;
