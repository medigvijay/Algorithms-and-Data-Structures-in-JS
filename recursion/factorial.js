function factorial(n) {
	let fact;
	if(n === 0) {
		fact = 1;
	} else {
		fact = n * factorial(n - 1);
	}
	return fact;
}

export default factorial;