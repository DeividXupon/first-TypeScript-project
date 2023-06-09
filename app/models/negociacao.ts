export class Negociacao {
    private _data: Date;
    private _valor: number;
    private _quantidade: number;


    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public get valor(): number {
        return this._valor;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get soma(): number {
        return this._valor * this._quantidade;
    }

    public static criaDe(dateString: string, valorString: string, quantidadeString: string): Negociacao{
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, '/'));
        console.log(data);
        const valor = parseFloat(valorString);
        const quantidade = parseInt(quantidadeString);
        
        return new Negociacao(data, quantidade, valor);
    }
}