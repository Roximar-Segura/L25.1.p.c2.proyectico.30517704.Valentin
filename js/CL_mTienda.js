import mFlor from "./CL_mFlor.js";
import mFruta from "./CL_mFruta.js";

export default class mTienda {
    constructor() {
        this.acumVentas = 0.00;
        this.acumVentasFlores = 0.00;
        this.acumVentasFrutas = 0.00;
        this.cntFloresNaturales = 0;
        this.cntFloresNaturalesTipo2 = 0;
    }

    procesarRamo(r) {
        this.acumVentas += r.montTotal();

        if (r instanceof mFlor) {
            this.acumVentasFlores += r.montTotal()

            if (r.tipo === "N") {
                this.cntFloresNaturales++
                if (r.envase === 2) {
                    this.cntFloresNaturalesTipo2++
                }
            }
        }

        if (r instanceof mFruta) {
            this.acumVentasFrutas += r.montTotal()
        }

    }

    montoFinal() {
        return this.acumVentas
    }

    montoFinalFlores() {
        return this.acumVentasFlores
    }

    montoFinalFrutas() {
        return this.acumVentasFrutas
    }

    cantFloresNatu() {
        return this.cntFloresNaturales
    }

    cantFloresNatuEnvaMed() {
        return this.cntFloresNaturalesTipo2
    }

    porcFloresNaturaEnvaMediano() {
        if (this.cntFloresNaturales > 0)
            return (this.cntFloresNaturalesTipo2 / this.cntFloresNaturales) * 100
        else
            return 0
    }


}