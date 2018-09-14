// Example of basic currying with a finite recursion
const baseMultiply = (x, y) => x * y;

const makeMultiply = x => y => baseMultiply(x, y);

const double = makeMultiply(2);
const triple = makeMultiply(3);


// Example of more complex currying with infinite recursion
// and stateless feature
const curryMultiply = (multiplicand) => {
	multiplicand = multiplicand || 0;
	let product = multiplicand;

	const curried = (multiplier) => {
		product = multiplicand * multiplier;
		return curryMultiply(product);
	};
	curried.toString = curried.valueOf = () => {
		return multiplicand;
	};

	return curried;
};

const multiply = curryMultiply(1);

const currySum = (initialValue) => {
	initialValue = initialValue || 0;
	let total = initialValue;

	const curried = (value) => {
		total = initialValue + value;
		return currySum(total);
	};
	curried.toString = curried.valueOf = () => {
		return total;
	};

	return curried;
};

const sum = currySum(0);

