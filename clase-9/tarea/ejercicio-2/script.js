/*
2- Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

let nota = prompt('nota')

while (Number.isNaN(+nota)) {
  nota = prompt('Introduce un numero valido')
}

if(nota <= 10 && nota >= 0) {
  if (nota < 3) alert('pete')
  else if (nota < 5) alert('menos pete')
  else if (nota < 7) alert('capito')
  else if (nota < 10) alert('muy capito')
  else alert('neeeeerd')
} else {
  alert('NOTA NO VALIDA')
}
