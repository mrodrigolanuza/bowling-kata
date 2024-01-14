import { Frame } from "./frame";
import { Release } from "./release";

const STRIKE_NUM_PINS = 10;

export class BowlingGame {
    rolls: number[] = [];
    frames: Frame[] = [];
	
    constructor(){}
    
    roll(pins: number) {
		this.rolls.push(pins);
	}
    
    calculateFinalScore() {        
        
        //Create frames grouping rolls
        for (let idRoll = 0; idRoll < this.rolls.length; idRoll++){
            //Strike
            if(this.rolls[idRoll] == STRIKE_NUM_PINS){
                this.frames.push(Frame.create(Release.create(STRIKE_NUM_PINS), 
                                              Release.createEmpty()));
                continue;
            }
            //Other case
            this.frames.push(Frame.create(Release.create(this.rolls[idRoll]), 
                                          Release.create(this.rolls[idRoll+1])));;
            idRoll++;
        }

        //Calculate game points
        let totalGamePoints: number = 0; 
        for (let idFrame = 0; idFrame < 10; idFrame++){

            let frame: Frame = this.frames[idFrame];
            totalGamePoints += frame.getTotalPoints()

            if (frame.isStrike()){
                let nextOneFrame: Frame = this.frames[idFrame + 1];
                if (nextOneFrame.isStrike()){
                    totalGamePoints += nextOneFrame.getFirstReleasePoints();
                    let nextSecondOneFrame: Frame = this.frames[idFrame + 2];
                    totalGamePoints += nextSecondOneFrame.getFirstReleasePoints();
                }
                else{
                    totalGamePoints += nextOneFrame.getTotalPoints();
                }
            }

            if (frame.isSpire()){
                let nextFrame: Frame = this.frames[idFrame + 1];
                totalGamePoints += nextFrame.getFirstReleasePoints();
            }
        }

        return totalGamePoints;
    }
}