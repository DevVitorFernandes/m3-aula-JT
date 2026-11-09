// legado/o-js-deixou-passar.js · quatro defeitos. Ache sem rodar.
const xBurguer = { nome: "x-burguer", preco: 1890 };
console.log(xBurguer.preco * 2);

function total(preco: any, quantidade: any) {
  return preco * quantidade;
}
console.log(total("18,90", 2));

function criarItem(nome: any, quantidade: any) {
  return { nome: nome, quantidade: quantidade };
}
console.log(criarItem(2, "suco de caju"));

const cardapio = [{ nome: "x-burguer", preco: 1890 }]
const pedido = cardapio.find((item) => item.nome === "x-salada");
console.log(pedido?.preco) 
