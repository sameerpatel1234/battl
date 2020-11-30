class allMoves{
	constructor(){
        this.NormalWeak = ["Rock"]
        this.Tackle = {
         	name: 'Tackle',
         	level: 1,
         	PP: 35,
         	Pow: 40,
         	Acc: 1,
            Type: "Normal",
         	attackType: "Physical",
         	desc: "Charges the foe with a full-body tackle."
    	}

        this.BodySlam = {
            name: "Body Slam",
            level: 1,
            PP: 15,
            Pow: 85,
            acc: 1,
            Type: "Normal",
            attackType: "Physical",
            desc: "Attacks with a full body attack.  May leave opponent paraylzed"
        }

        this.TailWhip = {
            name: 'Tail Whip',
            level: 1,
            PP: 30,
            Pow: 0,
            acc: 1,
            Type: "Normal",
            attackType: "Defence Debuff",
            desc: "Wags the tail to lower the foe's Defense."
        }
        
        this.ThunderShock = {
            name: 'Thunder Shock',
            level: 1,
            PP: 30,
            Pow: 40,
            Acc: 1,
            Type: "Electric",
            attackType: "Special",
            desc: "An electrical attack that may paralyze the foe."
        }
    }
}
