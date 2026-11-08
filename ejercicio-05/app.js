// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function ejecutar() {
  const texto = prompt("Escribe un numero:");

  if (texto === null || texto.trim() === "") {
    mostrar("Error: no has escrito nada.");
    return;
  }

  const numero = Number(texto);

  if (isNaN(numero)) {
    mostrar("Error: \"" + texto + "\" no es un numero.");
    return;
  }

  // Si el resto de dividir entre 2 es 0, es par (el 0 tambien es par)
  if (numero % 2 === 0) {
    mostrar("El " + numero + " es PAR.");
  } else {
    mostrar("El " + numero + " es IMPAR.");
  }
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
