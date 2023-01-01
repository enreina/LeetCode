/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    // 3 points (x0,y0),(x1,y1),(x2,y2) are in a straight line if:
    // x1 - x0 == k(x2 - x0) and y1 - y0 == k(y2 - y0) for some number k
    // idea: 
    // - we make lines of from pairs of point making it a hashmap
    // - along the way we add points to existing lines if it's part of it (identifying line as "m,c" from y=mx + c equation)
    // - max points is the line that has the most number of points

    let maxPoints = 1;

    const lines = {};
    for (let ii=0; ii<points.length;ii++) {
        const [x0, y0] = points[ii];
        for (let jj=ii+1; jj<points.length; jj++) {
            const [x1, y1] = points[jj];
            // we store it in map of [m, c] -> set of points
            // from y = mx + c <-> c = y - mx 
            const m = (y1 - y0) / (x1 - x0);
            const c = y0 - m * x0;
            let lineID = `${m},${c}`;
            // special case where m is infinity i.e. it's a vertical, thus x = c
            if (m === Number.POSITIVE_INFINITY || m === Number.NEGATIVE_INFINITY) {
                lineID = `Infinity,Infinity,${x0}`;
            }
            if (!(lineID in lines)) {
                lines[lineID] = new Set();
            } 

            lines[lineID].add(points[ii]);
            lines[lineID].add(points[jj]);

            maxPoints = Math.max(maxPoints, lines[lineID].size);
        }
    }

    return maxPoints;
};

// Time 15:00