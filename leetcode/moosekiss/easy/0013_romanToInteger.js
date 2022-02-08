/**
 * @param {string} s
 * @return {number}
 */

/*Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900. */
const romanToInt = function(s) {
    let resVal = 0;
    let resNum = 0;

    for(let i=0; i<=s.length; i++) {

        if(s.charAt(i) == "I") {
            if(s.charAt(i+1) == "V") {
                resVal = symbolToVal("IV");
                i++;
            } else if(s.charAt(i+1) == "X") {
                resVal = symbolToVal("IX");
                i++;
            } else {
                resVal = symbolToVal(s.charAt(i)); 
            }
        } else if(s.charAt(i) == "X") {
            if(s.charAt(i+1) == "L") {
                resVal = symbolToVal("XL");
                i++;
            } else if(s.charAt(i+1) == "C") {
                resVal = symbolToVal("XC");
                i++;
            } else {
                resVal = symbolToVal(s.charAt(i)); 
            }
        } else if(s.charAt(i) == "C") {
            if(s.charAt(i+1) == "D") {
                resVal = symbolToVal("CD");
                i++;
            } else if(s.charAt(i+1) == "M") {
                resVal = symbolToVal("CM");
                i++;
            } else {
                resVal = symbolToVal(s.charAt(i)); 
            }
        } else {
            resVal = symbolToVal(s.charAt(i));
        }

        resNum += resVal;
    }
    
    return resNum;

};

const symbolToVal = function(s) {

    let value = 0;
    switch(s) {
        case "I":
            value = 1;
        break;
        case "V":
            value = 5;
        break;
        case "X":
            value = 10;
        break;
        case "L":
            value = 50;
        break;
        case "C":
            value = 100;
        break;
        case "D":
            value = 500;
        break;
        case "M":
            value = 1000;
        break;
        case "IV":
            value = 4;
        break;
        case "IX":
            value = 9;
        break;
        case "XL":
            value = 40;
        break;
        case "XC":
            value = 90;
        break;
        case "CD":
            value = 400;
        break;
        case "CM":
            value = 900;
        break;
        default:
            value = 0;
        break;
    }
    return value;
}


// 
// const result = romanToInt("IXIVIM");
const result = romanToInt("III");
// const result = romanToInt("LVIII");
// const result = romanToInt("MCMXCIV");

console.log(result);