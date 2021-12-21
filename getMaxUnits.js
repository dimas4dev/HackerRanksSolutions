function getMaxUnits(boxes, unitsPerBox, truckSize) {
  let maxUnits = 0;
  let calcBoxRestantes = truckSize;
  while (unitsPerBox.length !== 0) {
    const cantMaxCaja = Math.max(...unitsPerBox);
    const indexCaja = unitsPerBox.findIndex((cant) => cant == cantMaxCaja);
    const unitMaxBox = boxes[indexCaja];

    if (unitMaxBox == 1) {
      maxUnits += cantMaxCaja;
      calcBoxRestantes -= unitMaxBox;
      unitsPerBox.splice(indexCaja, 1);
      boxes.splice(indexCaja, 1);
    } else {
      let vueltasCaja = unitMaxBox;
      while (vueltasCaja > 0) {
        vueltasCaja -= 1;
        maxUnits += cantMaxCaja;
        calcBoxRestantes -= 1;
      }
      unitsPerBox.splice(indexCaja, 1);
      boxes.splice(indexCaja, 1);
    }
    if (unitsPerBox.length == 0) {
      break;
    }
  }
  return maxUnits;
}

console.log(
  getMaxUnits([4, 6, 5, 2, 7], [46335, 90039, 24796, 87808, 17739], 610563)
);
