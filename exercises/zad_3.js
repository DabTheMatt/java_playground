// 3. Stwórz funkcję, która w argumencie przyjmować będzie string, a zwracać będzie pierwszy niepowtarzający się znak tego stringa. Np. dla argumentu "abacabad" funkcja ma zwrócić "c".
// Mogą przydać się funkcje indexOf i lastIndexOf. - 2 pkt.

let example = 'abacabad'

// function firestUnique(string) {

//     function onlyUnique(value, index, self) {
//         return self.indexOf(value) === index;
//       }

//     string = Array.from(string);
    
//     let unique = string.filter(function(value, index, self) {

//     return unique;
//     });

// }
// console.log(onlyUnique(example));

const arr = [1, 1, 4, 2, 2, 2, 3, 1];
const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
console.log(result);
