
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const minimumValue = this.stack.length > 0 ? Math.min(val, this.stack.at(-1).minimumValue) : val;
    this.stack.push({value: val, minimumValue});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1).value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack.at(-1).minimumValue;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */