import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacaoView('#main-tabela');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes);
    }

    public adicionar(): void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, '-'));
        const valor = parseFloat(this._inputValor.value);
        const quantidade = parseInt(this._inputQuantidade.value);
        
        return new Negociacao(data, quantidade, valor);
    }

    private atualizaView():void {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update("Cadastrado com susseco");
    }

    private limpaFormulario(): void{
        this._inputValor.value = '';
        this._inputQuantidade.value = '';
        this._inputData.value = '';
        this._inputData.focus();
    }
}