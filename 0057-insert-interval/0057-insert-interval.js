/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let [newStart, newEnd] = newInterval;
    // first we add all intervals which has end time before the new start
    let index = 0;
    const IntervalElement = {
        Start: 0,
        End: 1,
    };
    while (index < intervals.length && intervals[index][IntervalElement.End] < newStart) {
        result.push(intervals[index]);
        index++;
    }
    
    // merge all overlapping intervals
    while (index < intervals.length && intervals[index][IntervalElement.Start] <= newEnd) {
        newStart = Math.min(newStart, intervals[index][IntervalElement.Start]);
        newEnd = Math.max(newEnd, intervals[index][IntervalElement.End]);
        index++;
    }
    result.push([newStart, newEnd]);
    // add remaining intervals
    while (index < intervals.length) {
        result.push(intervals[index]);
        index++;
    }
    
    return result;
};

