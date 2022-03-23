/*
    Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.
*/

// Funciona da seguinte forma;
// condição ? valor1 : valor2

//Exemplo de uso:

// Café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)


//Maior de 18

let age = 18 

const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive);