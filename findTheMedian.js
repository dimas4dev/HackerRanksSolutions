function findMedian(arr) {
  // Write your code here
  const orderedArray = arr.sort((a, b) => a - b);
  const lastNumber = orderedArray.length - 1;
  if (lastNumber % 2 == 0) {
    const median = Math.trunc(lastNumber / 2);
    const medianArray = orderedArray[median];
    console.log(medianArray);
    return medianArray;
  } else {
    const median2 = Math.round(lastNumber / 2);
    const medianArray2 = orderedArray[median2];
    console.log(medianArray2);
    return medianArray2;
  }
}

findMedian([5, 4, 3, 2, 1, 0]);
