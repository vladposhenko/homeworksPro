// Запрашиваем данные у пользователя

firstQuestion  = prompt("Cколько будет 2+2?");
secondQuestion = prompt("Солнце встает на востоке?");
thirdQuestion  = prompt("Сколько будет 5 / 0?");
fourthQuestion = prompt("Какого цвета небо?");
fifthQuestion  = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?");

// Создаем переменные для работы с данными

points = 0;
wrongAnswer = 0;
correctAnswer = 0;

// Проверяем ответы на вопросы
if (firstQuestion == 4) {
    points +=10;
    correctAnswer++;
} else {
    points += 0;
    wrongAnswer++;
}

if (secondQuestion == "да" || secondQuestion == "Да") {
    points += 10;
    correctAnswer++;
} else {
    points += 0
    wrongAnswer++;
}

if (thirdQuestion == "не делится" || thirdQuestion == "нисколько" || thirdQuestion == null) {
    points += 10;
    correctAnswer++;
} else {
    points += 0
    wrongAnswer++;
}

if (fourthQuestion == "голубого" || fourthQuestion == "Голубого") {
    points += 10;
    correctAnswer++;
} else {
    points += 0
    wrongAnswer++;
}

if (fifthQuestion == 42) {
    points += 10;
    correctAnswer++;
} else {
    points += 0
    wrongAnswer++;
}

// Выводим данные 
alert(`Ты набрал ${points} из 50`)


document.write(`
                <p> Ты набрал(-а) <b>${points}</b> баллов из <b>50</b></p>
                <p> Количество правильных ответов:   <b>${correctAnswer}</b> </p>
                <p> Количество неправильных ответов: <b>${wrongAnswer}</b>   </p>
                `)

