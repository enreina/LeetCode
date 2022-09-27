/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const comparingFunction = (x, y) => {
        if (x < y) return -1;
        else if (x > y) return 1;
        return 0;
    };
    
    // until we only have one stone left
    while (stones.length > 1) {
        // we sort the stones based on weight
        stones.sort(comparingFunction);
        // take the two heaviest stone
        const x = stones.pop();
        const y = stones.pop();
        // decide to destroy both stones (not doing anything)
        // or update the weight of the heaviest stone
        if (x != y) {
            const newStone = Math.max(x, y) - Math.min(x, y);
            // push back the stone  
            stones.push(newStone);
        }
        
        // resort the stones
        stones.sort(comparingFunction);
    }
    
    return stones[0] || 0;
};