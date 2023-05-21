// https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript

function reverseVowels(str) {
  const vowelsArr = str.match(/[aeiouAEIOU]/g);

  return str.split('').reduce((pre, cur) => {
  
    if (cur.match(/[aeiouAEIOU]/g)){
      cur = vowelsArr[vowelsArr.length - 1];
      vowelsArr.pop()
    }

    return pre += cur;
  },"");
}

const str = "Tomatoes!"
console.log(reverseVowels(str));