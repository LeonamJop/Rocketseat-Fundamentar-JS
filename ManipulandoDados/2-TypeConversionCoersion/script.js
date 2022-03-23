/*
   Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número
*/

/*
   Type conversion (typecasting) vs Type Coersion

      *Alteraçãp de um tipo de dado para outro.
*/

//Type Coersion
// console.log('9' + 5); //JS força o number 5 a se tornar uma String para concatenar com o string 9.

//Type conversion
// console.log(Number('9') + 5); //Eu forço o string 9 a se tornar um Number para somar com o number 5.

/*
   Manipulando Strings em números
      É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().
*/

//Transformar um String em número e um número em uma String
let string = "123"
// console.log('String para Number: ',Number(string));

let number = 321
// console.log('Number para String: ',String(number));

/*
   Contando caracteres e digitos
      Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.
*/

//Contar quantos caractéres tem uma palavra e quantos digitos tem um número.

   let word = 'paralelepipedo'
   // console.log(word.length);

   let wordNumber = 1234
   // console.log(String(wordNumber).length);

//Transformar um número quebrado com duas casa decimais e trocar o ponto por vírgula

let numberFloat = 345.23324324
// console.log(numberFloat.toFixed(2).replace('.',','));

/*
   Maiúsculas e minúsculas
   Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/

//Transformar letras minusculas em maiusculas e o contrário também

let letrasMaiusculas = 'LEONAM'
// console.log('Maiusculas para minusculas: ',letrasMaiusculas.toLowerCase());


let letrasMinuculas = 'leonam'
// console.log('Minusculas para Maiusculas: ',letrasMaiusculas.toUpperCase()); 


/*
   Manipulando Strings e Arrays
      Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso transforme o array em texto e onde era espaço coloque "_".

let palavra = 'Estudar é muito bacana'
console.log(palavra);

let palavraArray = palavra.split(" ");
console.log(palavraArray);

let palavraJunta = palavraArray.join('')
console.log(palavraJunta);

/*
   Encontrando palavras em frases
      Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.
*/

//Verificar se o texto contém a palavra amor

let phrase = 'Eu quero viver o Amor!'
// console.log(phrase.includes('Amor'));

/*
   Criando array com construtor
      Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").
*/

//Criar um array com construtor

let myArray = new Array('a','b','c');
// console.log(myArray);


/*
   Elementos do Array
      Para contar a quantidade de elementos em um array pode-se usar o método length.
*/

//Contar elementos de um Array
// console.log(['a','b','c'].length);


/*
   Strings para arrays
      Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").
*/

//Transformar um cadeida de caracteres em elementos de um Array.
let frase = "developer"

let fraseArray = Array.from(frase)

// console.log(fraseArray);
