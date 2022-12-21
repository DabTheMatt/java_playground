let testArray = [1,2,3,4,5,6,7,8];

function firstNonConsecutive (arr) {
    let firstNonConsecutive;
    for (i=0; i<arr.length-1; i++) {
        if (arr[i+1] - 1 != arr[i]) {
            return arr[i+1];
        }
    }
    return null;
}

console.log(firstNonConsecutive(testArray));