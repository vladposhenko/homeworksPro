// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому элементу копируемого массива.

function copy(arr, func){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(func && typeof arr[i] === 'number'){
            newArr[i] = func(arr[i]);
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

let list = [3,8,10, "mamont"];
let newList = copy(list, function(value){ return value*10; });


console.log(newList);