import { View } from "./View.js";

export class MensagemView extends View<string>{

    protected componente(mensagem:string):string {
        return `<P class="alert alert-info">${mensagem}</P>`;
    }

    
}

    
