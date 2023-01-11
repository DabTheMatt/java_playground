// 3. Stwórz funkcję, która w argumencie przyjmować będzie string, a zwracać będzie pierwszy niepowtarzający się znak tego stringa. Np. dla argumentu "abacabad" funkcja ma zwrócić "c".
// Mogą przydać się funkcje indexOf i lastIndexOf. - 2 pkt.

let example = 'abacabad'

function firestUnique(string) {

    // function onlyUnique(value, index, self) {
    //     return self.indexOf(value) === index;
    //   }

    string = Array.from(string);
    
    // let unique = string.filter(function(value, index, self) {

    // console.log('value', value);
    // console.log('index', index);
    // console.log('self', self);

    // console.log(self.indexOf(value));

    // return self.indexOf(value) === index;

    
    // });

    let unique2 = [...new Set(string)];
      
    return unique2[0];
}

console.log(firestUnique(example));