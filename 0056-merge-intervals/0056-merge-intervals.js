/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const IntervalElement = {
        Start: 0,
        End: 1,
    };
    const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[IntervalElement.Start] - intervalB[IntervalElement.Start]);
    const result = [];
    let index = 0;
    while (index < sortedIntervals.length) {
        if (index === sortedIntervals.length - 1) {
            result.push(sortedIntervals[index]);
            index++;
        } else if (sortedIntervals[index][IntervalElement.End] < sortedIntervals[index+1][IntervalElement.Start]) {
            result.push(sortedIntervals[index]);
            index++;
        } else {
            // merge all overlapping intervals
            let newStart = sortedIntervals[index][IntervalElement.Start];
            let newEnd = sortedIntervals[index][IntervalElement.End];
            while (index < sortedIntervals.length && sortedIntervals[index][IntervalElement.Start] <= newEnd) {
                newStart = Math.min(newStart, sortedIntervals[index][IntervalElement.Start]);
                newEnd = Math.max(newEnd, sortedIntervals[index][IntervalElement.End]);
                index++;
            }
            result.push([newStart,newEnd])
        }
    }
    return result;
};