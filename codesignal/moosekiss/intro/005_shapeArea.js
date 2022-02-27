const solution = (n) => {
    let sum = 0;
    for(let i=1; i<n; i++) {
        sum = sum + (4 * i);
    }
    return sum + 1;
}
//1 2 3  4  5  6 
// 4 8 12 16 
//1 5 13 25 41 47

// 1-> 1, 2-> 1+(4*1), 3-> 5+(4*2), 4-> 13+(4*3)

const result = solution(5);
console.log(result);