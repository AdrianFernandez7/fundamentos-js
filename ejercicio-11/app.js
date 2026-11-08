// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function ejecutar() {
  // frecuencias[n] guarda cuantas veces ha salido el numero n
  const frecuencias = [];
  for (let i = 0; i <= 20; i++) {
    frecuencias[i] = 0;
  }

  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 20) + 1; // de 1 a 20
    frecuencias[n]++;
  }

  let suma = 0;
  for (let n = 1; n <= 20; n++) {
    if (frecuencias[n] > 0) {
      mostrar("El " + n + " ha salido " + frecuencias[n] + " veces");
      suma += frecuencias[n];
    }
  }

  mostrar("");
  mostrar("Suma de frecuencias: " + suma + " (debe ser 100)");
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
