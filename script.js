sports = [
	['skier','⛷',],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winter_sports = sports.slice(0,5);
summer_sports = sports.slice(5,11);


fruits = winter_sports.splice(2,1);
fruits = fruits.concat(summer_sports.splice(2,2)) 


console.log('***WINTER SPORTS***');
for(i = 0; i < winter_sports.length; i++){
    for(j = 0; j < winter_sports[i].length; j++){
        console.log(`${winter_sports[i][j+1]}: ${winter_sports[i][j]}`);
        break;
    }
}


console.log('***SUMMER SPORTS***');
for(i = 0; i < summer_sports.length; i++){
    for(j = 0; j < summer_sports[i].length; j++){
        console.log(`${summer_sports[i][j+1]}:  ${summer_sports[i][j]}`);
        break;
    }
}



console.log('***FRUITS***');
for(i = 0; i < fruits.length; i++){
    for(j = 0; j < fruits[i].length; j++){
        console.log(`${fruits[i][j+1]}:  ${fruits[i][j]}`);
        break;
    }
}





