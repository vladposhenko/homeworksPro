cards = [];
suits = ["spades", "clubs" , "diamonds" , "hearts"];
pictures = ["jack" , "queen" , "king", "jack"];
suitsName = ["J", "Q" ,"K", "T"];


for(i = 2,p = 0; i <= 14; i++){
    if(i > 10 && i < 14){
        for(j = 0; j < 4; j++){
            cards.push(`<div class="card card--person">
			<div class="card__info">${suitsName[p]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
			<img class="person" src="images/${pictures[p]}.svg" alt="${suits[j]}">
			<div class="card__info">${suitsName[p]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
		</div>`)
    }
    p++;
    }else if(i === 14) {
        for(j = 0; j < 4; j++){
            cards.push(`<div class="card card--person">
			<div class="card__info">${suitsName[p]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
			<img class="person" src="images/${suits[j]}.svg" alt="${suits[j]}">
			<div class="card__info">${suitsName[p]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
		</div>`)
        }
    } else {
        for(j = 0; j < 4; j++){
            cards.push(`<div class="card">
                    <div class="card__info">${i}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                    <div class="card__info">${i}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
            </div>`)
        }
    }
}

document.write(`<div class="wrapper">${cards.join("")}</div>`);

