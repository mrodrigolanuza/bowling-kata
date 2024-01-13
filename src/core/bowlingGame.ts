export class BowlingGame {
    NUM_STRIKE_PINS: number = 10;
    rolls: number[] = [];
	
    constructor(){}
    
    roll(pins: number) {
		this.rolls.push(pins);
	}
    
    calculateFinalScore() {        
        return this.calculateBasePoints() + this.calculateSpecialPoints();
    }

    private calculateBasePoints() {
        return this.rolls
                   .slice(0,20)
                   .reduce((total, pins) => total + pins, 0);
    }
    
    private calculateSpecialPoints() {
        const MAX_FRAMES = 10;
        let totalSpecialPoints = 0;
        
        for (let cntFrame = 0; cntFrame < MAX_FRAMES; cntFrame++) {
            
            let frameSubtotal = this.rolls[cntFrame*2] + this.rolls[(cntFrame*2) + 1];
    
            if (this.isStrike(cntFrame)) {
                totalSpecialPoints += this.rolls[cntFrame*2 + 2];
                totalSpecialPoints += this.rolls[cntFrame*2 + 3];
            }
            else if (this.isSpare(frameSubtotal)) {
                totalSpecialPoints += this.rolls[cntFrame*2 + 2];
            }
        }
        return totalSpecialPoints;
    }

    private isSpare(frameSubtotal: number) {
        return frameSubtotal == this.NUM_STRIKE_PINS;
    }
    
    private isStrike(cntFrame: number) {
        return this.rolls[cntFrame*2] == this.NUM_STRIKE_PINS;
    }
}