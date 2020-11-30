class Pickachu{
    
    constructor(){
        this.pokName = "Pikachu"
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
        this.baseHealth = 35;
        this.baseAttack = 55
        this.baseDef = 30;
        this.baseSpAtk = 50;
        this.baseSpDef = 40;
        this.baseSpeed = 90;

        this.calcStats();
       
        this.health = this.maxHealth
        this.allmoves = new allMoves;
        this.pokeType = "Electric";
        this.moves = ["Tackle", "Thunder Shock", "hold3", "hold4"];
        this.update(0);
    }
    
    show(){
        rectMode(CORNER);
        w = 175*this.BarMod;
        noStroke();
        fill(10,194,20);
        rect(2,248, w ,9);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(2,248,175,9);
        fill(255);
        textSize(17);
        textAlign(LEFT);
        stroke(1);
        text(this.pokName + "   " + "Lvl: "+ this.level, 2, 244);
        //180, 259
        text("HP: " + this.health, 180, 259);
        image(pikaImg, playerPos[0], playerPos[1]);
    }
    update(damage){
        this.health -= damage;
        //this.BarMod = ((this.health-damage) * this.mult)/100;
        this.BarMod = this.health/this.maxHealth;
        if(this.BarMod<= 0){
            this.BarMod = 0;
        }
    }

    calcStats(){
        //https://cdn.bulbagarden.net/upload/d/d4/HP_calc.png
        //Health Calculations
        this.maxHealth1 = this.baseHealth + this.HealthIV;
        this.maxHealth2 = sqrt(this.HealthEV)/4;
        this.maxHealth = ((this.maxHealth1 * 2 + this.maxHealth2 * this.level)/100) + this.level + 10;
        this.maxHealth = Math.round(this.maxHealth);
        //console.log(this.maxHealth);

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
            attackPower = allmoves.Tackle.Pow;

            //attackPP = allmoves.Tackle.Pow
            //attackPP = allmoves.Tackle.PP;
        }else if( move == "Thunder Shock"){
            if(allmoves.ThunderShock.Type == this.pokeType){
                stabMod = 1.5;
            }else{
                stabMod = 1;
            }
            attackPower = allmoves.ThunderShock.Pow;
        }else{
            attackPower = 0;
        }
    }

    movePP(move, sub){
        if(move == "Tackle"){
            attackPP = allmoves.Tackle.PP - sub;
            if(attackPP < 0){
                attackPP = 0
            }
        }else if(move == "Thunder Shock"){
            attackPP = allmoves.ThunderShock.PP - sub;
            if(attackPP < 0){
                attackPP = 0
            }
        }else{
            attackPP = 0;
        }
    }
}
