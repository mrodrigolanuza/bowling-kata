import { BowlingGame } from '../core/bowlingGame';

const NUM_REALESES = 20;
describe('The Bowling Game', ()=>{
	let game;

	beforeEach(()=>{
        game = new BowlingGame();
    });

	it('should be able to create a bowling game', ()=>{
       
	   expect(game).toBeInstanceOf(BowlingGame);
	});

	it('should be able to roll a ball', ()=>{
		game.roll(0);
		expect(game.rolls).toEqual([0]);
	 });

	 it('should be able to calculate the final score', ()=>{
		game.roll(5);
		game.roll(12);
		
		let finalScore = game.calculateFinalScore();
		
		expect(finalScore).toBe(17);
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
		
		game.roll(10);
		game.roll(0);						
		game.roll(2);
		game.roll(3);
		for(let i = 4; i < NUM_REALESES; i++ ){
			game.roll(0);						
		}
		
		let finalScore = game.calculateFinalScore();

		expect(finalScore).toBe(17);

	 });
 });
