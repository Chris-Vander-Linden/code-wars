// https://www.codewars.com/kata/58296c407da141e2c7000271/train/javascript

function greedyThief(items, n) {

  const combinations = items => {
    // base case
    if (items.length === 0) return [[]];

    const firstObject = items[0];
    const restOfObjects = items.slice(1);

    const combinationsWithoutFirstObj = combinations(restOfObjects);
    const combinationsWithFirstObj = [];

    combinationsWithoutFirstObj.forEach(objs => {
      const objsWithFirst = [...objs, firstObject];
      combinationsWithFirstObj.push(objsWithFirst);
    });


    return [...combinationsWithoutFirstObj, ...combinationsWithFirstObj];

  }

  return combinations(items).filter(combinationItem => {
    return combinationItem.reduce((pv, cv) => pv += cv.weight, 0) <= n;
  }).sort((a, b) => {
    return (b.reduce((pv, cv) => pv += cv.price, 0)) - (a.reduce((pv, cv) => pv += cv.price, 0));
  })[0];
}

const items = [{ "weight": 18, "price": 8 }, { "weight": 12, "price": 27 }, { "weight": 15, "price": 34 }, { "weight": 3, "price": 55 }, { "weight": 2, "price": 47 }, { "weight": 11, "price": 28 }, { "weight": 18, "price": 89 }]
n = 148;

console.log(greedyThief(items, n));
