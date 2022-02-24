const solution = (year) => {
    if(year % 100 == 0){
        return year / 100;
    } else {
        return Math.floor(year / 100+1);
    }
};

// 1~100
// 101~200
// 201~300

// year = 1;
year = 1905;
// year = 1700;
const result = solution(year);
console.log(result);