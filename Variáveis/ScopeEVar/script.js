/**O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.
 
 *
 */

//Iniciar um scopo
{
    //Aqui dentro é um bloco e posso colocar qualquer código
} //Aqui fechamos o bloco.

//var é global e também local.

    //Scopo global
console.log('> Existe x antes do bloco? ', x);

{//Scopo local
    var x = 0
}

//Scopo global
console.log('> Existe x antes do bloco? ', x);