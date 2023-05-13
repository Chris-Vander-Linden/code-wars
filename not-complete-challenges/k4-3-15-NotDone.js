//https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
function multiply(a, b) {

  let result = '';

  let carryOver = 0;
  const multiplyArray =
    [a.split(''),
    b.split('')]
  console.log(multiplyArray);

  const addArray = new Array(b.split('').length).fill(new Array(b.split('').length + a.split('').length).fill(0))

  console.log(addArray);

  return result;
}

console.log(multiply("578667372827", "123"));

