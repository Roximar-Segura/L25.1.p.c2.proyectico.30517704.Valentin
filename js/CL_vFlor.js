export default class vFlor{
    constructor(){
        this.inCod = document.getElementById("florForm_inCod");
        this.inEnvase = document.getElementById("florForm_inEnvase");
        this.inCostBase = document.getElementById("florForm_inCostBase");
        this.inTipo = document.getElementById("florForm_inTipo");
        this.btProcesar = document.getElementById("florForm_btProcesar");
    }

    get cod(){
        return this.inCod.value;
    }

    get envase(){
        return this.inEnvase.value;
    }

    get costBase(){
        return + this.inCostBase.value;
    }

    get tipo(){
        return this.inTipo.value;
    }
}