//Pokemon Battle Clone

//Experience webpage 
//https://bulbapedia.bulbagarden.net/wiki/Experience
var attack = 0;
var playerPos = [100, 250]
var oppPos = [550, 169]
var PPMod = [0,0,0,0];
var AICalcDamage = [];
var stabMod = 1;
var attack1, attack2, attack3, attack4;
var oppAttack;
var attackPower, attackPP, oppAttackPow;
var playerAttack = false;
var playerTurn = true;
var showingRect = true;
var mainFight = true;
var fightMenu = false;
var inAttack = false;
var mayAttack = false;
var FightX = 299;
var FightY = 308;
var FightW = 100;
var FightH = 40;
var inFightBox = false;
var attackType
var moveType;
var attMove;

//var bg;
//var pickachu;
var w;

function preload(){
    bg = loadImage("assets/map.png");                       
    ratImg = loadImage("assets/ratFar.png");
    pikaImg = loadImage("assets/pickachu.png");
}

function setup() {

    createCanvas(800,400);

    allmoves = new allMoves   
    rat = new Rattata; 
    pika = new Pickachu;
    attacks = new Attacks();
    
}

function draw() {
    //console.log(attack);
    background(bg);
    //sleep(4000);
    if(playerTurn){
        update();
    
        if(mainFight){
            showBattleMenu(165, 3, 3); 
        }else if(fightMenu){
            showFightMenu(0, 108, 204);
        }
        //attacks.ShowPMove();
        if(playerAttack){
            // console.log("If 1")
            //setInterval(attacks.ShowPMove(), );
            showingRect = true;
            playerTurn = false;
            playerAttack = false;
            setTimeout(removeRect, 3000);
        }
    }else{
        // console.log("else 1")
        if(showingRect){
            // console.log("If 2")
            attacks.ShowPMove();  
        }
        //console.log(mayAttack);
        if(mayAttack){
            attack = 0;
            attacks.oppAttack();
            for(let x = 0; x<4; x++){
                attacks.attackProp(attacks.AIDamage[x], rat.level, rat.attack, pika.defence, stabMod);
                AICalcDamage.push(oppAttack);
            }
            attack = Math.max.apply(null, AICalcDamage);
            attacks.oppMove(attack, rat.moves, AICalcDamage);
            //console.log(attack);
            //console.log("Attack: " + attMove);
            pika.update(attack);
            attack = 0;
            
            //playerAttack = false;
            mainFight = true;
            playerTurn = true;
            AICalcDamage = [];
            mayAttack = false;
        }
    }
    pika.show();
    rat.show();     
}   

function mousePressed(){
    if(playerTurn){
        if(inFightBox){
            mainFight = false;
            fightMenu=true;
        }
        if(inAttack){
            //mainFight = false;
            inAttack = false;
            fightMenu = false;
            playerAttack = true;
            if(attack1){
                PPMod[0]++;
                pika.moveDamage(pika.moves[0]);
                playerMove = pika.moves[0];
                attacks.attackProp(attackPower, pika.level, pika.attack, rat.defence, stabMod);
            }else if(attack2){
                PPMod[1]++
                pika.moveDamage(pika.moves[1]);
                playerMove = pika.moves[1];
                attacks.attackProp(attackPower, pika.level, pika.attack, rat.defence, stabMod);
            }
        }
    }
}


function update(){
    stabMod = 0
    //First Menu
    if( inSelect(FightX,FightY,FightW,FightH) ){
        inFightBox = true;
        mainFight = false;
        if(!fightMenu){
            showBattleMenu(239, 9, 9);
        }
    }else{ 
        if(!fightMenu){
            mainFight=true;
            inFightBox = false;
        }
    }

    //Second/Moves selection menu
    if(fightMenu){
        //console.log(inAttack)
        if( inSelect(FightX,FightY,FightW,FightH) ){
            inAttack = true;
            attack1 = true;
        }else if( inSelect(FightX*1.5,FightY,FightW,FightH) ){
            inAttack = true;
            attack1 = false;
            attack2 = true;
            attack3 = false;
            attack4 = false;
        }else if( inSelect(FightX*2,FightY,FightW,FightH) ){
            inAttack = true;
            attack1 = false;
            attack2 = false;
            attack3 = true;
            attack4 = false;
        }else if( inSelect(FightX*2,FightY,FightW,FightH) ){
            inAttack = true;
            attack1 = false;
            attack2 = false;
            attack3 = false;
            attack4 = true;
        }else{
            inAttack = false;
            attack1 = false;
            attack2 = false;
            attack3 = false;
            attack4 = false;  
        }
    }
}

function inSelect(x, y, w, h){
    if(mouseX >= x - w/2 && mouseX <= x + w/2 &&
        mouseY >= y - h/2 && mouseY <= y + h/2){
        return true;
    }else{
        return false;
    }
    
}

function showBattleMenu(r,g,b){
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    fill(r,g,b);
    rect(FightX, FightY, FightW, FightH);
    fill(255);
    textAlign(CENTER);
    textSize(21);
    text("FIGHT!", FightX, FightY+5);
}


function showFightMenu(r,g,b){
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    for(var i = 1; i<3;){
        for(var m = 0; m<4; m++){
            fill(r,g,b);
            rect(FightX*i, FightY, FightW, FightH);
            fill(255);
            textAlign(CENTER);
            textSize(15);
            text(pika.moves[m], FightX*i, FightY);
            pika.movePP(pika.moves[m], PPMod[m]);
            textSize(10);
            text("PP: " + attackPP, FightX*i, FightY+12);
            i+=.5;
        }
    }
}


function removeRect(){
    console.log("here");
    //playerTurn = true;
    rat.update(attack);
    mayAttack = true;
    showingRect = false;
}
