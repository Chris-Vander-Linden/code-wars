// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(string) {

  const stringArr = [...string.matchAll(/(.*[a-zA-Z])*(\d*)$/g)][0];
  const word = stringArr[1] || '';
  const incNumStr = (parseInt((stringArr[2]) || 0) + 1).toString();
  const zerosToBeAdded = '0'.repeat((stringArr[2].length - incNumStr.length) > 0 ? (stringArr[2].length - incNumStr.length) : 0);

  return (
    word +
    zerosToBeAdded +
    incNumStr
  );
}

console.log(incrementString("009"));