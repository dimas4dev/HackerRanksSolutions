function birthdayCakeCandles(candles) {
  // Write your code here
  const maxNumber = Math.max(...candles);
  const newArray = candles.filter((candle) => candle === maxNumber);
  return newArray.length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
