/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {

    let currVal = '';
    let nextVal = '';
    let pairVal = '';    
    let nextPairVal = '';
    let bracketArr = [];
    
    for(let i=0; i<=s.length-1; i++) {
        currVal = s.charAt(i);
        nextVal = s.charAt(i+1);
        pairVal = pairBrackets(currVal); // 'C'면 close bracket
        nextPairVal = pairBrackets(nextVal);
        
        if(!['(', ')', '{', '}', '[', ']'].includes(currVal) || s.length <= 1) {
            return false;
        }

        // if(nextVal == '') {
        //     nextPairVal = '';
        // } 

        console.log("현재 문자: " + currVal + " , 현재문자에대한 pair: " + pairVal);
        console.log("다음 문자: " + nextVal + " , 다음문자에대한 pair: " + nextPairVal);

        if(i == 0 && pairVal == 'C') {  // 처음 문자 close bracket 일시 false
            return false;
        }

        // 현재 문자가 close bracket 이고 배열에 저장된 값이 있으면
        // 배열에서 제일 나중 값 순서대로 pop 하고 
        if(pairVal == 'C' && bracketArr != null) {
            let arrVal = pairBrackets(bracketArr.pop());
            console.log("배열 최근 문자 pair: " + arrVal);
            console.log("현재 문자: " + currVal);
            if(arrVal != currVal) {
                return false;
            }
        }

        // 다음문자가 close bracket 일때
        if(pairVal != 'C') {
            if(nextPairVal == 'C') {
                if(pairVal != nextVal) {
                    console.log("괄호 pair 안맞음")
                    return false;
                } else {
                    i++;    // pair가 맞으면 i++
                }
            } else {
                bracketArr.push(currVal);
            }
        }
        

        console.log("----------------------- 현재 배열안에 값: " + bracketArr);
        
    }

    return bracketArr.length == 0 ? true : false;
};

const pairBrackets = function(s) {

    let setVal = '';
    switch(s) {
        case '(':
            setVal = ')';
        break;
        case '{':
            setVal = '}';
        break;
        case '[':
            setVal = ']';
        break;
        default:
            setVal = 'C';   // close bracket
        break;
    }
    return setVal;
}

// const result = isValid("()");
// const result = isValid("()[]{}");
// const result = isValid("(]");
// const result = isValid("{[]}");
const result = isValid("{[()]}");
// const result = isValid("()");


console.log(result);