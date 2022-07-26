const HAMBURGER = {
    big: {
        price: 10,
        calories: 40,
    },

    small: {
        price: 5,
        calories: 20,
    },

    filling: {
        cheese: {
            price: 1,
            calories: 20
        },
        salat: {
            price: 2,
            calories: 5,
        },
        potato: {
            price: 1.5,
            calories: 10
        }
    },
    additions: {
        seasoning: {
            price: 1.5,
            calories: 0,
        },
        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
}

let price,addFillingPrice, addAdditionPrice, calories, addFillingCalories, addAdditonCalories = null


class Hamburger {
    constructor(type) {
        this.type = type
    }

    addFilling(...filling) {
        addFillingPrice = 0;
        addFillingCalories = 0;
        for(let key in HAMBURGER.filling) {
            filling.forEach((item) => {
                if(item === key){
                    addFillingPrice += HAMBURGER.filling[key].price
                    addFillingCalories += HAMBURGER.filling[key].calories
                } 
            })
        }
    }

    addAdditions(...additions){
        addAdditionPrice = 0;
        addAdditonCalories = 0;
        for(let key in HAMBURGER.additions) {
            additions.forEach((item) => {
                if(item === key){
                    addAdditionPrice += HAMBURGER.additions[key].price
                    addAdditonCalories += HAMBURGER.additions[key].calories
                }  
            })
            console.log(price);
        }
    }

    renderPrice() {
        price = 0;
        if(this.type === 'big') {
            price += HAMBURGER.big.price
        } else {
            price += HAMBURGER.small.price
        }
        return price + addFillingPrice + addAdditionPrice
    }

    renderCalories() {
        calories = 0;
        if(this.type === 'big') {
            calories += HAMBURGER.big.calories
        } else {
            calories += HAMBURGER.small.calories
        }
        return calories + addFillingCalories + addAdditonCalories;
    }

}


const orders = [
    {
        burger: 'big',
        fillings: ['potato' , 'salat' , 'salat'],
        additions: ''
    },
    {
        burger: 'small',
        fillings: ['potato' , 'potato' , 'potato'],
        additions: ''
    },
    {
        burger: 'big',
        fillings: ['potato' , 'potato' , 'potato', 'potato' , 'potato' , 'potato'],
        additions: ['mayonnaise', 'seasoning' ]
    },
    {
        burger: 'big',
        fillings: ['salat', 'salat', 'potato'],
        additions: ''
    },
    {
        burger: 'small',
        fillings: '',
        additions: ['mayonnaise', 'seasoning' ]
    },
    {
        burger: 'big',
        fillings: '',
        additions: ['mayonnaise', 'seasoning' ]
    },
]



let ordersNode = [];
orders.map((order, index) => {
    let newOrder = new Hamburger(order.burger);
    newOrder.addFilling(...order.fillings)
    newOrder.addAdditions(...order.additions)
    ordersNode.push(`
        <div class="order">
            <h3>Order number ${index + 1}</h3>
            <div>
                <p>Your price: ${newOrder.renderPrice()}$ </p>
                <p>Your calories: ${newOrder.renderCalories()} </p>
            </div>
        </div>
    `)

    return ordersNode;
})

document.write(`<div class="orders">${ordersNode.join("")}</div>`);
