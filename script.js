function biggerArray(arr1,arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        if(typeof arr1[i] === 'number') {
            sum1 += arr1[i];
        }  
    }

    for (let i = 0; i < arr2.length; i++) {
        if(typeof arr2[i] === 'number') {
            sum2 += arr2[i];
        }  
    }

    return sum1 > sum2 ? arr1 : arr2;
}

console.log(biggerArray([1,2,"hello",true,4,8],[5,false,undefined,6,30]));
