import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacaoView extends View<Negociacoes>{

    protected componente(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <td>DATA</td>
                        <td>VALOR</td>
                        <td>QUANTIDADE</td>
                    </tr>        
                </thead>
                <tbody>
                    ${model.getLista().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.quantidade}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

}
