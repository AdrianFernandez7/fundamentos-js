// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function palabraMasLarga(frase) {
  const palabras = frase.trim().split(/\s+/);
  let larga = palabras[0];

  for (let i = 1; i < palabras.length; i++) {
    // Con > estricto, en caso de empate gana la primera
    if (palabras[i].length > larga.length) {
      larga = palabras[i];
    }
  }
  return larga;
}

function ejecutar() {
  const frase = document.getElementById("frase").value;

  if (frase.trim() === "") {
    mostrar("Error: escribe una frase.");
    return;
  }

  const palabra = palabraMasLarga(frase);
  mostrar("Frase: " + frase);
  mostrar("Palabra mas larga: " + palabra + " (" + palabra.length + " letras)");
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
