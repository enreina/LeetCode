/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const results = [];

    let firstPointer = 0;
    let secondPointer = 0;
    while (firstPointer < firstList.length && secondPointer < secondList.length) {
        const [startA, endA] = firstList[firstPointer];
        const [startB, endB] = secondList[secondPointer];
        
        if (startA >= startB && startA <= endB || startB >= startA && startB <= endA) {
            const interval = [Math.max(startA, startB), Math.min(endA, endB)];
            results.push(interval);
        }

        if (endB >= endA) {
            firstPointer++;
        }
        if (endA >= endB) {
            secondPointer++;
        } 
    }

    return results;
};