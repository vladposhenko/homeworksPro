const data1 = {
    k: 2,
    b: 20,
    c: 30,
}

const data2 = {
    m: 2,
    b: 10,
    c: 52,
}

let assignObjects = (obj1, obj2) =>  Object.assign(obj1,obj2);

console.log(assignObjects(data1,data2));