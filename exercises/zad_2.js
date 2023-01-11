// 2. Stwórz funkcję podającą liczbę dzieci w poszczególnych klasach szkolnych na podstawie wieku. Funkcja przyjmuje tablicę z numberami (wiek dziecka), a ma zwrócić obiekt, w którym kluczami są nazwy szkolnych klas, a wartościami liczba dzieci spełniająca warunek wiekowy dla danej klasy.

// Wg wzoru:
// ```
// Zerówka -> 5 lat
// 1 klasa -> 6 lat
// 2 klasa -> 7 lat
// 3 klasa -> 8 lat
// 4 klasa -> 9 lat
// ```

// Czyli np. 
// ```
// function selekcjaSzkolna([5, 7, 4, 9, 10, 5, 15, 9, 5]) -> { 
//   'Zerówka': 3,
//   '1 klasa': 0,
//   '2 klasa': 1, 
//   '3 klasa': 0, 
//   '4 klasa': 2,
// }
// ```

// Jeżeli w tablicy pojawia się wiek dziecka zbyt duży lub zbyt mały, aby przyporządkować do którejś klasy, to po prostu pomijamy ten number. - 3 pkt

let example = [5, 7, 4, 9, 10, 5, 15, 9, 5];

function sortKids(kids) {
    let sorted = [];

    let zerowka = [];
    let pierwszaKlasa = [];
    let drugaKlasa = [];
    let trzeciaKlasa = [];
    let czwartaKlasa = [];

    for (let i = 0; i < kids.length; i++) {
        console.log(kids[i]);
        if (kids[i] === 5) {
            zerowka.push(kids[i]);
        }
    }

    console.log('z', zerowka)
    return sorted;
}

console.log(sortKids(example));