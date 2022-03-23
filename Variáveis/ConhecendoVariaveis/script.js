/**Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.
 
 * 
 */

//var
var varClima = "quente"
//Mudando atributo da variável
varClima = "frio"

console.log("Var Clima: ", varClima);

//let
let letClima = "quente"
//Mudando atributo da variável
letClima = "frio"

console.log("Let Clima: ", letClima);

//const
const constClima = "quente"
//Não é possível mudar atributo de uma const, dará TypeError.
constClima = "frio"

console.log("Const Clima: ", constClima);
