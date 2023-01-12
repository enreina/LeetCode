/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const edgesMap = new Array(n);
    for (let idx=0; idx<n; idx++) {
        edgesMap[idx] = new Set();
    }
    edges.forEach(([nodeA, nodeB]) => {
        edgesMap[nodeA].add(nodeB);
        edgesMap[nodeB].add(nodeA);
    });

    const visited = new Array(n);
    visited.fill(false);
    const result = new Array(n);
    result.fill(0);

    // DFS, keeping track of each label count on each node
    const countLabels = (currentNode) => {
        const currentNodeLabelCount = {};

        visited[currentNode] = true;
        // calculate the count of label from each subtree
        edgesMap[currentNode].forEach((subtreeNode) => {
            if (!visited[subtreeNode]) {
                const subtreeLabelCount = countLabels(subtreeNode);
                Object.keys(subtreeLabelCount).forEach((label) => {
                    if (!(label in currentNodeLabelCount)) {
                        currentNodeLabelCount[label] = subtreeLabelCount[label];
                    } else {
                        currentNodeLabelCount[label] += subtreeLabelCount[label];
                    }
                });
            }
        });
        const currentLabel = labels.charAt(currentNode);
        if (!(currentLabel in currentNodeLabelCount)) {
            currentNodeLabelCount[currentLabel] = 1;
        } else {
            currentNodeLabelCount[currentLabel]++;
        }

        result[currentNode] = currentNodeLabelCount[currentLabel];
        return currentNodeLabelCount;
    };    
    countLabels(0);

    return result;
};
