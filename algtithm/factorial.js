//time complexity  O(n)

function findFactorialRecursive(number) {
  let answer;

  //identify the base case
  if ((number === 1) | (number === 2)) {
    answer = number;
    return answer;
  }

  //identify the recursive case
  if (number > 2) {
    answer = number * findFactorialRecursive(number - 1);
    return answer;
  }

  //get closer and return; usually have 2 returns
  //5*4*f(3)
  //f(3)=3*f(2)  f(2)=2
}

//time complexity  O(n)

function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) {
    answer = 2;
  }

  for (let i = number; i > 1; i--) {
    answer = answer * i;
    // console.log("i", i);
    // console.log("answer", answer);
  }

  return answer;

  //1*n*n-1* n-2 *2
}

console.log(findFactorialRecursive(-1));

console.log(findFactorialRecursive(2));

console.log(findFactorialRecursive(3));

console.log(findFactorialRecursive(4));

console.log(findFactorialIterative(4));

console.log(findFactorialIterative(5));
