// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  const re = new RegExp(`\\s${b.join('\\s|\\s')}\\s`, 'g');
  return a.filter(el => !` ${el} `.match(re));
}

console.log(arrayDiff([14, 1, 2, 2, 3, 9], [0, 3, 1, 2, 4]));