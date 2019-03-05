function ackersMan(m, n) {
	let result;
	if(m === 0) {
		result = n + 1;
	} else if(m !== 0 && n === 0) {
		result = ackersMan(m - 1, 1);
	} else if(m !== 0 && n!== 0) {
		result = ackersMan(m - 1, ackersMan(m, n - 1));
	}
	return result;
}

exports default ackersMan;