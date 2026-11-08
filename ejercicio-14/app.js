// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function esPalindromo(palabra) {
  const normal = palabra.toLowerCase();
  const invertida = normal.split("").reverse().join("");
  return normal === invertida;
}

function ejecutar() {
  const palabra = document.getElementById("palabra").value.trim();

  if (palabra === "") {
    mostrar("Error: escribe una palabra.");
    return;
  }

  if (esPalindromo(palabra)) {
    mostrar("\"" + palabra + "\" SI es un palindromo.");
  } else {
    mostrar("\"" + palabra + "\" NO es un palindromo.");
  }
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
