let assignObjects = (obj1, obj2) =>  Object.assign(obj1,obj2);

console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));