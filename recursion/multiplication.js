function multiply(a,b) {
	let prod;
	let _a = Math.abs(a);
	let _b = Math.abs(b);
	if(_b === 1) {
		prod = _a;
	} else if(_b > 1){
		prod = multiply(_a, _b-1) + _a;
	} else if (a === 0 || b === 0) {
		prod = 0;
	}

	if((a < 0 && !(b < 0)) || (b < 0 && !(a < 0))) {
		prod = 0 - prod;
	}
	return prod;
}

export default multiply;