export class Release {
    private _pins: number;

    private constructor(pins: number) {
        this._pins = pins;
    }

    // Getter para obtener el número de bolos derribados
    get pins(): number {
        return this._pins;
    }

    // Método de factoría estático con validación del rango
    static create(pins: number): Release {
        // Verificar que el número de bolos esté en el rango permitido (0 a 10)
        if (pins < 0 || pins > 10) {
            throw new Error("El número de bolos derribados debe estar entre 0 y 10.");
        }

        return new Release(pins);
    }
}
