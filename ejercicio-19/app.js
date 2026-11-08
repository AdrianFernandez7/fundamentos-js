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

function promedio(array) {
  if (array.length === 0) {
    return null; // array vacio: no se puede dividir entre 0
  }
  const suma = array.reduce(function (total, n) {
    return total + n;
  }, 0);
  return suma / array.length;
}

function ejecutar() {
  const numeros = leerLista(document.getElementById("lista").value);

  if (numeros === null) {
    mostrar("Error: escribe solo numeros separados por comas.");
    return;
  }

  const resultado = promedio(numeros);
  if (resultado === null) {
    mostrar("El array esta vacio, no hay promedio.");
    return;
  }

  mostrar("Array: [" + numeros.join(", ") + "]");
  mostrar("Promedio: " + resultado);
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
