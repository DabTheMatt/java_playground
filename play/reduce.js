let ages = [2, 4, 5, 7, 8, 23];

let reducedArray = ages.reduce(function(acc, curr) {
    return acc * curr
})


getMax = (a, b) => Math.max(a, b);

console.log(getMax(45, 54));

let max = ages.reduce(getMax);

console.log('max', max);

console.log(reducedArray);