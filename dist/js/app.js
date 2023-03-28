import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negCon = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negCon.adicionar();
    });
}
else {
    throw Error("falor de Element do formulario esta dado como nulo (app.ts: linha 6)");
}
