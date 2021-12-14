let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let nombre: string[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];
function mes(semana: number): string {
  if (semana <= 4) {
    return "enero";
  } else if (semana <= 8) {
    return "febrero";
  } else {
    return "marzo";
  }
}
function ventaMaxima(ventas: number[], vendedor: number) {
  let ventaMax: number = 0;
  let ind: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    if (ventas[i] > ventaMax) {
      ventaMax = ventas[i];
      ind = i;
    }
  }
  console.log(
    "La venta max del vendedor",
    nombre[vendedor],
    " es ",
    ventaMax,
    "en la semana",
    ind + 1,
    "en el mes de ",
    mes(ind + 1)
  );
}
ventaMaxima(vendedor1, 0);
ventaMaxima(vendedor2, 1);
ventaMaxima(vendedor3, 2);
ventaMaxima(vendedor4, 3);
ventaMaxima(vendedor5, 4);

function ventaMinima(ventas: number[], vendedor: number) {
  let ventaMin: number = ventas[0];
  let ind: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    if (ventas[i] < ventaMin) {
      ventaMin = ventas[i];
      ind = i;
    }
  }
  console.log(
    "La venta min del vendedor",
    nombre[vendedor],
    " es ",
    ventaMin,
    "en la semana",
    ind + 1,
    "en el mes de ",
    mes(ind + 1)
  );
}
ventaMinima(vendedor1, 0);
ventaMinima(vendedor2, 1);
ventaMinima(vendedor3, 2);
ventaMinima(vendedor4, 3);
ventaMinima(vendedor5, 4);

function promSemanal(ventas: number[], vendedor: number) {
  let prom: number = 0;
  let suma: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    suma = suma + ventas[i];
  }
  prom = suma / ventas.length;
  console.log("el promedio semanal de ", nombre[vendedor], "es ", prom);
}
promSemanal(vendedor1, 0);
promSemanal(vendedor2, 1);
promSemanal(vendedor3, 2);
promSemanal(vendedor4, 3);
promSemanal(vendedor5, 4);
function promMensual(ventas: number[], vendedor: number) {
  let prom: number = 0;
  let suma: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    suma = suma + ventas[i];
  }
  prom = suma / 3;
  console.log("el promedio mensual de ", nombre[vendedor], "es ", prom);
}
promMensual(vendedor1, 0);
promMensual(vendedor2, 1);
promMensual(vendedor3, 2);
promMensual(vendedor4, 3);
promMensual(vendedor5, 4);
let i: number = 0;
function mejorVendedor(
  ventas1: number,
  ventas2: number,
  ventas3: number,
  ventas4: number,
  ventas5: number
) {
  let vendedor: string = "";
  let mont: number = 0;
  if (
    vendedor1[i] > vendedor2[i] &&
    vendedor1[i] > vendedor3[i] &&
    vendedor1[i] > vendedor4[i] &&
    vendedor1[i] > vendedor5[i]
  ) {
    vendedor = nombre[0];
    mont = ventas1;
  } else if (
    vendedor2[i] > vendedor3[i] &&
    vendedor2[i] > vendedor4[i] &&
    vendedor2[i] > vendedor5[i]
  ) {
    vendedor = nombre[1];
    mont = ventas2;
  } else if (vendedor3[i] > vendedor4[i] && vendedor3[i] > vendedor5[i]) {
    vendedor = nombre[2];
    mont = ventas3;
  } else if (vendedor4[i] > vendedor5[i]) {
    vendedor = nombre[3];
    mont = ventas4;
  } else {
    vendedor = nombre[4];
    mont = ventas5;
  }
  console.log(vendedor, "con un monto de ", mont);
}

function mejorVendedorSemanal() {
  for (i = 0; i < vendedor1.length; i++) {
    let ventasV1: number = vendedor1[i];
    let ventasV2: number = vendedor2[i];
    let ventasV3: number = vendedor3[i];
    let ventasV4: number = vendedor4[i];
    let ventasV5: number = vendedor5[i];
    console.log("el mejor vendedor de la semana", i + 1, "es:");
    mejorVendedor(ventasV1, ventasV2, ventasV3, ventasV4, ventasV5);
  }
}

mejorVendedorSemanal();

function mejorVendedorMensual() {
  let mes: number = 1;
  for (i = 0; i < vendedor1.length; i += 4) {
    let ventasVendedor1: number =
      vendedor1[i] + vendedor1[i + 1] + vendedor1[i + 2] + vendedor1[i + 3];
    let ventasVendedor2: number =
      vendedor2[i] + vendedor2[i + 1] + vendedor2[i + 2] + vendedor2[i + 3];
    let ventasVendedor3: number =
      vendedor3[i] + vendedor3[i + 1] + vendedor3[i + 2] + vendedor3[i + 3];
    let ventasVendedor4: number =
      vendedor4[i] + vendedor4[i + 1] + vendedor4[i + 2] + vendedor4[i + 3];
    let ventasVendedor5: number =
      vendedor5[i] + vendedor5[i + 1] + vendedor5[i + 2] + vendedor5[i + 3];

    console.log("el mejor vendedor en el mes ", mes, "es:");
    mejorVendedor(
      ventasVendedor1,
      ventasVendedor2,
      ventasVendedor3,
      ventasVendedor4,
      ventasVendedor5
    );
    mes++;
  }
}
mejorVendedorMensual(); //me marca que el mes dos es camila

function peorVendedor(
  ventas1: number,
  ventas2: number,
  ventas3: number,
  ventas4: number,
  ventas5: number
) {
  let vendedor: string = "";
  let mont: number = 0;
  if (
    vendedor1[i] < vendedor2[i] &&
    vendedor1[i] < vendedor3[i] &&
    vendedor1[i] < vendedor4[i] &&
    vendedor1[i] < vendedor5[i]
  ) {
    vendedor = nombre[0];
    mont = ventas1;
  } else if (
    vendedor2[i] < vendedor3[i] &&
    vendedor2[i] < vendedor4[i] &&
    vendedor2[i] < vendedor5[i]
  ) {
    vendedor = nombre[1];
    mont = ventas2;
  } else if (vendedor3[i] < vendedor4[i] && vendedor3[i] < vendedor5[i]) {
    vendedor = nombre[2];
    mont = ventas3;
  } else if (vendedor4[i] < vendedor5[i]) {
    vendedor = nombre[3];
    mont = ventas4;
  } else {
    vendedor = nombre[4];
    mont = ventas5;
  }
  console.log(vendedor, "con un monto de ", mont);
}

function peorVendedorSemanal() {
  for (i = 0; i < vendedor1.length; i++) {
    let ventasV1: number = vendedor1[i];
    let ventasV2: number = vendedor2[i];
    let ventasV3: number = vendedor3[i];
    let ventasV4: number = vendedor4[i];
    let ventasV5: number = vendedor5[i];
    console.log("el peor vendedor de la semana", i + 1, "es:");
    peorVendedor(ventasV1, ventasV2, ventasV3, ventasV4, ventasV5);
  }
}

peorVendedorSemanal();

function peorVendedorMensual() {
  let mes: number = 1;
  for (i = 0; i < vendedor1.length; i += 4) {
    let ventasVendedor1: number =
      vendedor1[i] + vendedor1[i + 1] + vendedor1[i + 2] + vendedor1[i + 3];
    let ventasVendedor2: number =
      vendedor2[i] + vendedor2[i + 1] + vendedor2[i + 2] + vendedor2[i + 3];
    let ventasVendedor3: number =
      vendedor3[i] + vendedor3[i + 1] + vendedor3[i + 2] + vendedor3[i + 3];
    let ventasVendedor4: number =
      vendedor4[i] + vendedor4[i + 1] + vendedor4[i + 2] + vendedor4[i + 3];
    let ventasVendedor5: number =
      vendedor5[i] + vendedor5[i + 1] + vendedor5[i + 2] + vendedor5[i + 3];

    console.log("el peor vendedor en el mes ", mes, "es:");
    peorVendedor(
      ventasVendedor1,
      ventasVendedor2,
      ventasVendedor3,
      ventasVendedor4,
      ventasVendedor5
    );
    mes++;
  }
}
peorVendedorMensual();
