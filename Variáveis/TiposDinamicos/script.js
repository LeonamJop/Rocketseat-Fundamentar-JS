/**O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.
 
 *
 */

let tipoString = "";

console.log("tipoString: ", typeof tipoString);

let tipoNumber = 0;

console.log("tipoNumber: ", typeof tipoNumber);

let tipoBoolean = true;

console.log("tipoBoolean: ", typeof tipoBoolean);

//Mudando tipo da variável

let mudarTipoStringParaNumber = "";
mudarTipoStringParaNumber = 0;

console.log("mudarTipoStringParaNumber: ", typeof mudarTipoStringParaNumber);

//const's não mudam de tipo

const mudarTipoConstBooleanParaString = true;
mudarTipoConstBooleanParaString = "";//Dará TypeError

console.log("mudarTipoConstBooleanParaString: ", typeof mudarTipoConstBooleanParaString);