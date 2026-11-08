// Muestra en la pagina si hay navegador. En Node no existe document.
function mostrar(texto) {
  if (typeof document !== "undefined") {
    document.getElementById("salida").textContent += texto + "\n";
  }
}

const texto = "Hola";
const numero = 42;
const activo = true;
const valorNulo = null;
let sinDefinir;
const lista = [1, 2, 3];
const persona = { nombre: "Ana", edad: 20 };

function ejecutar() {
  const valores = {
    texto: texto,
    numero: numero,
    activo: activo,
    valorNulo: valorNulo,
    sinDefinir: sinDefinir,
    lista: lista,
    persona: persona
  };

  for (const nombre in valores) {
    const valor = valores[nombre];
    // typeof de null da "object" (es un fallo historico de JavaScript)
    const linea = nombre + " = " + JSON.stringify(valor) + " -> tipo: " + typeof valor;
    mostrar(linea);
    console.log(linea);
  }

  console.log("console.log: mensaje normal");
  console.info("console.info: mensaje informativo");
  console.error("console.error: mensaje de error");
  console.debug("console.debug: mensaje de depuracion");
  mostrar("Mira la consola para ver log, info, error y debug.");
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
