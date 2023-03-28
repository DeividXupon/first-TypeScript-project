import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes);
    }

    public adicionar(): void{
        const negociacao = Negociacao.criaDe(
            this._inputData.value,
            this._inputValor.value,
            this._inputQuantidade.value
        );

        if(!this.ehDiaUltil(negociacao.data)){
            this.mensagemView.update("AVISO!: **Negociações somente em dias ulteis**!!!!!");
            return
        }

        this.negociacoes.adicionar(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }

    private ehDiaUltil(date: Date){
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
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