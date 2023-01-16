const strings = ['one', 'two', 'three', 'four', 'five', 'six'];
const numbers = [1, 4, 6, 8, 9, 123, 5];
//               0      1       2   

console.log(strings[0][0]);

const newNumbers = numbers.map(function(element) {
    return element + 2;
})

const newStrings = strings.map(function(element, index) {
    return element[0].toUpperCase() + ' ' + index;
})






console.log(newN);
// console.log(newStrings);

// console.log(strings[2]);
// console.log(strings[strings.length - 1]);

// for (let i = 0; i < strings.length; i++) {
//     console.log(strings[i])
// }

// let newArray = [];

// newArray.push(56); // dodaje na końcu
// newArray.push(376); 

// newArray.pop(123); // usuwa na końcu
// newArray.shift(); // usuwa na początku
// newArray.unshift(234, 234); //dodaje na początku

// console.log(newArray);

