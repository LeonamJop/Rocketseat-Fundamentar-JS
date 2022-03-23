/*
   O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.
*/

//Sobre Elevação, podendo chamar a função antes de declarar ela
sayMyname()

function sayMyname(){
   console.log("Leonam");
}


//Não Sobre Elevação
// sayMyname()

// const sayMyname = function (){
//    console.log("Leonam");
// }