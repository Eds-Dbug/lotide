const assertEqual = function (actual, expected) {
	if (actual !== expected) {
		console.log(`Asserion Failed: ${actual} !== ${expected}`);
		return false;
	} else {
		console.log(`Assertion Passed: ${actual} === ${expected}`);
		return true;
	}
};

module.exports = assertEqual;
