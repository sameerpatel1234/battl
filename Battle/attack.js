function Attacks(){

	this.attackProp = function(attackPow, pokLevel, pokAttack, oppDef, modifier){
		if(attackPow > 0){

		this.damage1 = ((2*pokLevel)/5) + 2;
		this.damage2 = attackPow * pokAttack/oppDef;
		this.fulldamage = (((this.damage1 * this.damage2)/(50)) + 2) * modifier;
		this.fulldamage = Math.round(this.fulldamage)
		}else{
			this.fulldamage = 0;
		}
		if(playerTurn){
			attack = this.fulldamage;
		}else{
			oppAttack = this.fulldamage;
		}
		//console.log(this.fulldamage);
	}

	this.oppAttack = function(){
		this.AIDamage = [];
		for(let x = 0; x < rat.moves.length; x++){
			//console.log(oppAttackPow)
			rat.moveDamage(rat.moves[x]);
			this.AIDamage.push(oppAttackPow);
			//oppAttackPow = 0;
		}
	}


	this.oppMove = function(damage,pokemonMoves,calcDamage){
		console.log(damage)
		for(let x = 0; x<4; x++){
			if(damage == calcDamage[x]){
				//console.log("here");
				attMove = pokemonMoves[x];
				//console.log(pokemonMoves[x]);
			}			
		}
	}

	this.ShowPMove = function(){
		//console.log("here")
		strokeWeight(3);
		stroke(0);
		rectMode(CORNER);
		fill(255);
		rect(244,277,380,113);
		textSize(32)
		//showingRect = true;
		strokeWeight(0)
		fill(255);
		text(pika.pokName + " used " + playerMove, 244,274, 380, 113);
		
	}
}
