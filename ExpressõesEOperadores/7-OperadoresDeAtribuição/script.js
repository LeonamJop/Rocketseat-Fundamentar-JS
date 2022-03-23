/*
    Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.
*/

//Exemplo:
// Operadores de atribuição (Assignment)
let x

// console.log(x);

// assignment normal:
x = 1
// console.log(x);

// addition assignment (adição):
// x = x + 2
x += 2
// console.log(x);

// subtraction assignment (subtração):
// x = x -1
x -= 1
// console.log(x);

// multiplication assignment (multiplacação):
//x = x * 2
x *= 2
// console.log(x);

// division assignment (divisão):
//x = x / 2
x /= 2
// console.log(x);

// exponetiation assignment (exponenciação):
x **= 2
// console.log(x);

// remainder assignment (resto de divisão):
x %= 2
// console.log(x);


//Operadores lógicos

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = false;
let queijo = false;

// AND &&
// console.log(pao && queijo ? 'feliz' : 'triste');

// OR ||
// console.log(pao || queijo ? 'feliz' : 'triste');

// NOT !

console.log(pao); //Nega o valor "oficial" se for false vira true e vise-versa