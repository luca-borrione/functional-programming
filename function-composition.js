// Example of function compostion
// (requires the definitions in currying.js)

const pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x);

const calc = pipe(
	multiply(2),
	sum(10)
);