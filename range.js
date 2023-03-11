function solution(list) {

  return list.reduce((acc, curVal, idx, arr) => {

    return acc += (arr[idx + 1] - curVal === 1) && (arr[idx - 1] - curVal === -1) ? '*' : ',' + curVal;

  }, '').replace(/(\*+),/g, '-').substring(1);
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));