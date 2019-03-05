function Stack(list) {
	this.data = (list && list.constructor === Array) ? list.slice() : [];
}

Stack.prototype.push = function(item){
	if(!(typeof item === 'undefined' || item === null)) {
		this.data.push(item);
	}
	return this.data.length
}


Stack.prototype.pop = function() {
	let item;
	if(this.data.length > 0) {
		item = this.data.splice(this.data.length - 1, 1)[0];
	} else {
		throw new Error("Stack is empty");
	}
	return item;
}

Stack.prototype.isEmpty = function() {
	return (this.data.length === 0);
}

Stack.prototype.asArray = function() {
	return this.data.slice();
}

export default Stack;