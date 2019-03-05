import Stack from './stack.js';

function checkParenthese(str) {
	let valid = true;
	let stack = new Stack();
	let len = str.length;
	let strArr = str.split("");
	let index = 0;
	while(index < len) {
		let currSymbol = strArr[index];
		if(currSymbol === "(") {
			stack.push(currSymbol);
		}
		if(currSymbol === ")") {
			if(stack.isEmpty()) {
				valid = false;
				break;
			} else {
				stack.pop();
			}
		}
		index++;
	}
	if(!stack.isEmpty()) {
		valid = false;
	}
	return valid;
}

export default checkParenthese;