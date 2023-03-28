import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputValor.value, this._inputQuantidade.value);
        if (!this.ehDiaUltil(negociacao.data)) {
            this.mensagemView.update("AVISO!: **Negociações somente em dias ulteis**!!!!!");
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    ehDiaUltil(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
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
