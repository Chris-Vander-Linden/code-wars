function bowlingScore(frames) {

  // base array for throws
  const arrayThrows = frames.replaceAll(' ', '').split('');

  // same array with converted throw symbols to values
  const throwValues = arrayThrows.map((elem, idx, array) => {
    return elem === 'X' ? 10 : elem === '/' ? 10 - array[idx - 1] : parseInt(elem)
  });

  console.log(throwValues);

  // array with X and / symbols
  return arrayThrows.reduce((accumulator, currentValue, currentIndex, array) => {

    // don't award bonus for last 2 throws or last 3 if 3rd from last is a strike.
    if (currentIndex > array.length - 3 || (currentIndex === array.length - 3 && currentValue === 'X' && frames.split(' ')[frames.split(' ').length - 1][0] === 'X')) {
      return accumulator + throwValues[currentIndex];
    }

    return accumulator + (currentValue === '/' ?
      throwValues[currentIndex] + throwValues[currentIndex + 1] :
      currentValue === 'X' ? throwValues[currentIndex] + throwValues[currentIndex + 1] + throwValues[currentIndex + 2] : throwValues[currentIndex]);

  }, 0);
};


const result = bowlingScore('X X X X X X X X X X1/');
console.log(result);