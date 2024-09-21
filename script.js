class Calculadora {
    constructor() {
        this.resultado = "";
        this.historico = []; 
        this.contadorOperacoes = 0; 
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
        this.resultado = this.resultado ? this.resultado.slice(0, -1) : "0"; 
        this.atualizarDisplay();
    }

    calcular = () => {
        try {
            let valorAnterior = this.resultado;
            this.resultado = eval(this.resultado);
            this.historico.push({ valorAnterior, resultado: this.resultado }); 
            this.contadorOperacoes++;
            this.atualizarDisplay();
        } catch (error) {
            this.resultado = "Erro";
            this.atualizarDisplay();
        }
    }

    atualizarDisplay = () => {
        const display = document.getElementById('resultado');
        display.innerHTML = `${this.resultado || "0"}`; 
    }
}

const calculadora = new Calculadora();

const insert = (num) => calculadora.inserir(num);
const clean = () => calculadora.limpar();
const back = () => calculadora.voltar();
const calcular = () => calculadora.calcular();
