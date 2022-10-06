/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // topological ordering
    // build the graph
    const preqGraph = [];
    for (let ii=0; ii<numCourses; ii++) {
        preqGraph[ii] = [];
    }
    prerequisites.forEach(([course, preq]) => {
        preqGraph[preq].push(course);
    });
    // console.log(preqGraph);
    // keep track of visited course
    const visitedCourse = new Set();
    // beingVisited is needed to detect cycle; keeping track of the current prereq that's being processed
    const beingVisited = new Set();
    const sortedCourse = [];
    let cycleDetected = false;
    const dfs = (currentCourse, sortedCourse) => {
        if (cycleDetected) {
            return; // short circuit if we already know that cycle is detected
        }
        // mark as visited
        visitedCourse.add(currentCourse);
        beingVisited.add(currentCourse);
        // visit neightbors (courses which has this currentCourse as a prerequisite)
        preqGraph[currentCourse].forEach((course) => {
            if (beingVisited.has(course)) {
                cycleDetected = true;
                // console.log("cycle detected");
            }
            if (!visitedCourse.has(course)) {
                dfs(course, sortedCourse);
            }
        });
        sortedCourse.unshift(currentCourse);
        beingVisited.delete(currentCourse);
    }
    // run dfs on every unvisited course
    preqGraph.forEach((_, course) => {
        if (!visitedCourse.has(course)) {
            dfs(course, sortedCourse);
        }
    });
    
    return !cycleDetected ? sortedCourse : [];
};