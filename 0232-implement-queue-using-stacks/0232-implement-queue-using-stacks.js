
var MyQueue = function() {
    this.firstStack = [];
    this.secondStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // always push to first stack
    this.firstStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.firstStack.length > 1) {
        this.secondStack.push(this.firstStack.pop());
    }
    const result = this.firstStack.pop();
    while (this.secondStack.length > 0) {
        this.firstStack.push(this.secondStack.pop());
    }
    return result
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.firstStack.length > 1) {
        this.secondStack.push(this.firstStack.pop());
    }
    const result = this.firstStack.at(0);
    while (this.secondStack.length > 0) {
        this.firstStack.push(this.secondStack.pop());
    }
    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0 && this.secondStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */