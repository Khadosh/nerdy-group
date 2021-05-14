/* Crear un jueguito en el que tengamos que adivinar un nro del 1 al 100
  => la compu nos tiene que decir si el numero random es mayor o menor al que elegimos
*/

const random = Math.floor(Math.random() * 101);

let number;

while((number = prompt('Ingrese un nro del 1 al 100')) != random) {
  if(random > number) {
    console.log('anda parriba');  
  } else {
    console.log('anda pabajo');
  }
}

console.log('Yep');