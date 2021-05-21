/* Crear una funcion suma que reciba dos argumentos y me devuelva el valor de ambos sumado*/
function suma(nro1, nro2) {
  return nro1 + nro2
}

/* Crear una funcion suma_array que reciba un argumento que sea un array de numeros y me devuelva el valor de todos sumados */
function suma_array(nros) {
  let suma = 0;
  for(let i = 0; i < nros.length; i++) {
    suma += nros[i];
  }

  return suma;
}