//Exercicios

//1. Declare uma variável com o nome weight
    // let weight;

//2. Que tipo é a variável acima? 
    // console.log(typeof weight); //undefined

/**
 *3. Declare variáveis e atribua valores para cada tipo de dado
 *  name: String
 *  age: Number (int)
 *  stars: Number (float)
 *  isSubscribed: Boolean
 */
    let name = "Leonam";
    let age = 24;
    let stars = 4.5;
    let isSubscribed = true;


 /**
  * 4. A variável student abaixo é de que tipo de dados?
  * 
  * 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
  * 
  * 4.2 Mostre no console a seguinte mensagem:
  * 
  *     <name> de idade <age> pesa <weight> kg.
  *     
  *     Atenção, substitua <name>, <age>, <weight> pelos valores de cada propriedade do objeto
  */

 //4.1
    let student = {
        name: "Leonam",
        age: 24,
        weight: 66.7,
        isSubscribed: true,
    }

    //console.log(typeof student);

//4.2
    //console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/*
    5.Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio.
*/
    let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
    students = [
        student
    ]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/ 
   // console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
    const john = {
        name: "john",
        age: 23,
        weight: 74.8,
        isSubscribed: false,
    }

    students[1] = john

    //console.log(students[1]);

/*
    9. Sem rodar o código respondar qual é a resposdo do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1;

    let resposta = "undefined" //Pois o console.log() veem antes da declaração e atribuição da variável;

    let respostaAcertada = resposta == console.log(a)

    console.log(respostaAcertada);
*/

console.log(a);
var a = 1;