import { Frame } from "./frame";
import { Release } from "./release";

const STRIKE_NUM_PINS = 10;
const MIN_GAME_FRAMES = 10;

export class BowlingGame {
    rolls: number[] = [];
    frames: Frame[] = [];
	
    constructor(){}
    
    roll(pins: number) {
		this.rolls.push(pins);
	}
    
    calculateFinalScore() {        
        this.createFramesGroupingRolls();
        return this.calculateFramesFinalScore();
    }

    private calculateFramesFinalScore() {
        let framesFinalScore: number = 0;
        for (let idFrame = 0; idFrame < MIN_GAME_FRAMES; idFrame++) {

            let frame: Frame = this.frames[idFrame];
            framesFinalScore += frame.getTotalPoints();

            if (frame.isStrike()) {
                let nextOneFrame: Frame = this.frames[idFrame + 1];
                if (nextOneFrame.isStrike()) {
                    framesFinalScore += nextOneFrame.getFirstReleasePoints();
                    let nextSecondOneFrame: Frame = this.frames[idFrame + 2];
                    framesFinalScore += nextSecondOneFrame.getFirstReleasePoints();
                }
                else {
                    framesFinalScore += nextOneFrame.getTotalPoints();
                }
            }

            if (frame.isSpire()) {
                let nextFrame: Frame = this.frames[idFrame + 1];
                framesFinalScore += nextFrame.getFirstReleasePoints();
            }
        }
        return framesFinalScore;
    }

    private createFramesGroupingRolls() {
        for (let idRoll = 0; idRoll < this.rolls.length; idRoll++) {
            
            if (this.isStrikeRoll(idRoll)) {
                this.frames.push(this.createStrikeFrame());
                continue;
            }

            this.frames.push(this.createStandartTwoRollFrame(idRoll));;
            idRoll = increaseIdRoll_StandartFrameNeedsTwoReleases(idRoll);
        }

        function increaseIdRoll_StandartFrameNeedsTwoReleases(idRoll: number) {
            return ++idRoll;
        }
    }

    private createStrikeFrame(): Frame {
        return Frame.create(Release.create(STRIKE_NUM_PINS),
            Release.createEmpty());
    }

    private createStandartTwoRollFrame(idRoll: number): Frame {
        return Frame.create(Release.create(this.rolls[idRoll]),
            Release.create(this.rolls[idRoll + 1]));
    }

    private isStrikeRoll(idRoll: number) {
        return this.rolls[idRoll] == STRIKE_NUM_PINS;
    }
}