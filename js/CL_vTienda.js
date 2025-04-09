import mFlor from "./CL_mFlor.js";
import vFlor from "./CL_vFlor.js";

import mFruta from "./CL_mFruta.js";
import vFruta from "./CL_vFruta.js";

export default class vTienda {
    constructor() {
        this.controlador = null;

        this.vFlor = new vFlor();
        this.vFrut = new vFruta();

        this.salida = document.getElementById("salida");
        this.tabla1 = document.getElementById("tabla1")
        this.tabla2 = document.getElementById("tabla2")
        this.subT1 = document.getElementById("subT1")
        this.subT2 = document.getElementById("subT2")

        this.vFlor.btProcesar.onclick = () => {
            this.controlador.procesarFlores()
        }

        this.vFrut.btProcesar.onclick = () => {
            this.controlador.procesarFrutas()
        }
    }

    iniciarFlores() {
        this.mFlor = new mFlor({
            cod: this.vFlor.cod,
            envase: this.vFlor.envase,
            costBase: this.vFlor.costBase,
            tipo: this.vFlor.tipo,
        })
        return this.mFlor;
    }

    iniciarFrutas() {
        this.mFrut = new mFruta({
            cod: this.vFrut.cod,
            envase: this.vFrut.envase,
            costBase: this.vFrut.costBase,
            extra: this.vFrut.extra,
        })
        return this.mFrut;
    }

    reporte1(subTotalFlores, pagoTotal, cantFlorNat, cantFloresNatEnvaMed, porcentaje) {
        this.tabla1.innerHTML += `
            <table>
                <tr>
                    <td>${this.mFlor.cod}</td>
                    <td>${this.mFlor.envase}</td>
                    <td>${this.mFlor.costBase}$</td>
                    <td>${this.mFlor.tipo}</td>
                    <td>${this.mFlor.descuento()}$</td>
                    <td>${this.mFlor.incremento()}$</td>
                    <td>${this.mFlor.montTotal()}$</td>
                </tr>`
        this.subT1.innerHTML = `
                <tr>
                    <th>Monto Total de Ramo de Flores</th>
                    <td>${subTotalFlores}$</td>
                </tr>`


        this.salida.innerHTML = `
            <strong>Total pagado:</strong> ${pagoTotal}$
        <br><strong>Cantidad de flores naturales:</strong> ${cantFlorNat}
        <br><strong>Cantidad de flores naturales con envase mediano:</strong> ${cantFloresNatEnvaMed}
        <br><strong>Porcentaje de flores naturales con envase mediano:</strong> ${porcentaje}%
        `
    }

    reporte2(subTotalFrutas, pagoTotal, cantFlorNat, cantFloresNatEnvaMed, porcentaje) {
        this.tabla2.innerHTML += `
                <tr>
                    <td>${this.mFrut.cod}</td>
                    <td>${this.mFrut.envase}</td>
                    <td>${this.mFrut.costBase}$</td>
                    <td>${this.mFrut.extra}</td>
                    <td>${this.mFrut.descuento()}$</td>
                    <td>${this.mFrut.montTotal()}$</td>
                </tr>`

        this.subT2.innerHTML = `
                <tr>
                    <th>Monto Total de Ramo de Frutas</th>
                    <td>${subTotalFrutas}$</td>
                </tr>

            </table>
        `

        this.salida.innerHTML = `
            <strong>Total pagado:</strong> ${pagoTotal}$
        <br><strong>Cantidad de flores naturales:</strong> ${cantFlorNat}
        <br><strong>Cantidad de flores naturales con envase mediano:</strong> ${cantFloresNatEnvaMed}
        <br><strong>Porcentaje de flores naturales con envase mediano:</strong> ${porcentaje}%
        `
    }

}