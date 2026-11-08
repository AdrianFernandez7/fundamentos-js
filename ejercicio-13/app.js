// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function contarPalabras(frase) {
  const limpia = frase.trim(); // quita espacios del principio y del final
  if (limpia === "") {
    return 0;
  }
  // /\s+/ separa por uno o varios espacios seguidos
  return limpia.split(/\s+/).length;
}

function ejecutar() {
  const frase = document.getElementById("frase").value;

  mostrar("Frase: \"" + frase + "\"");
  mostrar("Palabras: " + contarPalabras(frase));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
