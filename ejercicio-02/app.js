// Muestra en la pagina si hay navegador. En Node no existe document.
function mostrar(texto) {
  if (typeof document !== "undefined") {
    document.getElementById("salida").textContent += texto + "\n";
  }
}

const MINIMO = 30;
const MAXIMO = 60;

function ejecutar() {
  const numeros = [];
  for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 101)); // de 0 a 100
  }

  console.table(numeros);

  const filtrados = numeros.filter(function (n) {
    return n >= MINIMO && n <= MAXIMO;
  });

  console.table(filtrados);

  // Comprobacion: todos deben estar dentro del intervalo
  const correcto = filtrados.every(function (n) {
    return n >= MINIMO && n <= MAXIMO;
  });

  mostrar("Array original (100 numeros):");
  mostrar(numeros.join(", "));
  mostrar("");
  mostrar("Intervalo: de " + MINIMO + " a " + MAXIMO);
  mostrar("Filtrados (" + filtrados.length + "): " + filtrados.join(", "));
  mostrar("Todos dentro del intervalo: " + (correcto ? "SI" : "NO"));
}

// En Node se ejecuta solo; en el navegador, al pulsar el boton
if (typeof document === "undefined") {
  ejecutar();
} else {
  document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("salida").textContent = "";
    ejecutar();
  });
}
