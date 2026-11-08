// Muestra en la pagina si hay navegador. En Node no existe document.
function mostrar(texto) {
  if (typeof document !== "undefined") {
    document.getElementById("salida").textContent += texto + "\n";
  }
}

const persona = {
  nombre: "Lucia",
  edad: 25,
  activo: true,
  aficiones: ["leer", "correr", "programar"],
  direccion: {
    calle: "Calle Mayor",
    ciudad: "Almeria"
  }
};

function ejecutar() {
  console.log(persona);
  console.table(persona);

  mostrar(JSON.stringify(persona, null, 2));
  mostrar("");
  mostrar("console.log muestra el objeto completo con sus partes anidadas.");
  mostrar("console.table lo muestra como tabla: es mas comodo para comparar valores simples.");
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
