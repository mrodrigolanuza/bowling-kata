import { Release } from '../core/release';

describe('Release', ()=>{

    const EMPTY = -1;
    
    it('should accept an empty release in case a strike', ()=>{
        let emptyRelease = Release.createEmpty();
        let pins = emptyRelease.pins;
        expect(pins).toBe(EMPTY);
        expect(emptyRelease.isEmpty()).toBe(true);
    })
    
    it('should accept a number of pins when created', ()=>{
        let release = Release.create(1);
        let pins = release.pins;
        expect(pins).toBe(1)
    })

    it('when creation should only accept a number of pins positive', ()=>{
        expect(() => {
            let release = Release.create(-1);    
        }).toThrow(Error);
    })

    it('when creation should only accept 10 pins as the maximum number', ()=>{
        expect(() => {
            let release = Release.create(11);    
        }).toThrow(Error);
    })
});