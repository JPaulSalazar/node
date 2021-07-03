/*Desarrolle un programa que almacene las siguientes frutas en un arreglo: Manzana, Pera, Uva, Sandía, Banano, Melocotón, Piña, Maracuyá, Mandarina, Mango:
a. Permitir al usuario ingresar el nombre de una fruta.	
b. Si la fruta se encuentra en el arreglo, mostrar un mensaje al usuario
c. Si la fruta no se encuentra en el arreglo, mostrar un mensaje al usuario*/

const module1 = require('./tarea1')
let myArgv = process.argv.slice(2)
console.log(module1.fruits(myArgv))