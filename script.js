function main (a = 2, b = 3, c) { 
    if(typeof(c) === 'function') {
        return c(sum(a,b))
    } else {
        return sum(a,b)
    }
}


function sum (a, b) { 
    return a + b; 
}


let num1 = 5;
let num2 = 15;

console.log(main(num1,num2, function powSum (k){
    return Math.pow(k,2)
}));