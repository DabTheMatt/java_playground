// 1. Stwórz funkcję, która jako argument będzie przyjmować obiekt, stworzy nowy obiekt, w którym zamieni klucze z wartościami i zwróci ten nowo stworzony obiekt.
// Np. dla obiektu `{red: '#FF0000', green: '#00FF00', white: '#FFFFFF'}` wynikiem będzie obiekt: `{'#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white'}` - 2 pkt

let example = {
    red: '#FF0000',
    green: '#00FF00',
    white: '#FFFFFF'
    };

function reObject(input) {

    let keys = Object.keys(input);
    let values = Object.values(input);

    const output = {};

    values.forEach((element, index) => {
      output[element] = keys[index];
    });

    return output;
}

console.log(reObject(example));