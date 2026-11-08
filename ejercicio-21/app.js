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

function mayoresQue(array, valor) {
  return array.filter(function (n) {
    return n > valor; // > estricto: el igual no entra
  });
}

function ejecutar() {
  const numeros = leerLista(document.getElementById("lista").value);
  const textoLimite = document.getElementById("limite").value;

  if (numeros === null || numeros.length === 0) {
    mostrar("Error: escribe numeros separados por comas.");
    return;
  }
  if (textoLimite.trim() === "" || isNaN(Number(textoLimite))) {
    mostrar("Error: el valor limite debe ser un numero.");
    return;
  }

  const limite = Number(textoLimite);
  mostrar("Original: [" + numeros.join(", ") + "]");
  mostrar("Limite: " + limite);
  mostrar("Mayores que " + limite + ": [" + mayoresQue(numeros, limite).join(", ") + "]");
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
