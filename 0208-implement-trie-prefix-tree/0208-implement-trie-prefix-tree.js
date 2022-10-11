var TrieNode = function() {
    this.children = new Map(); // maps letter to TrieNode
    this.isTerminal = false; // defines if this node is end of word or not
};

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    for (let ii=0; ii<word.length; ii++) {
        if (!currentNode.children.has(word[ii])) {
            currentNode.children.set(word[ii], new TrieNode());
        }
        currentNode = currentNode.children.get(word[ii]);
    }
    currentNode.isTerminal = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    for (let ii=0; ii<word.length; ii++) {
        if (!currentNode.children.has(word[ii])) {
            return false;
        }
        currentNode = currentNode.children.get(word[ii]);
    }
    return currentNode.isTerminal;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for (let ii=0; ii<prefix.length; ii++) {
        if (!currentNode.children.has(prefix[ii])) {
            return false;
        }
        currentNode = currentNode.children.get(prefix[ii]);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */