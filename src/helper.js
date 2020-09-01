
const buildMatrix = (array) => {
  const numberMatrix = [[], [], [], []];

  let rowIndex = 0;
  let columnIndex = 0;
  array.forEach(number => {

    //New row
    if(columnIndex === 4) {
      columnIndex = 0;
      rowIndex++;
    }

    numberMatrix[rowIndex][columnIndex] = number;
    columnIndex++;
  })

  return numberMatrix;
}
  export default buildMatrix;