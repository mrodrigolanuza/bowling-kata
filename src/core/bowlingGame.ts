export class BowlingGame {
	rolls: number[] = [];
	
    constructor(){}
    
    roll(pins: number) {
		this.rolls.push(pins);
	}
    
    calculateFinalScore() {        
        return this.calculateTotalBasePoints() + this.calculateTotalSpecialPoints();
    }

    private calculateTotalSpecialPoints() {
        let totalSpecialPoints = 0;
        for (let cntFrame = 0; cntFrame < this.rolls.length / 2; cntFrame += 2) {
            let frameSubtotal = this.rolls[cntFrame] + this.rolls[cntFrame + 1];

            if (this.isStrike(frameSubtotal, cntFrame)) {
                totalSpecialPoints += this.rolls[cntFrame + 2];
                totalSpecialPoints += this.rolls[cntFrame + 3];
            }
            else if (this.isSpare(frameSubtotal)) {
                totalSpecialPoints += this.rolls[cntFrame + 2];
            }
        }
        return totalSpecialPoints;
    }

    private calculateTotalBasePoints() {
        return this.rolls.reduce((total, pins) => total + pins, 0);
    }

    private isSpare(frameSubtotal: number) {
        return frameSubtotal == 10;
    }

    private isStrike(frameSubtotal: number, cntFrame: number) {
        return frameSubtotal == 10 && this.rolls[cntFrame] == 10;
    }
}