/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 const prefixCount = (words, pref) => {
    let cnt = 0;
    for(let i=0; i < words.length; i++) {
        if(words[i].slice(0, pref.length) == pref) {
            cnt++;
        }
    }
    return cnt;
    
};

const result = prefixCount(["pay","attention","practice","attend"], "at");
console.log(result);