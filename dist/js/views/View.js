export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const inHtml = this.componente(model);
        this.element.innerHTML = inHtml;
    }
}
