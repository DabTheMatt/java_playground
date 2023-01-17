const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i * 2);
}

console.log(numbers);

let newNumbers = numbers.map(function(element) {
    return element / 3;
});

console.log(newNumbers);

