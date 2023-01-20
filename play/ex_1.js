// 1. Stwórz funkcję, która jako argument będzie przyjmować obiekt, stworzy nowy obiekt, w którym zamieni klucze z wartościami i zwróci ten nowo stworzony obiekt.
// Np. dla obiektu `{red: '#FF0000', green: '#00FF00', white: '#FFFFFF'}` wynikiem będzie obiekt: `{'#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white'}` - 2 pkt

const input = {
    red: '#FF0000',
    green: '#00FF00',
    white: '#FFFFFF'
}

console.log(input);

console.log(Object.keys(input));
console.log(Object.values(input));

function reObject(input) {

    let keys = Object.keys(input);
    let values = Object.values(input);

    console.log('keys', keys);

    const output = {};

    values.forEach((value, index) => {
      output[value] = keys[index];
    });

    return output;
}

console.log(reObject(input));

