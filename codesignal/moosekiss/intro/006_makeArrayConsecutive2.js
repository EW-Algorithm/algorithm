const solution = (statues) => {
    // min, max값 구하고 includes
    const minNum = Math.min(...statues);
    const maxNum = Math.max(...statues);
    let cnt = 0;
    
    for(let i=minNum; i<=maxNum; i++) {
        if(!statues.includes(i)) {
            cnt++;
        }
    }

    return cnt

}


// const statues = [1, 2, 4, 9];
// const statues = [6, 2, 3, 8];
const statues = [6, 3];
const result = solution(statues);
console.log(result);