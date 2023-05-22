// https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript

var numberFormat = function (number) {
  return [...number.toString().split('').reverse().join('').match(/(\d{3})/g)].join(",");
};

const number = 99111189987999
console.log(numberFormat(number));