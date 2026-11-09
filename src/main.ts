// let nome: string = "Joao";
// let preco: number = 29.90;
// let aberta: boolean = true;

// const precos: number[] = [20.90, 19.90, 10.90];
// const item: string[] = [];


// let exemplo = 3;
// let exemplo2: any = 0;

import emReais from "./comanda";


const itens: string[] = []
const precos: number[] = []
const quantidades: number[] = []


function adicionar(
    item: string,
    precoCentavos: number,
    quantidade: number): void {
    itens.push(item);
    precos.push(precoCentavos);
    quantidades.push(quantidade)
}

emReais(10)