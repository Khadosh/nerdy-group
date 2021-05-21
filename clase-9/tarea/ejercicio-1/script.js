/* 
1- 
a) Escribir un programa que solicite la edad
b) y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
c) si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = prompt('edad');

if (Number.isNaN(+edad)) {
  alert('Pone edad bien, ura.')
} else if (edad >= 18) {
  alert('Ya puede conducir');
} else {
  alert('Deje de jode, vaya a juga a los muñecos')
}