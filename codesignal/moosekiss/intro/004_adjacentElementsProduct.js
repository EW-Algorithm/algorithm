const solution = (inputArray) => {
    let product = 0;
    for(let i=0; i <= inputArray.length; i++) {
        if(i == 0) product = inputArray[i] * inputArray[i+1];
        if(inputArray[i] * inputArray[i+1] > product) {
            product = inputArray[i] * inputArray[i+1];
        }
    }
    return product;
}