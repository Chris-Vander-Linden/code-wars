// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

const multiplicationTable = function (size) {

  const resultArr = []

  for (let row = 1; row <= size; row++) {

    const colArr = [];

    for (let col = 1; col <= size; col++) {
      colArr.push(row * col);
    }

    resultArr.push(colArr);
  }

  return resultArr;
}

console.log(multiplicationTable(3));