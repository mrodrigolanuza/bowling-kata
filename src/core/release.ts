const EMPTY = -1;
const MIN_NUM_PINS = 0;
const MAX_NUM_PINS = 10;

export class Release {
    private _pins: number;
    private _empty: boolean = false;

    private constructor(pins: number) {
        this._pins = pins;
        if(this._pins === EMPTY) {
            this._empty = true;
        }
    }

    // Getter para obtener el número de bolos derribados
    get pins(): number {
        return this._pins;
    }

    isEmpty(): boolean { 
        return this._empty; 
    }

    // Método de factoría estático con validación del rango
    static create(pins: number): Release {
        // Verificar que el número de bolos esté en el rango permitido (0 a 10)
        if (pins < MIN_NUM_PINS || pins > MAX_NUM_PINS) {
            throw new Error("El número de bolos derribados debe estar entre 0 y 10.");
        }

        return new Release(pins);
    }

    static createEmpty(): Release {
        return new Release(EMPTY);
    }
}
