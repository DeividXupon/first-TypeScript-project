import { View } from "./View.js";
export class MensagemView extends View {
    componente(mensagem) {
        return `<P class="alert alert-info">${mensagem}</P>`;
    }
}
