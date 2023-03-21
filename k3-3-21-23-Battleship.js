// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

const validateBattlefield = (field) => {

  const battleShips = {
    battleship: 0,
    cruisers: 0,
    destroyers: 0,
    submarines: 0
  }

  const rows = field.map(row => row.join(''));

  if (rows.join('').split('').length - rows.join('').split('').sort().findIndex((el) => el === '1') !== 20) { return false; }

  const columns = new Array(10).fill('');

  for (let col = 0; col < field.length; col++) {

    for (let row = 0; row < field.length; row++) {
      columns[col] += field[row][col]
    }
  }

  testBoard = [...rows, ...columns];

  testBoard.forEach((element, index, array) => {

    const shipsFound = [...element.matchAll(/(1{1,4})[^1]?/g)];

    shipsFound.forEach(ship => {

      const startTestIndex = ship.index === 0 ? 0 : ship.index - 1;
      const endTestIndex = ship.index + ship[1].length > array.length - 1 ? array.length - 1 : ship.index + ship[1].length;
      const prevShipValue = index === 0 ? new Array(10).fill('0') : array[index - 1];
      const nextShipValue = index === array.length - 1 ? new Array(10).fill(0) : array[index + 1];

      if (
        !(startTestIndex === 0 || element[startTestIndex] === '0')
        || !(endTestIndex === 0 || element[endTestIndex] === '0')
        || prevShipValue.toString().slice(startTestIndex, endTestIndex + 1).match('1')?.length > 0
        || nextShipValue.toString().slice(startTestIndex, endTestIndex + 1).match('1')?.length > 0) { return; }

      if (battleShips.battleship < 1 && ship[1].length === 4) {
        battleShips.battleship = 1;
      }

      if (battleShips.cruisers < 2 && ship[1].length === 3) {
        battleShips.cruisers += 1;
      }

      if (battleShips.destroyers < 3 && ship[1].length === 2) {
        battleShips.destroyers += 1;
      }

      if (battleShips.submarines < 4 && ship[1].length === 1) {
        battleShips.submarines += 1;
      }
    });
  });

  return (
    battleShips.battleship === 1 &&
    battleShips.cruisers === 2 &&
    battleShips.destroyers === 3 &&
    battleShips.submarines === 4
  )
}

const testField = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

console.log(validateBattlefield(testField));