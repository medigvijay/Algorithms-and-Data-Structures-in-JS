function fibonacci(n) {
	let result;
	if(n === 0 || n === 1) {
		result = n;
	} else {
		result = fibonacci(n - 1) + fibonacci(n - 2);
	}
	return result;
}

export default fibonacci;