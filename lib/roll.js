//creating the roll function
export default function roll(sides, dice, rolls){
	var rolledvalues = [];
	for(let i = 0; i < rolls; i ++){
		var total = 0;
		for(let j = 0; j < dice; j ++){
			total += 1 + Math.floor(Math.random() * sides)
		}
		rolledvalues[i] = total
	}
	var object = {
		// creating the dices and setting the values to be parsed in cli.js
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: rolledvalues
	}
	//return the completed array
	return object;
}

