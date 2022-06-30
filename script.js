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

let allTasks = monday.concat(tuesday)
    .map(
        function (task) {
            task[1] /= 60
            return task
        }
)
    .filter(
        function(task) {
            return task[1] > 2;
        }
)

    .map(
        function (task) {
            let salary = task[1] * amount;
            task.push(salary)
            return task
        }
    )
    .map(
        function (task) {
            return document.write(`
             <div style="background-color: lime;width: 350px; padding: 20px;margin-top: 20px;margin-left: 37%; ">
                   <p style="">Task name: ${task[0]}</p>
                   <p style="">Taks duration: ${task[1]}</p>
                   <p style="">Task amount: ${task[2]}$</p>
             </div>
             `)
        }
    )




