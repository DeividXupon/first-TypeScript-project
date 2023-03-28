export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`o seletor com nome de ${selector} não foi encontrado`);
        }
    }
    update(model) {
        const inHtml = this.componente(model);
        this.element.innerHTML = inHtml;
    }
}
