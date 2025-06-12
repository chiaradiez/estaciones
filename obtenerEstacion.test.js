const obtenerEstacion = require("./obtenerEstacion");

describe("obtenerEstacion", () => {
  test("Meses de verano", () => {
    expect(obtenerEstacion("diciembre")).toBe("Verano");
    expect(obtenerEstacion("enero")).toBe("Verano");
    expect(obtenerEstacion("febrero")).toBe("Verano");
  });

  test("Meses de otoño", () => {
    expect(obtenerEstacion("marzo")).toBe("Otoño");
    expect(obtenerEstacion("abril")).toBe("Otoño");
    expect(obtenerEstacion("mayo")).toBe("Otoño");
  });

  test("Meses de invierno", () => {
    expect(obtenerEstacion("junio")).toBe("Invierno");
    expect(obtenerEstacion("julio")).toBe("Invierno");
    expect(obtenerEstacion("agosto")).toBe("Invierno");
  });

  test("Meses de primavera", () => {
    expect(obtenerEstacion("septiembre")).toBe("Primavera");
    expect(obtenerEstacion("octubre")).toBe("Primavera");
    expect(obtenerEstacion("noviembre")).toBe("Primavera");
  });

  test("Mes inválido", () => {
    expect(obtenerEstacion("noExiste")).toBe("Mes inválido");
    expect(obtenerEstacion("")).toBe("Mes inválido");
    expect(obtenerEstacion("123")).toBe("Mes inválido");
  });
});
//prueba
