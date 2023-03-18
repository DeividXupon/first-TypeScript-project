import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView('#main-tabela');
        this.mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, '-'));
        const valor = parseFloat(this._inputValor.value);
        const quantidade = parseInt(this._inputQuantidade.value);
        return new Negociacao(data, quantidade, valor);
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update("Cadastrado com susseco");
    }
    limpaFormulario() {
        this._inputValor.value = '';
        this._inputQuantidade.value = '';
        this._inputData.value = '';
        this._inputData.focus();
    }
}
