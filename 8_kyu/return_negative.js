function makeNegative2(num) {
    if (num === 0) {
        return 0
    } else {
    return -(Math.abs(num)); }
  }

  console.log(makeNegative2(0));

makeNegative = n => n === 0 ? 0 : -(Math.abs(n));