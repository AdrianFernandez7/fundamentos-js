// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

// Devuelve un entero entre min y max, los dos incluidos
function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ejecutar() {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || !Number.isInteger(min) || !Number.isInteger(max)) {
    mostrar("Error: escribe dos numeros enteros.");
    return;
  }
  if (min > max) {
    mostrar("Error: el minimo no puede ser mayor que el maximo.");
    return;
  }

  const resultados = [];
  let fuera = false;
  for (let i = 0; i < 20; i++) {
    const n = azar(min, max);
    resultados.push(n);
    if (n < min || n > max) {
      fuera = true;
    }
  }

  mostrar("20 numeros entre " + min + " y " + max + ":");
  mostrar(resultados.join(", "));
  mostrar("Alguno fuera del intervalo: " + (fuera ? "SI" : "NO"));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
