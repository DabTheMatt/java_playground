function min_1(a, b){
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    } else if (a === null && b === null) {
        return 0;
    } else if (a === null) {
        a = 0;
        return (a < b) ? a : b;
    } else if (b === null) {
        b = 0;
        return (a < b) ? a : b;
    }  else {
        return (a < b) ? a : b;
    }
}

// solution z codewars

function min(a, b){
    return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
  }
  
console.log(min(null, -2.5));