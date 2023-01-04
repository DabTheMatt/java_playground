function rentalCarCost_1(d) {
    if (d >= 3 && d < 7) {
        return (d * 40) - 20; 
    } else if (d >= 7) {
        return (d * 40) - 50;
    } else {
        return d * 40;
    }
}

rentalCarCost = d => (d >= 3 && d < 7) ? (d * 40) - 20 : (d >= 7) ? (d * 40) - 50 : d * 40;

console.log(rentalCarCost(6));

// Solution from CodeWars

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
