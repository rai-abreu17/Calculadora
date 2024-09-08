class Calculadora {
    constructor() {
        this.resultado = "";
    }

    inserir = (num) => {
        this.resultado += num;
        this.atualizarDisplay();
    }

    limpar = () => {
        this.resultado = "";
        this.atualizarDisplay();
    }

    voltar = () => {
        this.resultado = this.resultado.slice(0, -1);
        this.atualizarDisplay();
    }

    calcular = () => {
        try {
            this.resultado = eval(this.resultado); 
            this.atualizarDisplay();
        } catch (error) {
            this.resultado = "Erro";
            this.atualizarDisplay();
        }
    }

    atualizarDisplay = () => {
        const display = document.getElementById('resultado');
        display.innerHTML = this.resultado || "0"; 
    }
}

const calculadora = new Calculadora();

const insert = (num) => calculadora.inserir(num);
const clean = () => calculadora.limpar();
const back = () => calculadora.voltar();
const calcular = () => calculadora.calcular();
