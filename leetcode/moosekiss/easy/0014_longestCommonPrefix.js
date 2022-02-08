/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    let tmpStr = "";    // 임시값
    let tmpResStr = ""; // 임시 결과값
    let commonStr = ""; // 최정 리턴값

    // 모든값에 대한 공통값을 뽑아내는것이므로 앞단어가 기준이되면 됨.
    // 그래서 첫번째 for문 기준은 배열 첫번째 단어(strs[0]) 길이
    
    // strs[0].charAt(0)
    // strs[1].charAt(0)
    // strs[2].charAt(0)

    // strs[0].charAt(1)
    // strs[1].charAt(1)
    // strs[2].charAt(1)

    // strs[0].charAt(2)
    // strs[1].charAt(2)
    // strs[2].charAt(2)

    // 이런식으로 비교를 하면 되니 
    // 두번째 for문 j는 배열의 단어 길이가 기준
    for(let i=0; i<=strs[0].length-1; i++) {
        for(let j=0; j<=strs.length-1; j++) {

            if(tmpStr == "") {
                tmpStr = strs[j].charAt(i);
            }

            if(strs[j].charAt(i) != tmpStr) {
                return commonStr;
            } else {
                tmpResStr = tmpStr;
            }
        }
        commonStr += tmpResStr;
        tmpStr = "";
    }
    return commonStr;
    
};

 const resStr = longestCommonPrefix(["flower","flow","flight"]);
// const resStr = longestCommonPrefix(["dog","racecar","car"]);
// const resStr = longestCommonPrefix(["a"]);
console.log(resStr);

    