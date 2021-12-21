function countHighlyProfitableMonths(stockPrices, k) {
  // Write your code here
  const arr = [];
  for (let i = 0; i <= stockPrices.length; i += k) {
    if (stockPrices[i] < stockPrices[i + 1]) {
      let part = stockPrices.slice(i, i + k);
      arr.push(part);
    }
  }
  const arr2 = arr.map((item) => {
    const itemMod = item.reduce((a, b) => {
      return a + b;
    });
    return [itemMod];
  });

  const flat = arr2.reduce((acc, val) => acc.concat(val), []);

  for (let i = 0; i < flat.length; i++) {
    if (flat[i] > flat[i + 1]) {
      return i++;
    } else {
      return i + 2;
    }
  }
}
console.log(countHighlyProfitableMonths([1, 2, 3, 3, 4, 5], 3));
