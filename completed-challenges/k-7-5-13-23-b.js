function getCount(str) {

  return str.split('').reduce((pV, aV) => {

    return pV += /a|e|i|o|u/.test(aV) ? 1 : 0;

  },0);
}

console.log(getCount('abracadabra'));