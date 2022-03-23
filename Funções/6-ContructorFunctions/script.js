/*
  Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

  function Person(name) {
	   this.name = name
	   this.walk() = function() {
		   return this.name + "está andando")
	   }
   }
   const mayk = new Person("Mayk")
   const joao = new Person("João")
*/

/*
   Function() Constructor

   * Expressão new
   * Criar um novo objeto
   * this keyword
*/

function Person(name) {
   this.name = name
   this.walk = function() {
      return this.name + ' está andando'
   }
}

const leonam = new Person("Leonam")
const mayk = new Person("Mayk");

console.log(leonam.name);
console.log(mayk.walk());
