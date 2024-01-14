import { BowlingGame } from '../core/bowlingGame';

const NUM_REALESES = 20;
const NUM_STRIKE_PINS = 10;
const NUM_FRAMES = 10;

describe('The Bowling Game', ()=>{
	let game;

	beforeEach(()=>{
        game = new BowlingGame();
    });

	 it('final score should be zero when all gutter balls', ()=>{

		for(let i = 0; i < NUM_REALESES; i++ ){
			game.roll(0);						
		}
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(0);
	 });

	 it('final score should be 20 when only open frames with 1 pin down',()=>{

		for(let i = 0; i < NUM_REALESES; i++ ){
			game.roll(1);						
		}
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(20);
		
	 });

	 it('final score should be 20 in case spare + 5 ((5/ 5-)) and gutter balls the rest of frames', ()=>{
		
		game.roll(5);
		game.roll(5);						
		game.roll(5);
		game.roll(0);
		for(let i = 4; i < NUM_REALESES; i++ ){
			game.roll(0);						
		}
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(20);

	 });

	 it('final score should be 20 in case strike ((X 23)) and gutter balls the rest of frames', ()=>{
		
		game.roll(NUM_STRIKE_PINS);
		game.roll(2);
		game.roll(3);
		for(let i = 3; i < NUM_REALESES; i++ ){
			game.roll(0);						
		}
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(20);

	 });

	 it('final score should be 300 when a perfect game (all strikes)', ()=>{
		
		rollPerfectGame(game);
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(300);

	 });

	 it('final score should be 150 when all spires of 5 and a final 5 (5/ + 5)', ()=>{
		
		rollAllSpires(game, 5);
		game.roll(5);
				
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(150);

	 });

	 it('final score should be 180 when all spires of 8 and a final 8 (8/ + 8)', ()=>{
		
		rollAllSpires(game, 8);
		game.roll(8);
				
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(180);

	 });
 });
function rollPerfectGame(game: any) {
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
	
	game.roll(NUM_STRIKE_PINS);
	game.roll(NUM_STRIKE_PINS);
}

function rollAllSpires(game: BowlingGame, numPinsSpireFirstRoll: number) {
	for(let i = 0; i < NUM_FRAMES; i++ ){
		game.roll(numPinsSpireFirstRoll);
		game.roll(NUM_STRIKE_PINS-numPinsSpireFirstRoll);
	} 
}

