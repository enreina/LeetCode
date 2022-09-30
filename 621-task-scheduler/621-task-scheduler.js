/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // we count the frequency of each unique task
    // we take the priority of most frequency task and input it to the task scheduler
    // then we mark this task as "need to cooldown" -- as we put other task to the scheduler, we decrease the cooldown
    // repeat until all tasks are assigned
    
    const sortedTasks = new MaxPriorityQueue();
    const taskFreq = {};    
    const coolingDownTasks = new Map();
    
    tasks.forEach((taskName) => {
       taskFreq[taskName] =  (taskFreq[taskName] ?? 0) + 1;
    });
    
    for (const [key, value] of Object.entries(taskFreq)) {
        sortedTasks.enqueue({taskName: key, freq: value}, value);
    }
    
    let numberOfTime = 0;
    while (!sortedTasks.isEmpty() || coolingDownTasks.size > 0) {
        // console.log(`elapsed time: ${numberOfTime}`);
        // review coolingDownTasks
        if (coolingDownTasks.has(numberOfTime - n - 1)) {
            const taskToBeReadded = coolingDownTasks.get(numberOfTime - n - 1);
            sortedTasks.enqueue({taskName: taskToBeReadded, freq: taskFreq[taskToBeReadded]}, taskFreq[taskToBeReadded]);
            coolingDownTasks.delete(numberOfTime - n - 1);
        }
        // console.log(coolingDownTasks);
        // console.log(sortedTasks.front());
        
        if (!sortedTasks.isEmpty()) {
            const {element: task} = sortedTasks.dequeue();
            // console.log(`processing ${task.taskName}`);
            taskFreq[task.taskName]--;
            if (taskFreq[task.taskName] > 0) {
                coolingDownTasks.set(numberOfTime, task.taskName);
            }
        } else {
            // console.log(`idle`);
        }
        numberOfTime++;
    }
    // console.log(numberOfTime);
    return numberOfTime;
};