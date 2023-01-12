let exampleArray = [1, 2, 3, 4, 5, 7, 84, 5, 2];
let secondArray = [];
let thirdArray = [];
   // index         0  1  2  3  4  5  6   7  8    
// for (let i = 0; i < exampleArray.length; i++) {
//     console.log(exampleArray[i]);
// }

for (let i = 0; i < exampleArray.length; i++) {
    if (exampleArray[i] % 2 != 0) {
        secondArray.push(exampleArray[i]);
    } else {
        thirdArray.push(exampleArray[i]);
    }
}

console.log(secondArray);
console.log(thirdArray);

// for (let i = 0; i < exampleArray.length; i++) {
//     console.log(exampleArray[(exampleArray.length - 1) - i])
// }

// let reveseArray = exampleArray.reverse();
// console.log(reveseArray);

// for (let i = 0; i < exampleArray.length; i++) {
//     console.log(reveseArray[i]);
// }

// for (let i = 0; i < exampleArray.length; i++) {
//     if (exampleArray[i] < 7) {
//         console.log(exampleArray[i]);
//     }
// }

// for (let i = 0; i < exampleArray.length; i++) {
//     if (exampleArray[i] > 5) {
//         console.log(exampleArray[i])
//     }
// }