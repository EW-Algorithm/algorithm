const solution = (inputString) => {
    for(let i=0; i<inputString.length/2; i++) {
        if(inputString[i] !== inputString[inputString.length-1-i]) {
            return false;
        }
    }
    return true;
}

let str = "abba"
const result = solution(str);
console.log(result);