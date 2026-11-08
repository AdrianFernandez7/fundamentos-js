// Zona de salida de la pagina
const salida = document.getElementById("salida");

function mostrar(texto) {
  salida.textContent += texto + "\n";
}

function limpiar() {
  salida.textContent = "";
}

function esPrimo(num) {
  if (num < 2) {
    return false; // el 1 no es primo
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function ejecutar() {
  const limite = Number(document.getElementById("limite").value);

  if (isNaN(limite) || !Number.isInteger(limite) || limite < 1) {
    mostrar("Error: escribe un numero entero mayor o igual que 1.");
    return;
  }

  const primos = [];
  for (let n = 1; n <= limite; n++) {
    if (esPrimo(n)) {
      primos.push(n);
    }
  }

  mostrar("Primos hasta " + limite + ": " + primos.join(", "));
}

document.getElementById("btn").addEventListener("click", function () {
  limpiar();
  ejecutar();
});
