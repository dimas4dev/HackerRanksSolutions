function solution(n) {
  debugger;
  let finishArray = [];
  for (let index = 1; index <= n; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      finishArray.push("FizzBuzz");
    } else if (index % 3 == 0) {
      finishArray.push("Fizz");
    } else if (index % 5 == 0) {
      finishArray.push("Buzz");
    } else {
      finishArray.push(index.toString());
    }
  }

  console.log(finishArray);
}

solution(15);
