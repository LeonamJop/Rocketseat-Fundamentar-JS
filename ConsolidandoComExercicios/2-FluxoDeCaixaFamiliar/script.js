/*
  Fluxo de caixa familiar

  Descrição
    Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

  Desafio:
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: [] 
        * despesas: []
        
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/

// Minha tentativa

// let familia = {

//   receitas: [300, 225, 50.45, 25.50, 100],
//   despesas: [500, 10.25, 50, 45],

// }


// function saldoFamiliar() {
  
//   let totalReceitas = familia.receitas.reduce((totalReceitas, index) => totalReceitas + index);

//   console.log(`Total de receitas: R$${totalReceitas.toFixed(2)}`);

//   let totalDespesas = familia.despesas.reduce((totalDespesas, index) => totalDespesas + index);

//   console.log(`Total de despesas: R$${totalDespesas.toFixed(2)}`);

//   let saldoTotal = totalReceitas - totalDespesas;

//   let contaNoVermelho = saldoTotal <= 0;

//   let saldoFinal;

//   if (contaNoVermelho) {
//     saldoFinal = `O saldo está negativo, saldo atual R$${saldoTotal.toFixed(2)}`;
//   }else{
//     saldoFinal = `O saldo está positivo, saldo atual R$${saldoTotal.toFixed(2)}`;
//   }

//   return console.log(saldoFinal);

// }

// saldoFamiliar();


//Versão do Mayk

let family = {
  incomes: [3500, 4200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00, 2500]
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total= calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;

  let balanceText = 'negativo';

  if (itsOk) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);

}

calculateBalance()