import Stack from './stack.js';

function checkExpression(str) {
	let valid = true;
	let stack = new Stack();
	let len = str.length;
	let strArr = str.split("");
	let index = 0;
	while(index < len) {
		let currSymbol = strArr[index];
		if(currSymbol === "(" || currSymbol === "[" || currSymbol === "{") {
			stack.push(currSymbol);
		}
		if(currSymbol === ")" || currSymbol === "]" || currSymbol === "}") {
			if(stack.isEmpty()) {
				valid = false;
				break;
			} else {
				let popped = stack.pop();
				if(!isMatchingSymbol(popped, currSymbol)) {
					valid = false;
					break;
				}
			}
		}
		index++;
	}
	if(!stack.isEmpty()) {
		valid = false;
	}
	return valid;
}

function isMatchingSymbol(opening, closing) {
	if(
		(opening === "(" && closing == ")")
		|| (opening === "{" && closing == "}")
		|| (opening === "[" && closing == "]")
		) {
		return true;
	}
	return false;
}

export default checkExpression;