let amount = 100;
let monday = [
    ['Write a tutorial',180],
    ['Some web development',120]
];
let tuesday = [
    ['Keep writing that tutorial',240],
    ['Some more web development',360],
    ['A whole lot of nothing',240]
];

let someArray = monday.concat(tuesday);

console.log(someArray);
let anotherArray = []
someArray.filter( (task) => {
    task[1] /= 60;
    if (task[1] > 2) anotherArray.push(task)
    return anotherArray;
})

anotherArray.forEach((task) => {
    let salary = task[1] * amount;
    task.push(salary)
})

anotherArray.map((task) => {
    return document.write(`
        <div style="background-color: aqua;width: 350px; padding: 20px;margin-top: 20px; ">
          <p style="">Task name:${task[0]}</p>
          <p style="">Taks duration:${task[1]}</p>
          <p style="">Task amount:${task[2]}$</p>
          <button id="done">Done</button>
        </div>   
    `)

})




