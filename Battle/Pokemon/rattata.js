class Rattata{
	 constructor(){

        this.pokName = "Rattata"

        this.HealthEV = 0;
        this.HealthIV = 0;

        this.AttackEV = 0;
        this.AttackIV = 0;

        this.DefenceEV = 0;
        this.DefenceIV = 0;

        this.SpecialEV = 0;
        this.SpecialIV = 0;

        this.SpeedEV = 0;
        this.SpeedIV = 0;

        
        this.level = 1;
        this.baseHealth = 30;
        this.baseAttack = 56
        this.baseDef = 35;
        this.baseSpAtk = 25;
        this.baseSpDef = 35;
        this.baseSpeed = 72;

        this.calcStats();

        this.health = this.maxHealth
        this.allmoves = new allMoves;
        this.pokeType = "Normal"
    
        
        this.moves = ["Tackle", "Tail Whip", "Body Slam", "hold4"];
        this.movesPP = [];
        this.movePP();
        this.update(0);
    }


    show(){
    	//Rect W= 201 H = 10, X = 620, Y = 189
    	//PosX = 587 PosY = 231
    	//new Color 9, 226, 22
    	//old Color 8, 216, 19
    	//blue color
    	//red Color 244, 99, 73
    	rectMode(CORNER);
        w = 175*this.BarMod;
        noStroke();
        fill(6, 185, 216);
        rect(615, 151, w ,8);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(615,151,175,8);
        fill(255);
        textSize(15);
        textAlign(LEFT);
        text(this.pokName + "   " + "Lvl: "+ this.level, 615, 147);
    	image(ratImg, oppPos[0], oppPos[1]);

    }

    calcStats(){
        //https://cdn.bulbagarden.net/upload/d/d4/HP_calc.png
        //Health Calculations
        this.maxHealth1 = this.baseHealth + this.HealthIV;
        this.maxHealth2 = sqrt(this.HealthEV)/4;
        this.maxHealth = ((this.maxHealth1 * 2 + this.maxHealth2 * this.level)/100) + this.level + 10;
        this.maxHealth = Math.round(this.maxHealth);
        //xthis.maxHealth);

        //https://cdn.bulbagarden.net/upload/d/d6/Statcalc_gen12.png
        //attack Calculations
        this.attackCalc1 = this.baseAttack + this.AttackIV;
        this.attackCalc2 = sqrt(this.HealthEV)/4;
        this.attack = (((this.attackCalc1 * 2 + this.attackCalc2) * this.level)/100) + 5;
        this.attack = Math.round(this.attack);
        //console.log("Attack " + this.attack);

        //Defence Calculations
        this.DefCalc1 = this.baseDef + this.DefenceIV;
        this.DefCalc2 = sqrt(this.DefenceEV)/4;
        this.defence = (((this.DefCalc1 * 2 + this.DefCalc2) * this.level)/100) + 5;
        this.defence = Math.round(this.defence);
        //console.log("Defence " + this.defence);

        this.SpAtkCalc1 = this.baseSpAtk + this.SpecialIV;
        this.SpAtkCalc2 = sqrt(this.SpecialEV)/4;
        this.SpAtack = (((this.DefCalc1 * 2 + this.DefCalc2) *this.level)/100) + 5;
        
        //Special Defence Calculations
        this.SpDefCalc1 = this.baseSpDef + this.SpecialIV;
        this.SpDefCalc2 = sqrt(this.SpecialIV)/4;
        this.SpDef = (((this.SpDefCalc1 * 2 + this.DefCalc2) * this.level)/100) + 5;
        this.SpDef = Math.round(this.SpDef);
        //console.log("Special Defence " + this.SpDef);

        //Speed Calculations
        this.SpeedCalc1 = this.baseSpeed + this.SpeedIV;
        this.SpeedCalc2 = sqrt(this.SpeedEV)/4;
        this.Speed = (((this.SpeedCalc1 * 2 + this.SpeedCalc2) * this.level)/100) + 5;
        this.Speed = Math.round(this.Speed);
        //console.log("Speed " + this.Speed);
    }

    moveDamage(move){
        if(move == "Tackle"){
            if(allmoves.Tackle.attackType == this.pokeType){
                stabMod = 1.5;
            }else{
                stabMod = 1;
            }
            oppAttackPow = allmoves.Tackle.Pow;
        }else if(move == "Body Slam"){
            //console.log("here");
            if(allmoves.BodySlam.attackType == this.pokeType){
                stabMod = 1.5
            }else{
                stabMod = 1;
            }
            oppAttackPow = allmoves.BodySlam.Pow;
            //console.log(oppAttackPow);
        }else{
            oppAttackPow = 0;
        }
    }

    movePP(){
        for(let x = 0; x<4; x++){
            if(this.moves[x] == "Tackle"){
                this.movesPP.push(allmoves.Tackle.PP)
            }else if(this.moves[x] == "Tail Whip"){
                this.movesPP.push(allmoves.TailWhip.PP)
            }else if(this.moves[x] == "Body Slam"){
                this.movesPP.push(allmoves.BodySlam.PP)
            }else{
                this.movesPP.push(0);
            }
        }
    }


     update(damage){
        //console.log(damage);
        this.health -= damage;
        this.BarMod = this.health/this.maxHealth;       
        // console.log(this.health);
        if(this.BarMod <= 0){
            this.BarMod = 0;
        }
    }


}
