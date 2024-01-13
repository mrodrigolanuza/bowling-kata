import { Release } from '../core/release';

const FIRST = 0;
const SECOND = 1;

const STRIKE_NUM_PINS = 10;
export class Frame {
    private _releases: Release[] = [];
    
    private constructor(fisrtRelease: Release, secondRelease: Release) {
        this._releases.push(fisrtRelease);
        this._releases.push(secondRelease);
    }

    static create(fisrtRelease: Release, secondRelease: Release): Frame {
        
        if (fisrtRelease == null || secondRelease == null) {
            throw new Error("Lanzamientos del turno no inicializados correctamente.");
        }

        if(fisrtRelease.isEmpty()){
            throw new Error("El primer lanzamiento no puede ser vacío.");
        }

        if(!secondRelease.isEmpty() && (fisrtRelease.pins + secondRelease.pins > 10)){
            throw new Error("Los dos lanzamientos no pueden sumar más de 10 bolos.");
        }
        
        return new Frame(fisrtRelease, secondRelease);
    }

    isStrike(): boolean {
        return ((this._releases[FIRST].pins == STRIKE_NUM_PINS) 
                 && 
                (this._releases[SECOND].isEmpty()));
    }

    isSpire(): boolean {
        if(this._releases[SECOND].isEmpty())
            return false;
        
        return (this._releases[FIRST].pins + this._releases[SECOND].pins == 10);
        
    }

    getFirstReleasePoints(): number{
        return this._releases[FIRST].pins;
    }
    
    getTotalPoints(): number {
        if(this._releases[SECOND].isEmpty())
            return this._releases[FIRST].pins;
        
        return this._releases[FIRST].pins + this._releases[SECOND].pins;
    }
}
