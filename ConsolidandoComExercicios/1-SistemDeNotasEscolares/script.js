/*
    Sistema de notas escolares

    Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

    Desafio:

        Crie um algoritmo que transforme as notas do sistema
        numérico para sistema de notas em caracteres tipo A B C

        * de 90 para cima -   A
        * entre 80 - 89   -   B
        * entre 70 - 79   -   C
        * entre 60 - 69   -   D
        * menor que 60    -   F
*/

//Minha tentativa

// let notaDoAluno = 45;

// let notaA = notaDoAluno >= 90;
// let notaB = notaDoAluno > 79 && notaDoAluno < 90;
// let notaC = notaDoAluno > 69 && notaDoAluno < 80;
// let notaD = notaDoAluno > 59 && notaDoAluno < 70;
// let notaF = notaDoAluno < 60;

// if(notaA){
//     console.log(`Você atingiu ${notaDoAluno} pontos, sua nota A`);
// }else if(notaB){
//     console.log(`Você atingiu ${notaDoAluno} pontos, sua nota B`);
// }else if(notaC){
//     console.log(`Você atingiu ${notaDoAluno} pontos, sua nota C`);
// }else if(notaD){
//     console.log(`Você atingiu ${notaDoAluno} pontos, sua nota D`);
// }else{
//     console.log(`Você atingiu ${notaDoAluno} pontos, sua nota F`);
// }

//Versão do Mayk

function getScore(score) {

  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60 && score >= 0;

  let finalScore;

  if (scoreA) {
    finalScore = "A";
  } else if (scoreB) {
    finalScore = "B";
  } else if (scoreC) {
    finalScore = "C";
  } else if (scoreD) {
    finalScore = "D";
  } else if (scoreF) {
    finalScore = "F";
  } else {
    finalScore = "Nota inválida";
  }

  return `nota ${finalScore}`;
}

console.log(getScore(101));
console.log(getScore(-1));
console.log(getScore(0));
console.log(getScore(1));
console.log(getScore(69));
console.log(getScore(45));
console.log(getScore(60));
console.log(getScore(61));
console.log(getScore(75));
console.log(getScore(85));
console.log(getScore(85));


