/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
        // set left to 1
        let leftIndex = 1;
        // set right to n
        let rightIndex = n;
        // let middleIndex = leftIndex;
        // let firstBadVersion = 1;
        
        while (leftIndex < rightIndex) {
            // find middle version
            let middleIndex = Math.floor((rightIndex - leftIndex)/2) + leftIndex;
            // if middle version is bad version, move to the left (e.g. update right to middle - 1)
            if (isBadVersion(middleIndex)) {
                // firstBadVersion = middleIndex;
                rightIndex = middleIndex;
            } else {
                // if middle version is not bad version, move to the right (e.g. update left to middle + 1)
                leftIndex = middleIndex + 1;
            }
        }
        
        return leftIndex;
    };
};