function countingSort(arr) {
  // Write your code here
  const tamArr = arr.length + 1;
  const integerArrays = new Array(tamArr).fill(0);

  const array = arr.map((number, index) => {
    const newIndex = number == 0 ? 0 : number + 1;
    return integerArrays[newIndex]++;
  });

  return array;
}
console.log(countingSort([1, 1, 3, 2, 1]));
