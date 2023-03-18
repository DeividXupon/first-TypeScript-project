export abstract class View<T> {

    protected element:HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    public update(model: T):void {
        const inHtml = this.componente(model);
        this.element.innerHTML = inHtml;
    }

    protected abstract componente(model: T):string;

}