function addLength(str) {
    let strArray = str.split(" ");
    let strArray2 = [];
    strArray.forEach(el => {
        strArray2.push(el + ' ' + el.length);
    });
    return strArray2;
}

console.log('answer', addLength('you will win'));

// solution from CodeWars

var addLength_2 = s => s.split(' ').map(x => x + ' ' + x.length);
