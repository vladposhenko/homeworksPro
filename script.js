let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];



Array.prototype.herosRender = function(folder) {
    let tRS = [];
    this.map((product) => {
        return(
            tRS.push(
                `
            <tr>
                <td style="padding:20px;">${product.name}</td>
                <td style="padding:20px;">
                    <img width="50" src="images/${folder}/${product.name.toLowerCase().replaceAll(" ", "")}.svg">
                </td>
            </tr>
            `
            )
        )
    })
            
    document.write(`<table style="border: 3px solid; margin: 20px auto;">
    <thead>
			<tr>
				<th style="padding:20px;">Name</th>
				<th style="padding:20px;">Icon</th>
			</tr>
	</thead>
    <tbody>
        ${tRS.join("")}
    </tbody>
    </table>`);
}


dcHeroes.herosRender('dc')
marvelHeroes.herosRender('marvel')



// console.log(marvelHeroes.herosRender('dc'));



