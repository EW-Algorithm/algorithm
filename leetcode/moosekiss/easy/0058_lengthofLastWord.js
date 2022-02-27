
/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = (s) => {
    let part = s.split(" ");
    // console.log(part);
    // const test = part.filter(part => part.length > 3);
    const rmvSpce = part.filter(part => part.replace('', ''));

    return rmvSpce[rmvSpce.length-1].length;
}

//const result = lengthOfLastWord("   fly me   to   the moon  ");
const result = lengthOfLastWord("luffy is still joyboy");

console.log(result);