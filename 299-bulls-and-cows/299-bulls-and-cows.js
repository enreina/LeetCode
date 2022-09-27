/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    
    // store the occurences of each number in a hash map
    
    const secretOccurences = {};
    const guessOccurences = {};
    for (let idx=0; idx<secret.length; idx++) {
        const currCharSecret = secret.charAt(idx);
        if (currCharSecret in secretOccurences) {
            secretOccurences[currCharSecret]++;
        } else {
            secretOccurences[currCharSecret] = 1;
        }
        
        const currCharGuess = guess.charAt(idx);
        if (currCharGuess in guessOccurences) {
            guessOccurences[currCharGuess]++;
        } else {
            guessOccurences[currCharGuess] = 1;
        }
    }
    
    // count the number of "cows" by counting the number of occurences in guess
    Object.keys(guessOccurences).forEach((currCharGuess) => {
       if (currCharGuess in secretOccurences && secretOccurences[currCharGuess] > 0) {
           cows += Math.min(guessOccurences[currCharGuess], secretOccurences[currCharGuess]);
       } 
    });
    
    // counting bulls
    for (let idx=0; idx<secret.length; idx++) {
        if (guess.charAt(idx) === secret.charAt(idx)) {
            cows--;
            bulls++;
        }
    }
    
    return bulls + "A" + cows + "B";
};