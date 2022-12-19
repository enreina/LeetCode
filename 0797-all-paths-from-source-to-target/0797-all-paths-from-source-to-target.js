/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // run DFS from graph[0], keeping track of the path
    // when we reach n - 1 store the path
    const paths = [];

    const runDFS = (node, path) => {
        if (node === graph.length - 1) {
            paths.push(path.concat(node));
            return;
        }

        graph[node].forEach((neighborNode) => {
            runDFS(neighborNode, path.concat(node));
        });
    };

    runDFS (0, []);

    return paths;
};