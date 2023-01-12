// 4. Stwórz funkcję, która przyjmuje jako argument tablicę obiektów i zwróci ją posortowaną po wartości libraryID rosnąco. Np mając

const library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }]

function sortObjects(tableOfObjects) {
    let sorted = [];
    
    sorted = tableOfObjects.sort((a, b) => a.libraryID - b.libraryID)

    return sorted;
}

console.log(sortObjects(library));