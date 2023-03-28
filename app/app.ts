import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";

const negCon = new NegociacaoController();

const form = <Element> document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    negCon.adicionar();
})
