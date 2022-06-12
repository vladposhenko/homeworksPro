// Создаем данные в массивах
vegetables = ["cabbage","avocado","tomato"];
fruits = ["grapes","rassbery","coconut"];

priceOfVegetables = [8,30,10];
priceOfFruits = [20,25,50];

// Запрашиваем данные у пользователя
do{
    period = prompt('Enter period of the year(winter or summer):').replace(/\s+/g, "").toLowerCase();
}while(period !== "winter" && period !== "summer")

do{
    category = prompt('Enter category(vegetables or fruits):').replace(/\s+/g, "").toLowerCase();
}while(category !== "vegetables" && category !== "fruits")


// Запрашиваем вид товара и считаем сумму


if (category === "vegetables") {
    do{
        item =  prompt("Enter the name of item(cabbage or avocado or tomato):").replace(/\s+/g, "").toLowerCase();
    }while(item !== vegetables[0] && item !== vegetables[1] && item !== vegetables[2])
    for(i = 0; i < vegetables.length; i++){
        switch(item) {
            case vegetables[0]:
                price = priceOfVegetables[0];
                img = "images/cabbage.png"
                break;
            case vegetables[1]:
                price = priceOfVegetables[1];
                img = "images/avocado.png";
                break;
            case vegetables[2]:
                price = priceOfVegetables[2];
                img = "images/tomato.png";
                break;
        }
    }   
} else if (category === "fruits") {
    do{
        item =  prompt("Enter the name of item(grapes or rassbery or coconut):").replace(/\s+/g, "").toLowerCase();
    }while(item !== "grapes" && item !== "rassbery" && item !== "coconut")

    for(i = 0; i < fruits.length; i++){
        switch(item) {
            case fruits[0]:
                price = priceOfFruits[0];
                img = "images/grapes.png";
                break;
            case fruits[1]:
                price = priceOfFruits[1]
                img = "images/rassbery.png";
                break;
            case fruits[2]:
                price = priceOfFruits[2];
                img = "images/coconut.png";
                break;
        }
    }

}

do{
    count = +prompt("Enter count of the item:")
}while(count < 1 || isNaN(count))

finalSum = 0;
finalSum += price;
finalSum *=count;

period === "winter" ? finalSum *=2 : finalSum *= 0.8;


answers = [item,count,period,category,finalSum]

// Выводим данные

document.write(`
    <div class="product" align="center">
        <img src=${img} alt="cabbage" width="100" height="100">
        <p>Selected product: <b>${answers[0]}</b></p>
        <p>Count of ${item}s: <b>${answers[1]}</b></p>
        <p>Selected period: <b>${answers[2]}</b></p>
        <p>Selected category: <b>${answers[3]}</b></p>
        <p>Final sum: <b>${answers[4]}UAH</b></p>
    </div>
`)


