/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = (a, b) => {
    // 1010 (10)
    // 1011 (11)
    //10101 (21)

    // [ ][1][1][0][1]
    // [1][0][0][1][0]

    

    let arr1 = [], arr2 = [], sum = [];
    arr1.push(...a);
    arr2.push(...b);
    let arr1Len = arr1.length-1;
    let arr2Len = arr2.length-1;
    //console.log(arr1Len);
    // let len = Math.max(arr1Len, arr2Len);
    let sumLen = len+1;

    // [ ][1][1][0][1]
    // [ ][1][0][1][1]
    // [1][0][0][1][0]

    while(1) {
        if(arr1[arr1Len] + arr2[arr2Len] == 2) {
            sum[sumLen] = 0;
            sum[sumLen-1] = 1;
        } else {
            sum[0] = arr1[arr1Len] + arr2[arr2Len];
        }
    
    }
    
    

    // binary to decimal -> add -> decimal to binary


    // console.log(a/1000);
    // console.log(a%100);
    // console.log(a%1000);
    // console.log(a%10000);

};

// let a = "11", b = "1";
let a = "1010", b = "1011";
const result = addBinary(a, b);
// console.log(result);