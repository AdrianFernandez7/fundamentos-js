// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function ejecutar() {
  const texto = document.getElementById("numero").value;

  if (texto.trim() === "") {
    mostrar("Error: escribe un numero.");
    return;
  }

  const numero = Number(texto);

  if (isNaN(numero)) {
    mostrar("Error: \"" + texto + "\" no es un numero.");
    return;
  }

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
