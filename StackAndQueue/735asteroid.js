/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  stack = [];

  for (let a of asteroids) {
    //if  the last asteroid in the stack is positive and the current asteroid is negative
    while (stack && stack[stack.length - 1] > 0 && a < 0) {
      let diff = stack[stack.length - 1] + a;
      if (diff > 0) {
        a = 0; //Set to 0 to indicate that it has been destroyed
        break; //exit the while loop and continue with the next asteroid in the for loop
      } else if (diff < 0) {
        stack.pop();
        continue; //continue the while loop to check the next asteroid in the stack
      } else if (diff === 0) {
        stack.pop();
        a = 0;
        break; //break or continue will work here cuz a=0;
      }
    }
    if (a !== 0) {
      stack.push(a);
    }
  }
  return stack;
};
