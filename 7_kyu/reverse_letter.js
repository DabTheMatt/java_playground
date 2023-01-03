function reverseLetter(str) {

    let strToArr = Array.from(str);
    let tempArr = [];

    for (i=0; i<strToArr.length; i++) {
        if ((/[a-z]/i).test(strToArr[i])) {
            tempArr.push( strToArr[i]);
        }
    }
    return tempArr.reverse().join("");
}

console.log(reverseLetter('krish21an'));

// solution from CodeWars

reverseLetter2=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');