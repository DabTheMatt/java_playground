let array = [4, 6, 9];
let n = 3;

function index(array, n){
    if (n>=array.length) {
        return -1;
    } else {
        return Math.pow(array[n], n);
    }
  }

console.log(index(array, n));

index = (a, n) => n>=a.length ? -1 : Math.pow(a[n], n);

console.log(index(array, n));