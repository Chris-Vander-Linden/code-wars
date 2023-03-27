//https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/train/javascript

function dontGiveMeFive(start, end) {

  const sourceNumRange = end - start;

  // pow 9 to get number of 5s add to array
  console.log(Math.pow(9, Math.round(Math.log10(sourceNumRange))));
  const baseNonFiveNumbers = Math.pow(9, Math.round(Math.log10(sourceNumRange)));

  // # to filter?
  console.log(sourceNumRange - Math.pow(10, Math.round(Math.log10(sourceNumRange))));

  const remainingNumbersPostBase = sourceNumRange - Math.pow(10, Math.round(Math.log10(sourceNumRange)));

  return new Array(remainingNumbersPostBase).fill(0).map((el, idx) => start + idx).filter(el => !el.toString().includes('5')).length + baseNonFiveNumbers;

}

//console.log(Math.pow(9, Math.log10(112)));
console.log(dontGiveMeFive(0, 104));