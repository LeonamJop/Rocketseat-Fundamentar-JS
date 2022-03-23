/*
   Manipulando arrays
      Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/

//Manipulando arrays
 let techs = ["html", "css", "js"]
 console.log("Array de inicio: ",techs );

//Adicionar um item no fim
   techs.push("React");
   console.log("Adicionar um item no fim: ",techs);

//Adicionar um item no començo
   techs.unshift("Angular");
   console.log("Adicionar um item no començo: ",techs);

//Remover um item do fim
   // techs.pop()
   // console.log("Remover um item do fim: ",techs);

//Remover um item do començo
   // techs.shift()
   // console.log("Remover um item do començo", techs);

//Pegar apenas algums elementos do Array
   // console.log("Pegar apenas algums elementos do Array: ",techs.slice(1,3));

//Remover 1 ou mais itens em qualquer posição do Array
   // techs.splice(1,2)
   // console.log("Remover 1 ou mais itens em qualquer posição do Array: ", techs);

//Encontrar a posição de um elemento do Array
   techs.indexOf("css")
   console.log("Encontrar a posição de um elemento do Array: ",techs.indexOf("css"));

//Encontrar a posição de um elemento do Array e remove-lo
   let index = techs.indexOf("html");
   techs.splice(index, 1);
   console.log(techs);
