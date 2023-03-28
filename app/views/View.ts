export abstract class View<T> {

    protected element:HTMLElement;

    constructor(selector: string){
        const elemento = document.querySelector(selector);
        if(elemento){
            this.element = <HTMLElement> elemento;
        }else{
            throw Error(`o seletor com nome de ${selector} não foi encontrado`)
        }
        
    }

    public update(model: T):void {
        const inHtml = this.componente(model);
        this.element.innerHTML = inHtml;
    }

    protected abstract componente(model: T):string;

}