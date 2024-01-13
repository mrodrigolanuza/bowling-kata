import { Frame } from '../core/frame';
import { Release } from '../core/release';

describe('Frame', ()=>{

    it('first release should not be empty', ()=>{
        let firstRelease = Release.createEmpty();
        let secondRelease = Release.create(10);
        
        expect(() => {
            Frame.create(firstRelease, secondRelease);
        }).toThrow(Error);
    })

    it('second release can be empty', ()=>{
        let firstRelease = Release.create(10);
        let secondRelease = Release.createEmpty();
        
        let frame = Frame.create(firstRelease, secondRelease);

        expect(frame).toBeInstanceOf(Frame);
    })

    it('should accept two releases adding less than 10 pins between them', ()=>{
        let firstRelease = Release.create(2);
        let secondRelease = Release.create(3);
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame).toBeInstanceOf(Frame);
    })
    
    it('should accept two releases adding 10 pins between them', ()=>{
        let firstRelease = Release.create(4);
        let secondRelease = Release.create(6);
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame).toBeInstanceOf(Frame);
    })
    
    it('should not accept two releases adding more than 10 pins between them', ()=>{
        let firstRelease = Release.create(8);
        let secondRelease = Release.create(9);
        
        expect(() => {
            Frame.create(firstRelease, secondRelease);
        }).toThrow(Error);
    })

    it('should accept a strike', ()=>{
        let firstRelease = Release.create(10);
        let secondRelease = Release.createEmpty();
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame).toBeInstanceOf(Frame);
        expect(frame.isStrike()).toBe(true);
        expect(frame.isSpire()).toBe(false);
    })

    it('should accept a spire', ()=>{
        let firstRelease = Release.create(5);
        let secondRelease = Release.create(5);
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame).toBeInstanceOf(Frame);
        expect(frame.isStrike()).toBe(false);
        expect(frame.isSpire()).toBe(true);
    })

    it('should accept neither a spire nor a strike', ()=>{
        let firstRelease = Release.create(2);
        let secondRelease = Release.create(1);
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame.isStrike()).toBe(false);
        expect(frame.isSpire()).toBe(false);
    })

    it('when a strike first release points should be 10', ()=>{
        let firstRelease = Release.create(10);
        let secondRelease = Release.createEmpty();
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame.getFirstReleasePoints()).toBe(10);
        expect(frame.getTotalPoints()).toBe(10);
    })

    it('when a spire total points should be 10', ()=>{
        let firstRelease = Release.create(3);
        let secondRelease = Release.create(7);
        
        let frame = Frame.create(firstRelease, secondRelease);
        
        expect(frame.isSpire()).toBe(true);
        expect(frame.getFirstReleasePoints()).toBe(3);
        expect(frame.getTotalPoints()).toBe(10);
    })
});