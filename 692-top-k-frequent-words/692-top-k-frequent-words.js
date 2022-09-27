/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // count the frequency of each word in a hash map
    const frequencyMap = new Map();
    words.forEach((word) => {
       frequencyMap.set(word, frequencyMap.has(word) ? frequencyMap.get(word) + 1 : 1); 
    });
    
    // create a compare function based on the frequency & lexicographical order
    const compareFunction = (wordA, wordB) => {
        const wordAFrequency = frequencyMap.get(wordA);
        const wordBFrequency = frequencyMap.get(wordB);
        if (wordAFrequency < wordBFrequency) {
            return -1;
        } else if (wordAFrequency > wordBFrequency) {
            return 1;
        } else {
            // if same frequency, sort by lexicographical order
            if (wordA > wordB) {
                return -1;
            } else if (wordA < wordB) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    // sort the words;
    const sortedWords = new Array();
    for (const word of frequencyMap.keys()) {
        sortedWords.push(word);
        sortedWords.sort(compareFunction);
    }
    // return the top k frequent words (using pop())
    const result = [];
    for (let ii=0; ii<k; ii++) {
        result.push(sortedWords.pop());
    }
    
    return result;
};