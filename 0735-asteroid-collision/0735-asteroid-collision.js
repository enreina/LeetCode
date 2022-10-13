/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    // prepare a stack
    const stack = [];
    // for each asteroid
    for (let ii=0; ii<asteroids.length; ii++) {
        // - we pop the stack (if there is any) and "battle" the asteroid, resulting either:
        //  - destroying the top stack
        //  - destroying the new stack
        //  - not destroying anything
        let newAsteroid = asteroids[ii];
        while (newAsteroid !== null) {
            if (stack.length === 0) {
                stack.push(newAsteroid);
                newAsteroid = null; // stopping the loop; move to the next asteroid
            } else {
                const topOfStack = stack.at(-1);
                const newAsteroidSize = Math.abs(newAsteroid);
                const topOfStackSize = Math.abs(topOfStack);
                if (topOfStack < 0 && newAsteroid > 0 || topOfStack * newAsteroid > 0) {
                    stack.push(newAsteroid);
                    newAsteroid = null; // set this to null so the loop will be stopped
                } else if (newAsteroidSize > topOfStackSize) {
                    stack.pop(); // destroy the top of stack; 
                    // and continue to compare the new asteroid to the next top of stack (loop continues)
                } else if (newAsteroidSize < topOfStackSize) {
                    newAsteroid = null; // destroy the new asteroid and stop the loop
                } else if (newAsteroidSize === topOfStackSize) {
                    newAsteroid = null; // destroy the new asteroid (and stop the loop)
                    stack.pop(); // and also destroy the top of stack
                }
            }
        }
    }
    
    return stack;
};