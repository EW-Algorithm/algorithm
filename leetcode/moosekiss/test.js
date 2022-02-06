/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {

    // 1
    const len = x.toString().length-1;
    let str = "";

    for(let i=len; i >= 0; i--) {
        str += x.toString().charAt(i);
    }

    // is palindrome ?
    return str == x.toString() ? true : false;
    

    // 2
    // const str = x.toString().split('').reverse().join('');
    // return str == x.toString() ? true : false;
    
};

const result = isPalindrome(121);
console.log(result);
