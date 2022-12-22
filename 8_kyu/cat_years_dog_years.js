function humanYearsCatYearsDogYears_1 (humanYears) {
    if (humanYears === 1) {
        firstCatYear = 1 * 15;
        firstDogYear = 1 * 15;
        return [humanYears, firstCatYear, firstDogYear]; 
    } else if (humanYears === 2) {
        secondCatYear = (1 * 15) + (1 * 9);
        secondDogYear = (1 * 15) + (1 * 9);
        return [humanYears, secondCatYear, secondDogYear];
    } else if (humanYears > 2) {
        moreCatYears = (1 * 15) + (1 * 9) + ((humanYears - 2) * 4);
        moreDogYears = (1 * 15) + (1 * 9) + ((humanYears - 2) * 5);
        return [humanYears, moreCatYears, moreDogYears];
    }
}

// arrow function oneliner

humanYearsCatYearsDogYears = hy => hy === 1 ? [hy, 15, 15] : hy === 2 ? [hy, 24, 24] : [hy, (24 + ((hy - 2) * 4)), (24 + ((hy - 2) * 5))];

console.log(humanYearsCatYearsDogYears(10));