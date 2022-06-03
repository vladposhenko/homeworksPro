//Запрашиваем данные у пользователя
firstName = prompt("Введите свое имя:").trim().replace(/\s+/g, '');
lastName = prompt("Введите свою фамилию:").trim().replace(/\s+/g, '');
email = prompt("Введите свой email:").trim().toLowerCase().replace(/\s+/g, '');
birthdayDate = prompt("Введите дату рождения:").trim().replace(/\s+/g, '');

// Вычисляем возраст пользователя
today = new Date();
year = today.getFullYear();

// Проверяем валидность даты рождения
if (birthdayDate.length != 4 || birthdayDate < 1900) {
    age = "Не правильно введенный год рождения";
} else  {
    age = year - birthdayDate;
}

// Проверяем валидность email
if (email.indexOf('@') == -1) {
    email = `Не правильно введенный email <i>${email}</i> (символ @ не найдено)`;
} else if(!email.indexOf('@')) {
    email = `Не правильно введенный email <i>${email}</i> (символ @ найдено в начале)`
} else if (email.indexOf('@') == email.length-1) {
    email = `Не правильно введенный email <i>${email}</i> (символ @ найдено в конце)`
}

//Выводим данные о пользователе в HTML файл
document.write(`
                <h1>Информация о пользователе:</h1>
                <ul>
                    <li>Имя Фамилия: <b>${firstName}</b>  <b>${lastName}</b> </li>
                    <li>Email: <b>${email}</b></li>
                    <li>Возраст: <b>${age}</b></li>
                </ul>
                `)

