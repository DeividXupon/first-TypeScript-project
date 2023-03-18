import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    
    private lista: Array<Negociacao> = [];

    public getLista(): ReadonlyArray<Negociacao> {
        return this.lista;
    }

    public adicionar(negociacao: Negociacao): void{
        this.lista.push(negociacao);
    } 
}