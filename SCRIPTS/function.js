let testArray = [1, 2, 3];
let testArray1 = [2, 3, 4];
let testArray2 = [3, 4, 5, 6];
let testArray3 = [4, 5, 6, 7];
let testArray4 = [1, 5, 6, 7];
let testArray5 = [4, 2, 4, 5];


const solution = (A) => {
    A = A.filter(x => x >= 1).sort((a, b) => a - b);
    
    let x = 1;

    for (let i = 0; i < A.length ; i++) {
        if (x < A[i]) {
            return x
        }
        x = A[i] + 1
    }
    return x
}

console.log(solution(testArray))

// console.log(`The number not in the array is: ${solution(testArray)}`);

// console.log(`The minimum value is: ${solution(testArray)}`);
// console.log(`The minimum value is: ${solution(testArray1)}`);
// console.log(`The minimum value is: ${solution(testArray2)}`);
// console.log(`The minimum value is: ${solution(testArray3)}`);
// console.log(`The minimum value is: ${solution(testArray4)}`);
// console.log(`The minimum value is: ${solution(testArray5)}`);