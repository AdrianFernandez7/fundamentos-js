// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function celsiusAFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

function ejecutar() {
  const texto = document.getElementById("celsius").value;

  if (texto.trim() === "" || isNaN(Number(texto))) {
    mostrar("Error: escribe un numero.");
    return;
  }

  const c = Number(texto);
  mostrar(c + " C = " + celsiusAFahrenheit(c) + " F");
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
