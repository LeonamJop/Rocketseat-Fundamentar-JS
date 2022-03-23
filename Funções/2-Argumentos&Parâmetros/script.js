/*
Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
*/


//Declaração da função - function statement

//function anonymous
                     //Parâmetros - parameters
const sum = function(number1, number2){
//   console.log(number1 + number2);
}

//argumentos - arguments
sum(2,3);


/*
   Retornando valores dentro da função
   Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
*/
// let total = 0;

const sum2 = function(number1, number2){
   let total = number1 + number2;
   return total
}

let number1 = 12;
let number2 = 18;

// console.log(`O número 1 é ${number1}`);
// console.log(`O número 2 é ${number2}`);


// console.log(`A soma total do dois números é ${sum2(number1, number2)}`);
// console.log(total);

/*
   Outra maneira de entender funções
   Uma outra forma de entender funções por meio de um exemplo de liquidificador.
*/

function liquidificador(fruta1, fruta2){
   return  'Suco de ' + fruta1 + fruta2
}

const copo = liquidificador("Banana", "Maçã");

// console.log(copo);

//function scope

let subject = "creat video" 

function creatThink(subject) {
   subject = "study"
   return subject
}

console.log("Valor dentro do escopo da função: ",creatThink(subject));
console.log("Valor fora do escopo da função: ", subject);