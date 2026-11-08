// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

// Convierte el texto "1, 2, 3" en un array de numeros
function leerLista(texto) {
  const partes = texto.split(",").map(function (p) {
    return p.trim();
  }).filter(function (p) {
    return p !== "";
  });
  const numeros = partes.map(Number);
  if (numeros.some(isNaN)) {
    return null;
  }
  return numeros;
}

function mayor(array) {
  return Math.max(...array);
}

function ejecutar() {
  const numeros = leerLista(document.getElementById("lista").value);

  if (numeros === null || numeros.length === 0) {
    mostrar("Error: escribe numeros separados por comas.");
    return;
  }

  mostrar("Array: [" + numeros.join(", ") + "]");
  mostrar("Numero mas grande: " + mayor(numeros));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
