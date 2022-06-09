do{
    start = parseInt(prompt("Введите a:"));

}while(isNaN(start) || start < 1);

do{
    finish = parseInt(prompt(`Введите b которе больше ${start}:`));

}while(start >= finish || isNaN(finish));

do{
    h = parseInt(prompt(`Введите h :`));

}while(isNan(h));




for (factSum = 0;start <= finish;start+=h) {
    factorial = 1; 
    console.log(`Факториал числа ${start}:`);
    for (i = 1; i <= start;i++) {
        factorial *= i;
    }
    factSum += factorial;
    console.log(factorial);
    console.log(`Сумма факториалов ${factSum}`);
}


