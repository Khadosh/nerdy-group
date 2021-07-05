
function saludar() {
  const nombre = document.querySelector('#name').value;
  alert(`hola ${nombre}`);
}

function calcularIMC() {
  const nombre = document.querySelector('#name').value;
  const altura = document.querySelector('#height').value;
  const peso = document.querySelector('#weight').value; 

  const imc = +peso / ((+altura) * (+altura));

  const result = document.querySelector("#resultado");
  result.innerText = `El IMC de ${nombre} es: ${imc}`;

  const boton = document.querySelector("#borrar");
  boton.className = "visible";
}

function borrarValores() {
  const elementosABorrar = ['name', 'height', 'weight']
  for(let i = 0; i < elementosABorrar.length; i++) {
    document.querySelector(`#${elementosABorrar[i]}`).value = '';
  }

  document.querySelector("#resultado").innerText='';
  
  const boton = document.querySelector("#borrar");
  boton.className = "invisible";
}