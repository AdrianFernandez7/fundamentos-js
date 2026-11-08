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

function soloPares(array) {
  return array.filter(function (n) {
    return n % 2 === 0;
  });
}

function ejecutar() {
  const numeros = leerLista(document.getElementById("lista").value);

  if (numeros === null || numeros.length === 0) {
    mostrar("Error: escribe numeros separados por comas.");
    return;
  }

  mostrar("Original: [" + numeros.join(", ") + "]");
  mostrar("Pares:    [" + soloPares(numeros).join(", ") + "]");
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
