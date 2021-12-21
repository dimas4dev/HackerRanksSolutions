function miniMaxSum(arr) {
  const orderedArr = arr.sort((a, b) => a - b);
  let minSum = 0;
  let maxSum = 0;
  const MinSum = () => {
    for (let index = 0; index < orderedArr.length - 1; index++) {
      const element = orderedArr[index];
      minSum += element;
    }
    return minSum;
  };

  const MaxSum = () => {
    debugger;
    for (let index = orderedArr.length - 1; index >= 1; index--) {
      const element = orderedArr[index];
      maxSum += element;
    }
    return maxSum;
  };

  const resolveMinSum = MinSum();
  const resolveMaxSum = MaxSum();
  console.log(resolveMinSum, resolveMaxSum);
}

miniMaxSum([7, 69, 2, 221, 8974]);
