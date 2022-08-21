const userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
}


const bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

function getCurrency (curren) {
    let result
    for(key in userData) {
        if(curren === key)  result = key;
      }
    return result
}

function getCurrencyMoney (curren, data) {
    let result
    for(key in data) {
        if(curren === key)  result = data[key];
      }
    return result
}


let balance = confirm("Посмотреть баланс на карте?")

function getMoney (userData, bankData ) {
    return new Promise(function (resolve, rejcet){
        if(balance) resolve(userData)
        rejcet({userData: userData, bankData: bankData})
    }) 
}



let currency, check = ''
getMoney(userData, bankData)
    .then((data) => {
            do {
                currency = prompt("Введите название валюты в формате USD, EUR, UAH, BIF, AOA")
                check = getCurrency(currency);
            }while(currency != check)
            console.log(`Баланс составляет: ${getCurrencyMoney(currency, data)} ${currency}`);
            console.log("Спасибо, хорошего дня!  😊");
    })
    .catch((data) => {
        do {
            currency = prompt("Введите название валюты в формате USD, EUR, UAH, BIF, AOA")
            check = getCurrency(currency);
        }while(currency != check)
        if(data.bankData[currency] === undefined || data.bankData[currency].max === 0) return console.log('Даной валюты нету в банке на даный момент');
        let suma = prompt(`Введите сумму для снятия - min ${data.bankData[currency].min}, max - ${data.bankData[currency].max}`)
        if(suma > data.bankData[currency].max) {
            console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия:${data.bankData[currency].max}`);
        } else if (suma < data.bankData[currency].min ) {
            console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${data.bankData[currency].min}`);
        } else if (suma > data.userData[currency]) {
            console.log(`У вас недостаточно средств для снятия денег, ваш баланс ${data.userData[currency]}`);
        } else {
            console.log(`Вот ваши денежки ${suma} ${currency} ${data.bankData[currency].img}`);
            console.log('Спасибо, хорошего дня!  😊');
        }
    })



