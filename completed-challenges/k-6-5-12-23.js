function solution(number) {

  if (number < 0) { return 0 };

  const result = []

  for (let index = 1; index < number; index++) {
    (index % 3 === 0 || index % 5 === 0) && result.push(index);
  }

  return result.reduce((acc, cur) => acc += cur, 0);
}

console.log(solution(30));