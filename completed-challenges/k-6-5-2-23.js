function portion(a, i, n) {

  if (n > a.length) { return -1 };

  const startIndex = i < 0 ? a.length + i - n : i;
  const endIndex = startIndex + n - 1;

  const result = [];

  a.forEach((el, idx) => {
    if (idx < startIndex || idx > endIndex) { return };
    result.push(el);
  });

  return result;
}

console.log(portion([1, 2, 3, 4], -1, 2));