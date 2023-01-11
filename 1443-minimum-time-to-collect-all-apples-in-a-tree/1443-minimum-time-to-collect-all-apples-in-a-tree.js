/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    // To reach apple at depth 1 -- would need 2 seconds (to get back to vertex 0)
    // Depth 0
    // - Minimum time to collect apple at leaf n where hasApple(n) is true is 0
    // Depth 1 with n leafs
    // - Minimum time to collect all apples is the sum of; for each leaf
    //      - if leaf hasApple -> 2 seconds
    //      - Else -> 0
    // Depth 2 with n subtrees
    // - Minimum time to collect all apples is the sum of; for each subtree:
    //      - if subtree has apple -> minimum time to collect all apples
    //      - if subtree has no apple but the root has apple -> 2 seconds

    // setup a mapping of vertex -> subtree
    const edgesMap = new Array(n);
    for (let idx=0; idx<edgesMap.length; idx++) {
        edgesMap[idx] = new Set();
    }
    edges.forEach(([vertexA, vertexB]) => {
        edgesMap[vertexA].add(vertexB);
        edgesMap[vertexB].add(vertexA);
    });
    
    const visited = new Array(n);
    visited.fill(false);
    const calculateMinTime = (rootVertex) => {
        visited[rootVertex] = true;
        let totalTime = 0;
        Array.from(edgesMap[rootVertex]).forEach((subTree) => {
            if (!visited[subTree]) {
                let minTimeForSubtree = calculateMinTime(subTree);
                if (minTimeForSubtree > 0 || (minTimeForSubtree === 0 && hasApple[subTree])) {
                    minTimeForSubtree += 2;
                } 
                totalTime += minTimeForSubtree;
            }
        });

        return totalTime;
    };

    return calculateMinTime(0);
};