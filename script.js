// С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение
// Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение
// Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение
// С помощью alert или console.log выводим финальный результат действия (+ - / *).
do{
    operation = prompt("Выберите операцию (+ - / *)")
}while(operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" )

do{
    countOfOperands = prompt("Сколько чисел Вы хотите использовать?")
}while(countOfOperands >= 7 || countOfOperands <= 1 || isNaN(countOfOperands))


operand = [];
result = 0;
for(i = 1; i <= countOfOperands; i++){
    operand[i] = prompt(`Введите число ${i}`);

}


result = 0;
startDefine = operand[1];
console.log(startDefine);


// ВАРИАНТ РЕШЕНИЯ ЧЕРЕЗ IF
if(operation === "*"){
    result++;
    for(j = 1; j < operand.length;j++){
        result *=  +operand[j];
    }
    alert(`Результат операции: ${result}`)
}else if (operation === "+") {
    for(j = 1; j < operand.length;j++){
        result += +operand[j];
    }
    alert(`Результат операции: ${result}`)
}else if(operation === "-") {
    for(j = 1; j < operand.length;j++){
        result = +operand[1] - +operand[j];
    }
    alert(`Результат операции: ${result}`)
}else if (operation === "/") {
    result = startDefine;
    for(j = 2; j < operand.length;j++){
        if(+operand[j] === 0) {
            result = "на ноль делить нельзя";
        }
        result /= operand[j]; 
    }
    alert(`Результат операции: ${result}`)
}else {
    alert(`You have some error,try again`)
}

// ВАРИАНТ РЕШЕНИЯ ЧЕРЕЗ SWITCH

// switch(operation) {
//     case  "*":
//         result++;
//         for(j = 1; j < operand.length;j++){
//             result *=  +operand[j];
//         }
//         alert(`Результат операции: ${result}`);
//         break;  
//     case "+":
//         for(j = 1; j < operand.length;j++){
//             result += +operand[j];
//         }
//         alert(`Результат операции: ${result}`);
//         break;
//     case "-":
//         for(j = 1; j < operand.length;j++){
//             result = +operand[1] - +operand[j];
           
//         }
//         alert(`Результат операции: ${result}`);
//         break;
//     case "/":
//         result = startDefine;
//         for(j = 2; j < operand.length;j++){
//             if(+operand[j] === 0) {
//                 result = "на ноль делить нельзя";
//             }
//             result /= operand[j]; 
//         }
//         alert(`Результат операции: ${result}`);
//         break;
// }
