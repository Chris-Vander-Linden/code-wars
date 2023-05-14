// https://www.codewars.com/kata/58d5f464ba74621747000068/train/javascript

const foundationMessage = function (string) {

  const stringArr = string.replace(/,|"|\s\-/g, '').replace(/\s\s/, ' ').split(/\.|\?|\!/).map(el => el.toLowerCase().trim()).filter(el => el !== '');
  const result = [];

  while (stringArr.length) {

    const codeArr = stringArr.slice(1);
    const decodeArr = stringArr[0].split(' ');
    const resultArr = [];

    decodeArr.forEach((el, idx) => {

      const word = codeArr[idx].split(' ')[el.replace(/\'/g, '').length - 1];

      resultArr.push(idx ? word : word.split('')[0].toUpperCase() + word.split('').slice(1).join(''));

    });

    result.push(`${resultArr.join(' ').replace(/"/g, '')}.`);
    stringArr.splice(0, decodeArr.length + 1);

  }

  return result.join(' ');

}

console.log(foundationMessage('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.'));