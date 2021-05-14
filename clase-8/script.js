const nombre = prompt('Ingrese un nombre')
const peso = prompt('Ingrese su peso')
const altura = prompt('Ingrese su altura')

const imc = peso/(altura*altura).toFixed(2)
let texto = 'El imc es de ' + nombre + ' es ' + imc + '.'

if (imc > 40) {
  texto = texto + ' Usted está pa diosito. Hágase vacuná.'
} else if (imc > 25) {
  texto = texto + ' Usted esta gordito, haga ejercicio'
}

document.write(texto)