//For in

let person = {
   name: "jonh",
   age: 30,
   weight: 88.6
}

for (const property in person) {
   
   console.log(property);
   console.log(person[property]);
}