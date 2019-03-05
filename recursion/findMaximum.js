function findMaximum(arr) {
	let max;
	if(arr.length === 1) {
		max = arr[0];
	}
	if(arr.length === 2) {
		max = arr[0] > arr[1] ? arr[0] : arr[1];
	}
	if(arr.length > 2) {
		let left = findMaximum(arr.slice(0, Math.floor(arr.length/2)));
		let right = findMaximum(arr.slice(Math.floor(arr.length/2), arr.length));
		return left > right ? left : right;
	}
	return max;
}

export default findMaximum;