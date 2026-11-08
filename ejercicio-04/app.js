// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function ejecutar() {
  const textoA = prompt("Escribe el primer numero:");
  const textoB = prompt("Escribe el segundo numero:");

  // Si cancela o deja vacio
  if (textoA === null || textoB === null || textoA.trim() === "" || textoB.trim() === "") {
    mostrar("Error: tienes que escribir los dos numeros.");
    return;
  }

  // Number() convierte el texto a numero (asi 2 + 3 da 5 y no 23)
  const a = Number(textoA);
  const b = Number(textoB);

  if (isNaN(a) || isNaN(b)) {
    mostrar("Error: alguna de las entradas no es un numero.");
    return;
  }

  const suma = a + b;
  console.log("La suma es " + suma);
  mostrar(a + " + " + b + " = " + suma);
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
