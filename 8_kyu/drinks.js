function peopleWithAgeDrink2(old) {

    if (old >= 21) {
        return 'drink whisky'
    } else if (old < 21 && old >= 18) {
        return 'drink beer'
    } else if (old < 18 && old >= 14) {
        return 'drink coke'
    } else if (old < 14) {
        return 'drink toddy'
    }

};

peopleWithAgeDrink = o => o >=21 ? 'drink whisky' : o < 21 && o >= 18 ? 'drink beer' : o < 18 && o >= 14 ? 'drink coke' : 'drink toddy';


console.log(peopleWithAgeDrink(22));