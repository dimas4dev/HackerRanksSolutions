function plusMinus(arr) {
  // Write your code here
  const arrTotal = arr.length;
  const arrPositive = arr.filter((positive) => positive > 0);
  const arrNegative = arr.filter((negative) => negative < 0);
  const arrZero = arr.filter((zero) => zero === 0);

  const ratioPositive = (arrPositive.length / arrTotal).toFixed(6);
  const negativeRatio = (arrNegative.length / arrTotal).toFixed(6);
  const zeroRatio = (arrZero.length / arrTotal).toFixed(6);

  const answer = `
  ${ratioPositive}
  ${negativeRatio}
  ${zeroRatio}`;

  console.log(answer);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
