// https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/javascript

function compare(a, b) {

  function cssSpecScore(selector) {
    const selectorRE = /(?:^|\s)(\w)|(\.)|(#)/g;
    const selectorArr = selector.match(selectorRE) !== null ? selector.match(selectorRE) : [];

    return selectorArr.reduce((pre, cur) => {
      if (cur === '#') {
        pre[0] += 1;
      } else if (cur === '.') {
        pre[1] += 1;
      } else {
        pre[2] += 1;
      }

      return pre;
    }, [0, 0, 0]);
  }

  const selectorA = cssSpecScore(a);
  const selectorB = cssSpecScore(b);

  console.log(selectorA, selectorB);

  for (let i = 0; i < 3; i++) {
    if (selectorA[i] > selectorB[i]) { return a }
    else if (selectorA[i] < selectorB[i]) { return b }
  }

  return b;
}

console.log(compare("div div .classNAME", ".classNAME2 div"));