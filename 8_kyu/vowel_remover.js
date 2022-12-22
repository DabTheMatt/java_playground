let testString = 'how are you today?';

function shortcut_1 (string) {
    let testArray = Array.from(string);
    let noVowelArray = testArray.filter(el => el != 'a' && el != 'e' && el != 'i' && el != 'o' && el != 'u');
    return noVowelArray.join(""); 
}

console.log(shortcut(testString));

shortcut = string => Array.from(string).filter(el => el != 'a' && el != 'e' && el != 'i' && el != 'o' && el != 'u').join('');

console.log(shortcut2(testString));

// nie moje

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}