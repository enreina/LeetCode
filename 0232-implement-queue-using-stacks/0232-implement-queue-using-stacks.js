
var MyQueue = function() {
    this.firstStack = [];
    this.secondStack = [];
    this.head = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // always keep first stack to have the head element only
    if (this.firstStack.length === 0) {
        this.head = x;
    }
    
    while (this.firstStack.length > 0) {
        this.secondStack.push(this.firstStack.pop());
    }
    this.secondStack.push(x);
    while (this.secondStack.length > 0) {
        this.firstStack.push(this.secondStack.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const result = this.firstStack.pop();
    // update the head element
    this.head = this.firstStack.at(-1);
    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.head;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */