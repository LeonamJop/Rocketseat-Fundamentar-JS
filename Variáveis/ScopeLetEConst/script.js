/**Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.
 
 *
 */

//Iniciar um scopo
{
    //Aqui dentro é um bloco e posso colocar qualquer código
} //Aqui fechamos o bloco.

//const e let são locais e só funcionam no scopo que foram criadas
let y = 1
{
    //console.log("Existe y antes da declaração?", y);//Não existe, funciona se y for declarado fora do scopo
    y = 0; 
    console.log("Existe y depois da declaração?", y);//Existe
}

console.log("Existe y depois do bloco?", y);//Não existe, funciona apenas dentro do scopo. Funciona se y for declarado fora do scopo, podendo ser alterado dentro de um scopo.

const constY = 1
{
    //console.log("Existe y antes da declaração?", y);//Não existe
    const constY = 0; //
    console.log("Existe constY depois da declaração?", constY);//Existe
}

console.log("Existe constY depois do bloco?", constY);