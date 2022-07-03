const obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30,
    }, 
    foo2: { 
        k: 23, 
        p: 13,
        s: {
            d:15,
            k:10,
        }
    } 
}


function createObj () {
    let newObj = {};
    return function convert(obj) {
        for(let key in obj) {
            if(typeof obj[key] === 'object'){
                convert(obj[key])
            } else {
                newObj[key] = obj[key]
            }   
        }
        return newObj
    }
}


let result = createObj();

console.log(result(obj));


