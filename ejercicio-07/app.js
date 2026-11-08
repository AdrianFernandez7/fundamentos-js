// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function contarVocales(palabra) {
  const vocales = "aeiouáéíóúü";
  const minusculas = palabra.toLowerCase(); // asi acepta mayusculas
  let contador = 0;

  for (let i = 0; i < minusculas.length; i++) {
    if (vocales.includes(minusculas[i])) {
      contador++;
    }
  }
  return contador;
}

function ejecutar() {
  const palabra = document.getElementById("palabra").value.trim();

  if (palabra === "") {
    mostrar("Error: escribe una palabra.");
    return;
  }

  mostrar("Palabra: " + palabra);
  mostrar("Vocales: " + contarVocales(palabra));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
