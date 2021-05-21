/* 
  4- 
  A) Realiza un script que pida números hasta que se pulse “cancelar”.
  B) Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
  Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let num = prompt('ingrese un nro');

while(num !== null) {
  if(Number.isNaN(num)) {
    num = prompt('pone nro valido')
  } else {
    suma += parseInt(num);
    num = prompt('ingrese otro nro');
  }
}

document.write('la suma es: ' + suma);