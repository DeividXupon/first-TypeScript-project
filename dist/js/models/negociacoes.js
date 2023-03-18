export class Negociacoes {
    constructor() {
        this.lista = [];
    }
    getLista() {
        return this.lista;
    }
    adicionar(negociacao) {
        this.lista.push(negociacao);
    }
}
