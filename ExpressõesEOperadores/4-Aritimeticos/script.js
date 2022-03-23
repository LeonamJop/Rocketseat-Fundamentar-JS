/*
      Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

      O operador de multiplicação é o * (asterisco);
      O operador de divisão é a / (barra);
      O operador de soma é o + (positivo);
      O operador de subtração é o - (negativo).

      Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

      * resto da divisão: sinal %
            let remainder
            remainder = 11 % 9
            console.log(remainder)

      * incremento: sinal ++
            let increment = 0

            console.log(++increment)
            console.log(increment)

      * decremento: sinal
            let decrement = 0
            decrement--
            console.log(decrement)

      * exponencial: sinal
            console.log(2 ** 3)
*/

//multiplicação
console.log("Multiplicação: ", 3.2 * 5.5);

//divisão
console.log('divisão: ', 4 / 2);

//soma
console.log('soma: ', 45 + 33);

//subtração
console.log('subtração: ', 6 - 3.5);

//resto da divisão
let remainder
remainder = 11 % 9
console.log('resto da divisão: ', remainder);

//incremento
let increment = 0
increment ++
increment ++
console.log('incremento: ',increment);
console.log('incremento: ',++increment);

//decremeto
let decrement = 0

console.log('decremeto: ', decrement--);
console.log('decremeto: ', decrement);
console.log('decremeto: ', --decrement);


//exponencial
console.log('exponencial: ', 3 ** 3);