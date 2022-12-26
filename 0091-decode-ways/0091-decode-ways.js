/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // dynamic programming
    // Example: 11106
    // Definition: ways[n] is the number of ways a stirng of length n can be decoded
    // "" -> number of ways ways[0] = 1
    // "1" -> number of ways ways[1] = 1
    // "11" -> ways[2] = ways[0] + ways[1] = 2
    //      -> if we treat last 2 digits as 1 char: ways[0] = 1
    //      -> if we treat last 1 digit as 1 char: ways[1] = 1
    // "111" --> ways[3] = ways[1] + ways[2] = 3
    //      -> if we treat last 2 digits as 1 char: ways[1] = 1
    //      -> if we treat last 1 digit as 1 char: ways[2] = 2
    // "1110" -> ways[4] = ways[2] = 2
    //      -> if we treat last 2 digits as 1 char -> ways[2] = 2
    //      -> if we treat last 1 digit as 1 char -> not possible as "0" does not map to anything
    // "11106" -> ways[5] = ways[4] = 2
    //      -> if we treat last 2 digits as 1 char -> not possible as "06" does not map to anything
    //      -> if we treat last 1 digit as 1 char -> ways[4] = 2
    // ways[n] = (s.substr(n-1, n) has mapping ? ways[n-1] : 0) + (s.substr(n-1, n) has mapping ? ways[n-2] : 0)

    // setup a set that contains possible mapping
    const validMapping = new Set();
    for (let ii=1; ii<=26; ii++) {
        validMapping.add(`${ii}`);
    }

    const ways = new Array(s.length+1);
    ways[0] = 1; 
    ways[1] = validMapping.has(s.substring(0,1)) ? 1 : 0;
    for (let n=2; n<=s.length; n++) {
        ways[n] = 0;
        if (validMapping.has(s.substring(n-1, n))) {
            ways[n] += ways[n-1];
        }

        if (validMapping.has(s.substring(n-2, n))) {
            ways[n] += ways[n-2];
        }
    }

    return ways[s.length];
};