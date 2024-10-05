module.exports = class Terreno {
    constructor(largura, comprimento) {
        this._largura = largura; // Atribui a largura do terreno
        this._comprimento = comprimento; // Atribui o comprimento do terreno
    }

    set largura(largura) {
        this._largura = largura; // Setter para a largura
    }

    get largura() {
        return this._largura; // Getter para a largura
    }

    set comprimento(comprimento) {
        this._comprimento = comprimento; // Setter para o comprimento
    }

    get comprimento() {
        return this._comprimento; // Getter para o comprimento
    }

    calcularArea() {
        const area = this.largura * this.comprimento; // Calcula a área do terreno
        return area;
    }

    calcularPerimetro() {
        const perimetro = 2 * (this.largura + this.comprimento); // Calcula o perímetro do terreno
        return perimetro;
    }
};
