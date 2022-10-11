
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
    // always push to first stack
    if (this.firstStack.length === 0) {
        this.head = x;
    }
    this.firstStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.secondStack.length === 0) {
        // move elements from first stack to second stack so the second stack is the reversed
        // order of the first stack
        while (this.firstStack.length > 0) {
            this.secondStack.push(this.firstStack.pop());
        }
    }
    
    return this.secondStack.pop();;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.secondStack.length > 0) {
        return this.secondStack.at(-1);
    }
    return this.head;
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