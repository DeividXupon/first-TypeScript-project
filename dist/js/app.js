import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negCon = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    negCon.adicionar();
});
