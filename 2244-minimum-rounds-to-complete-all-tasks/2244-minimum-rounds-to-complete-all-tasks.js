/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    // group the tasks by difficulty level and count the number of tasks for each difficulty
    const taskFreq = new Map();
    tasks.forEach((difficulty) => {
        taskFreq.set(difficulty, taskFreq.has(difficulty) ? taskFreq.get(difficulty) + 1 : 1);
    });
    
    // for each difficulty, count the number of rounds needed to complete them all
    // 1 -> impossible to finish
    // 2 -> 1 round (complete 2 tasks at 1 round)
    // 3 -> 1 round (complete 3 tasks at 1 round)
    // 4 -> 2 round (complete 2 tasks at 1 round, then 2 tasks at the next round)
    // 5 -> 2 round (complete 3 tasks at 1 round, then 2 tasks at the next round)
    // to reach minimum num of rounds, we should complete tasks of same difficulty three tasks at a time, unless
    //      number of tasks % 3 === 1 -> then we should do the last 4 tasks for two rounds with 2 tasks each
    //      number of tasks % 3 === 2 -> then we should do the last 2 tasks as one round
    
    const taskFreqList= [];
    taskFreq.forEach((freq, difficulty) => {
        taskFreqList.push(freq);
    });

    let minRounds = 0;
    const canTaskBeCompleted = taskFreqList.every((freq) => {
        if (freq === 1) {
            return false; 
        } else if (freq === 2 || freq === 3) {
            minRounds += 1;
            return true;
        } else {
            if (freq % 3 === 0) {
                minRounds += freq / 3;
            } else if (freq % 3 === 1) {
                minRounds += (freq - 4) / 3 + 2; 
            } else if (freq % 3 === 2) {
                minRounds += (freq - 2) / 3 + 1;
            }
            return true;
        }
    });

    return canTaskBeCompleted ? minRounds : -1;
};