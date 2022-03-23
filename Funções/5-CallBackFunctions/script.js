/*
   Uma callback function é uma função que está sendo passada para outra função como parâmetro.
*/

function sayMyName(name){
   console.log("Antes de executar a função callBack");

   name()

   console.log("Depois de executar a função callBack");
}

sayMyName(
   () => {
      console.log("Estou numa callBack");
   }
)