export class BowlingGame {
	rolls: number[] = [];
	
    constructor(){}
    
    roll(pins: number) {
		this.rolls.push(pins);
	}
    
    calculateFinalScore() {        
        let finalScore = 0;
        
        //Standart points
        this.rolls.forEach(element => {
            finalScore += element
        });

        //Spare
        for (let cntFrame = 0; cntFrame < this.rolls.length/2; cntFrame += 2) {
            let frameSubtotal = this.rolls[cntFrame] + this.rolls[cntFrame + 1];

            if(frameSubtotal == 10){
                finalScore += this.rolls[cntFrame + 2];
            }
        }

        //Strike
        // for (let cntFrame = 0; cntFrame < this.rolls.length/2; cntFrame += 2) {
        //     let frameSubtotal = this.rolls[cntFrame] + this.rolls[cntFrame + 1];

        //     if(frameSubtotal == 10){
        //         finalScore += this.rolls[cntFrame + 2];
        //     }
        // }
        
        return finalScore;
    }
}