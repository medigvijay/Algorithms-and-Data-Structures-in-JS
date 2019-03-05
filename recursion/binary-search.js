// low starts from 0, high => length-1
function binarySearch(arr, item, low, high) {
	if(low > high) {
		return -1;
	}
	//3,17
	let mid = Math.floor((low + high) / 2);
	if(item === arr[mid]) {
		return mid;
	}
	if(item < arr[mid]) {
		high = mid - 1;  // subtract 1 to skip mid
		return binarySearch(arr, item, low, high);
	} else {
		low = mid + 1; // add 1 to skip mid
		return binarySearch(arr, item, low, high);
	}
}

export default binarySearch;