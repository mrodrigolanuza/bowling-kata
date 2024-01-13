import { Release } from '../core/release';

describe('Release', ()=>{

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