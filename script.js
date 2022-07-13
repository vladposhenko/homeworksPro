let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
]


function Product (category,type,price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = () => {
        return (
            `
            <tr>
                <td><img src="images/${category}/${type}.svg" alt="${type}" width="50" height="50"></td>
                <td>${type}</td>
                <td class="price">${price} USD</td>
            </tr>
            `
        )
    }
}




let kitchenWrapper = kitchenProducts.map(
    function (arr) {
        return new Product ('kitchen',arr.type, arr.price).render()
    }
).join('')


let deviceWrapper = devicesProducts.map(
    function (arr) {
        return new Product ('devices',arr.type, arr.price.join(' - ')).render()
    }
).join('')


let cosmeticsWrapper = cosmeticsProducts.map(
    function (arr) {
        return new Product ('cosmetics',arr.type, arr.price).render()
    }
).join('')


document.write(`
    <table class="table">
        <thead class="thead">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
            ${kitchenWrapper}
            ${deviceWrapper}
            ${cosmeticsWrapper}
        </tbody>
    </table>
`)

