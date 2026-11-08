// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function invertir(cadena) {
  return cadena.split("").reverse().join("");
}

function ejecutar() {
  const cadena = document.getElementById("cadena").value;

  if (cadena === "") {
    mostrar("Error: escribe una cadena.");
    return;
  }

  mostrar("Original: " + cadena);
  mostrar("Invertida: " + invertir(cadena));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
