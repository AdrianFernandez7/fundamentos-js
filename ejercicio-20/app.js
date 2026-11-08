// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function convertir(texto) {
  return {
    mayusculas: texto.toUpperCase(),
    minusculas: texto.toLowerCase()
  };
}

function ejecutar() {
  const texto = document.getElementById("texto").value;

  if (texto === "") {
    mostrar("Error: escribe un texto.");
    return;
  }

  const resultado = convertir(texto);
  mostrar("Original:    " + texto);
  mostrar("Mayusculas:  " + resultado.mayusculas);
  mostrar("Minusculas:  " + resultado.minusculas);
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
