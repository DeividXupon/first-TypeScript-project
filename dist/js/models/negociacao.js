export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get soma() {
        return this._valor * this._quantidade;
    }
    static criaDe(dateString, valorString, quantidadeString) {
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, '/'));
        console.log(data);
        const valor = parseFloat(valorString);
        const quantidade = parseInt(quantidadeString);
        return new Negociacao(data, quantidade, valor);
    }
}
