/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // n = 1
    // -> combinations: ()
    // n = 2
    // -> combinations: ()(), (())
    //      -> () + combination[1]
    //          -> ()()
    //      -> combination[1] + ()
    //          -> ()()
    //      -> "(" + combination[1] ")"
    //          -> (())
    // n = 3
    // -> combinations:
    //      -> combination[1] + combination[2]
    //          -> ()()(); ()(())
    //      -> combination[2] + combination[1]
    //          -> ()()(); (())()
    //      -> "(" + combination[2] + ")"
    //          -> (()()), ((()))
    // n = 4
    // -> combinations
    //      -> combination[1] + combination[3]
    //          -> ()()()(), ()()(()), ()(())(), ()(()()), ()((()))
    //      -> combination[2] + combination[2]
    //          -> ()()()(), (())(())
    //      -> combination[3] + combination[1]
    //          -> ()()()(), ()(())(), (())()(), (()())(), ((()))()
    //      -> "(" + combination[3] + ")"
    //          -> (()()()), (()(())), ((())()), ((()())), (((())))

    const combinations = Array(n+1);
    combinations[1] = ["()"];

    for (let currentN=2; currentN<combinations.length; currentN++) {
        const combinationsForCurrentN = new Set(); // avoid duplicate combination
        // e.g. n = 4, then:
        //  -> combination[1] + combination[3]
        //  -> combination[2] + combination[2]
        //  -> combination[3] + combination[1]
        for (let leftSide=1; leftSide<currentN; leftSide++) {
            const rightSide= currentN - leftSide;
            combinations[leftSide].forEach((leftSideCombination) => {
                combinations[rightSide].forEach((rightSideCombination) => {
                    combinationsForCurrentN.add(`${leftSideCombination}${rightSideCombination}`);
                });
            });
        }

        // "(" + combination[currentN-1] + ")"
        combinations[currentN-1].forEach((innerCombination) => {
            combinationsForCurrentN.add(`(${innerCombination})`);
        });
        combinations[currentN] = [...combinationsForCurrentN]; // convert Set to array
    }

    return combinations[n];
};