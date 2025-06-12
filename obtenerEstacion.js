function obtenerEstacion(mes) {
  const mesEnMinuscula = mes.toLowerCase();

  switch (mesEnMinuscula) {
    case "diciembre":
    case "enero":
    case "febrero":
      return "Verano";
    case "marzo":
    case "abril":
    case "mayo":
      return "Otoño";
    case "junio":
    case "julio":
    case "agosto":
      return "Invierno";
    case "septiembre":
    case "octubre":
    case "noviembre":
      return "Primavera";
    default:
      return "Mes inválido";
  }
}

function mostrarEstacion() {
  const mes = document.getElementById("mesInput").value;
  const resultado = obtenerEstacion(mes);
  document.getElementById("resultado").innerText = resultado;
}

module.exports = obtenerEstacion;

