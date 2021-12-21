function lonelyinteger(a) {
  debugger;
  let finalResponse = 0;
  const recorrerArray = a.map((element, index, currentArray) => {
    let counterNumber = 0;
    currentArray.forEach((numEvaluate) => {
      if (element == numEvaluate) {
        counterNumber += 1;
      }
    });
    if (counterNumber == 1) {
      finalResponse += element;
    }
  });

  return finalResponse;
}

lonelyinteger([0, 0, 1, 2, 1]);
