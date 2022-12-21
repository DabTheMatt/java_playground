// problem collatz'a

function hotpo(n){
    let counter = 0;
    if(n === 0) return 0;

    while (n != 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        console.log('n in while', n);
        counter += 1;
    }
    return counter;
}

console.log(`number of steps :`, hotpo(1));

const hotpo2 = n => n < 2 ? 0 : hotpo2(n % 2 ? 3 * n + 1 : n / 2) + 1;

console.log(hotpo2(5));

addpo = n => n >= 100 ? `done ${n}` : addpo(n+1)+'d';
console.log(addpo(5));