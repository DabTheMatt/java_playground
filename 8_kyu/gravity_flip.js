let direction = 'L';
let testArray = [3, 2, 1, 2];

function flip_1(dir, arr) {
  if (dir === "L") {
    return arr.sort((a, b)=>b-a);
  } else if (dir === "R") {
    return arr.sort((a, b)=>a-b);
  }
}

flip = (d, a) => d === 'L' ? a.sort((a, b) => b - a) : a.sort((a, b) => a - b);
console.log(flip(direction, testArray));