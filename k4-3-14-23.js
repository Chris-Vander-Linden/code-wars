function mix(s1, s2) {

  // list of sorted unique lowercase letters that occur at least 2 times.
  const lowercaseRE = /([a-z])\1{1,}/g;

  const testArr = [
    ...s1.split('').sort().join('').matchAll(lowercaseRE),
    ...s2.split('').sort().join('').matchAll(lowercaseRE)].map(el => el[1]).filter((elm, idx, arr) => arr.findIndex(el => el === elm) === idx);

  result = testArr.map(el => {

    // dynamic re based off letter
    const re = new RegExp(el, "g");

    // compare # of letter occurrences.
    const s1LetterCount = s1.match(re);
    const s2LetterCount = s2.match(re);

    return (s1LetterCount?.length ?? 0) > (s2LetterCount?.length ?? 0) ? `1:${s1LetterCount.join('')}` : (s1LetterCount?.length ?? 0) === (s2LetterCount?.length ?? 0) ? `=:${s1LetterCount.join('')}` : `2:${s2LetterCount.join('')}`;

  });

  return result.sort((a, b) => a[0].replace('=', 3) < b[0].replace('=', 3) ? -1 : 1).sort((a, b) => b.length - a.length).join('/');
}

console.log(mix(" In many languages", " there's a pair of functions"));