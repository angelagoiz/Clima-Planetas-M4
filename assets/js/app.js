const lugares = [
  {
    id: "sol",
    nombre: "Sol",
    img: "assets/img/sol.png",
    desc: "La parte más caliente del Sol es su núcleo, donde las temperaturas superan los 27 millones de °F (15 millones de °C). La fotosfera tiene una temperatura de 5500 °C. La corona exterior alcanza hasta 2 millones de °C, uno de los grandes misterios solares.",
    tempActual: 5500,
    estadoActual: "Plasma",
    modifier: "hot",
    pronosticoSemanal: [
      { dia: "Lunes",    min: 5400, max: 5600, estado: "Plasma" },
      { dia: "Martes",   min: 5350, max: 5650, estado: "Plasma" },
      { dia: "Miércoles",min: 5300, max: 5700, estado: "Llamarada" },
      { dia: "Jueves",   min: 5500, max: 5800, estado: "Llamarada" },
      { dia: "Viernes",  min: 5450, max: 5750, estado: "Plasma" },
      { dia: "Sábado",   min: 5380, max: 5620, estado: "Plasma" },
      { dia: "Domingo",  min: 5320, max: 5580, estado: "Llamarada" },
    ],
  },
  {
    id: "mercurio",
    nombre: "Mercurio",
    img: "assets/img/mercurio.png",
    desc: "Mercurio experimenta temperaturas extremas por carecer de atmósfera densa. De día puede alcanzar 430 °C; de noche cae hasta -180 °C. Su temperatura promedio es 167 °C.",
    tempActual: 167,
    estadoActual: "Soleado",
    modifier: "warm",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -170, max: 420, estado: "Soleado" },
      { dia: "Martes",   min: -180, max: 430, estado: "Soleado" },
      { dia: "Miércoles",min: -160, max: 410, estado: "Soleado" },
      { dia: "Jueves",   min: -175, max: 425, estado: "Soleado" },
      { dia: "Viernes",  min: -165, max: 415, estado: "Ventoso" },
      { dia: "Sábado",   min: -170, max: 420, estado: "Soleado" },
      { dia: "Domingo",  min: -180, max: 430, estado: "Ventoso" },
    ],
  },
  {
    id: "venus",
    nombre: "Venus",
    img: "assets/img/venus.png",
    desc: "Venus es el planeta más caliente del sistema solar por su efecto invernadero extremo, con temperaturas superficiales que alcanzan los 464 °C incluso de noche.",
    tempActual: 464,
    estadoActual: "Tormentoso",
    modifier: "hot",
    pronosticoSemanal: [
      { dia: "Lunes",    min: 460, max: 470, estado: "Tormentoso" },
      { dia: "Martes",   min: 458, max: 468, estado: "Tormentoso" },
      { dia: "Miércoles",min: 462, max: 472, estado: "Ácido" },
      { dia: "Jueves",   min: 461, max: 469, estado: "Tormentoso" },
      { dia: "Viernes",  min: 459, max: 467, estado: "Ácido" },
      { dia: "Sábado",   min: 463, max: 471, estado: "Tormentoso" },
      { dia: "Domingo",  min: 460, max: 466, estado: "Ácido" },
    ],
  },
  {
    id: "tierra",
    nombre: "Tierra",
    img: "assets/img/tierra.png",
    desc: "Nuestro planeta tiene una temperatura media de 15 °C. Registra extremos desde -89 °C en la Antártida hasta +56,7 °C en el Valle de la Muerte.",
    tempActual: 15,
    estadoActual: "Nublado",
    modifier: "mild",
    pronosticoSemanal: [
      { dia: "Lunes",    min: 10, max: 22, estado: "Soleado" },
      { dia: "Martes",   min: 12, max: 24, estado: "Soleado" },
      { dia: "Miércoles",min:  8, max: 18, estado: "Lluvioso" },
      { dia: "Jueves",   min:  9, max: 17, estado: "Nublado" },
      { dia: "Viernes",  min: 11, max: 20, estado: "Soleado" },
      { dia: "Sábado",   min: 13, max: 23, estado: "Soleado" },
      { dia: "Domingo",  min:  7, max: 16, estado: "Lluvioso" },
    ],
  },
  {
    id: "marte",
    nombre: "Marte",
    img: "assets/img/marte.png",
    desc: "La temperatura media de Marte es -65 °C. Puede alcanzar 20 °C al mediodía en el ecuador en verano, pero cae a -153 °C durante la noche. Frecuentes tormentas de polvo.",
    tempActual: -65,
    estadoActual: "Tormenta de polvo",
    modifier: "cold",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -90,  max: -40, estado: "Tormenta de polvo" },
      { dia: "Martes",   min: -85,  max: -35, estado: "Despejado" },
      { dia: "Miércoles",min: -95,  max: -50, estado: "Tormenta de polvo" },
      { dia: "Jueves",   min: -80,  max: -30, estado: "Despejado" },
      { dia: "Viernes",  min: -75,  max: -25, estado: "Despejado" },
      { dia: "Sábado",   min: -88,  max: -40, estado: "Tormenta de polvo" },
      { dia: "Domingo",  min: -92,  max: -45, estado: "Despejado" },
    ],
  },
  {
    id: "jupiter",
    nombre: "Júpiter",
    img: "assets/img/jupiter.png",
    desc: "Júpiter tiene una temperatura media de -110 °C en sus nubes superiores. Su Gran Mancha Roja es una tormenta activa hace siglos. Sin superficie sólida definida.",
    tempActual: -110,
    estadoActual: "Tormenta",
    modifier: "cold",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -120, max: -100, estado: "Tormenta" },
      { dia: "Martes",   min: -115, max: -105, estado: "Tormenta" },
      { dia: "Miércoles",min: -118, max: -102, estado: "Ventoso" },
      { dia: "Jueves",   min: -112, max:  -98, estado: "Tormenta" },
      { dia: "Viernes",  min: -110, max:  -95, estado: "Ventoso" },
      { dia: "Sábado",   min: -116, max: -100, estado: "Tormenta" },
      { dia: "Domingo",  min: -119, max: -103, estado: "Tormenta" },
    ],
  },
  {
    id: "saturno",
    nombre: "Saturno",
    img: "assets/img/saturno.png",
    desc: "Saturno tiene una temperatura media de -140 °C. Es famoso por sus espectaculares anillos. Su atmósfera de hidrógeno y helio genera vientos de hasta 1800 km/h.",
    tempActual: -140,
    estadoActual: "Ventoso",
    modifier: "cold",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -150, max: -130, estado: "Ventoso" },
      { dia: "Martes",   min: -145, max: -135, estado: "Ventoso" },
      { dia: "Miércoles",min: -148, max: -132, estado: "Tormenta" },
      { dia: "Jueves",   min: -142, max: -128, estado: "Ventoso" },
      { dia: "Viernes",  min: -140, max: -125, estado: "Despejado" },
      { dia: "Sábado",   min: -147, max: -130, estado: "Ventoso" },
      { dia: "Domingo",  min: -150, max: -135, estado: "Tormenta" },
    ],
  },
  {
    id: "urano",
    nombre: "Urano",
    img: "assets/img/urano.png",
    desc: "Urano es el planeta más frío del sistema solar con una temperatura media de -195 °C. Está inclinado casi 98° y su atmósfera contiene metano que le da su color azul-verdoso.",
    tempActual: -195,
    estadoActual: "Helado",
    modifier: "frozen",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -200, max: -188, estado: "Helado" },
      { dia: "Martes",   min: -198, max: -190, estado: "Helado" },
      { dia: "Miércoles",min: -202, max: -186, estado: "Nublado" },
      { dia: "Jueves",   min: -195, max: -185, estado: "Helado" },
      { dia: "Viernes",  min: -197, max: -187, estado: "Nublado" },
      { dia: "Sábado",   min: -200, max: -190, estado: "Helado" },
      { dia: "Domingo",  min: -196, max: -188, estado: "Helado" },
    ],
  },
  {
    id: "neptuno",
    nombre: "Neptuno",
    img: "assets/img/neptuno.png",
    desc: "Neptuno es uno de los planetas más fríos con -200 °C de media. Sus vientos alcanzan los 2100 km/h, los más rápidos del sistema solar. Su tormenta 'Gran Mancha Oscura' es similar a la de Júpiter.",
    tempActual: -200,
    estadoActual: "Tormenta helada",
    modifier: "frozen",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -210, max: -190, estado: "Tormenta helada" },
      { dia: "Martes",   min: -205, max: -195, estado: "Tormenta helada" },
      { dia: "Miércoles",min: -208, max: -192, estado: "Ventoso" },
      { dia: "Jueves",   min: -200, max: -188, estado: "Tormenta helada" },
      { dia: "Viernes",  min: -202, max: -190, estado: "Ventoso" },
      { dia: "Sábado",   min: -207, max: -193, estado: "Tormenta helada" },
      { dia: "Domingo",  min: -210, max: -196, estado: "Tormenta helada" },
    ],
  },
  {
    id: "55-cancri-e",
    nombre: "55 Cancri e",
    img: "assets/img/55 Cancri e.png",
    desc: "55 Cancri e es un exoplaneta super-Tierra rocoso a 41 años luz, con temperaturas que superan los 2000 °C. Se especula que puede tener grafito y diamante en su composición.",
    tempActual: 2000,
    estadoActual: "Magma",
    modifier: "hot",
    pronosticoSemanal: [
      { dia: "Lunes",    min: 1900, max: 2100, estado: "Magma" },
      { dia: "Martes",   min: 1950, max: 2150, estado: "Magma" },
      { dia: "Miércoles",min: 1880, max: 2080, estado: "Erupción" },
      { dia: "Jueves",   min: 2000, max: 2200, estado: "Erupción" },
      { dia: "Viernes",  min: 1920, max: 2120, estado: "Magma" },
      { dia: "Sábado",   min: 1960, max: 2060, estado: "Magma" },
      { dia: "Domingo",  min: 1990, max: 2090, estado: "Erupción" },
    ],
  },
  {
    id: "HD_189733_b",
    nombre: "HD 189733 b",
    img: "assets/img/HD_189733_b.png",
    desc: "HD 189733 b es un Júpiter caliente azul cobalto a 63 años luz. Su temperatura media es 1200 °C y llueven cristales de sílice a más de 9000 km/h.",
    tempActual: 1200,
    estadoActual: "Lluvia de silicatos",
    modifier: "hot",
    pronosticoSemanal: [
      { dia: "Lunes",    min: 1150, max: 1250, estado: "Lluvia de silicatos" },
      { dia: "Martes",   min: 1180, max: 1270, estado: "Lluvia de silicatos" },
      { dia: "Miércoles",min: 1160, max: 1240, estado: "Ventisca" },
      { dia: "Jueves",   min: 1190, max: 1280, estado: "Lluvia de silicatos" },
      { dia: "Viernes",  min: 1170, max: 1260, estado: "Ventisca" },
      { dia: "Sábado",   min: 1155, max: 1245, estado: "Lluvia de silicatos" },
      { dia: "Domingo",  min: 1185, max: 1275, estado: "Lluvia de silicatos" },
    ],
  },
  {
    id: "OGLE-2005-BLG-390Lb",
    nombre: "OGLE-2005-BLG-390Lb",
    img: "assets/img/OGLE-2005-BLG-390Lb.png",
    desc: "Conocido como 'Hoth', este exoplaneta a 21.000 años luz tiene una temperatura media de -220 °C. Es uno de los planetas más fríos conocidos fuera del sistema solar.",
    tempActual: -220,
    estadoActual: "Congelado",
    modifier: "frozen",
    pronosticoSemanal: [
      { dia: "Lunes",    min: -225, max: -215, estado: "Congelado" },
      { dia: "Martes",   min: -222, max: -218, estado: "Congelado" },
      { dia: "Miércoles",min: -228, max: -212, estado: "Ventisca" },
      { dia: "Jueves",   min: -220, max: -210, estado: "Congelado" },
      { dia: "Viernes",  min: -223, max: -213, estado: "Ventisca" },
      { dia: "Sábado",   min: -226, max: -216, estado: "Congelado" },
      { dia: "Domingo",  min: -221, max: -211, estado: "Congelado" },
    ],
  },
];
 

function obtenerLugarPorId(id) {
  for (let i = 0; i < lugares.length; i++) {
    if (lugares[i].id === id) {
      return lugares[i];
    }
  }
  return null;
}
 


function calcularEstadisticas(pronostico) {
  if (!pronostico || pronostico.length === 0) {
    return null;
  }
 
  let minGlobal = pronostico[0].min;
  let maxGlobal = pronostico[0].max;
  let sumaPromedios = 0;
  const conteoEstados = {};
 
  for (let i = 0; i < pronostico.length; i++) {
    const dia = pronostico[i];
 
    // Mínimo global
    if (dia.min < minGlobal) {
      minGlobal = dia.min;
    }
 
    // Máximo global
    if (dia.max > maxGlobal) {
      maxGlobal = dia.max;
    }
 
    // Suma de promedios diarios para el promedio semanal
    const promedioDia = (dia.min + dia.max) / 2;
    sumaPromedios += promedioDia;
 
    // Conteo por tipo de clima
    if (conteoEstados[dia.estado] === undefined) {
      conteoEstados[dia.estado] = 1;
    } else {
      conteoEstados[dia.estado]++;
    }
  }
 
  const promedio = Math.round(sumaPromedios / pronostico.length);
 
  // Determinar el estado más frecuente
  let estadoMasFrecuente = "";
  let maxConteo = 0;
  for (const estado in conteoEstados) {
    if (conteoEstados[estado] > maxConteo) {
      maxConteo = conteoEstados[estado];
      estadoMasFrecuente = estado;
    }
  }
 
  // Generar resumen textual basado en los datos
  let resumen = "";
  const totalDias = pronostico.length;
  const proporcionMax = maxConteo / totalDias;
 
  if (proporcionMax >= 0.7) {
    resumen = `Semana mayormente ${estadoMasFrecuente.toLowerCase()}.`;
  } else if (proporcionMax >= 0.4) {
    resumen = `Semana con predominio de condiciones ${estadoMasFrecuente.toLowerCase()}.`;
  } else {
    resumen = `Semana variable, con varios tipos de clima.`;
  }
 
  // Añadir contexto de temperatura
  if (promedio > 1000) {
    resumen += " Temperaturas extremadamente altas: condiciones letales.";
  } else if (promedio > 100) {
    resumen += " Calor abrasador sin posibilidad de vida conocida.";
  } else if (promedio > 0) {
    resumen += " Temperaturas cálidas sobre el punto de congelación.";
  } else if (promedio > -50) {
    resumen += " Semana fría pero con rangos moderados.";
  } else if (promedio > -150) {
    resumen += " Semana muy fría, extremos gélidos.";
  } else {
    resumen += " Temperaturas criogénicas: frío extremo.";
  }
 
  return {
    min: minGlobal,
    max: maxGlobal,
    promedio,
    conteoEstados,
    estadoMasFrecuente,
    resumen,
  };
}


function calcularEstadisticas(pronostico) {
  if (!pronostico || pronostico.length === 0) {
    return null;
  }
 
  let minGlobal = pronostico[0].min;
  let maxGlobal = pronostico[0].max;
  let sumaPromedios = 0;
  const conteoEstados = {};
 
  for (let i = 0; i < pronostico.length; i++) {
    const dia = pronostico[i];
 
    // Mínimo global
    if (dia.min < minGlobal) {
      minGlobal = dia.min;
    }
 
    // Máximo global
    if (dia.max > maxGlobal) {
      maxGlobal = dia.max;
    }
 
    // Suma de promedios diarios para el promedio semanal
    const promedioDia = (dia.min + dia.max) / 2;
    sumaPromedios += promedioDia;
 
    // Conteo por tipo de clima
    if (conteoEstados[dia.estado] === undefined) {
      conteoEstados[dia.estado] = 1;
    } else {
      conteoEstados[dia.estado]++;
    }
  }
 
  const promedio = Math.round(sumaPromedios / pronostico.length);
 
  // Determinar el estado más frecuente
  let estadoMasFrecuente = "";
  let maxConteo = 0;
  for (const estado in conteoEstados) {
    if (conteoEstados[estado] > maxConteo) {
      maxConteo = conteoEstados[estado];
      estadoMasFrecuente = estado;
    }
  }
 
  // Generar resumen textual basado en los datos
  let resumen = "";
  const totalDias = pronostico.length;
  const proporcionMax = maxConteo / totalDias;
 
  if (proporcionMax >= 0.7) {
    resumen = `Semana mayormente ${estadoMasFrecuente.toLowerCase()}.`;
  } else if (proporcionMax >= 0.4) {
    resumen = `Semana con predominio de condiciones ${estadoMasFrecuente.toLowerCase()}.`;
  } else {
    resumen = `Semana variable, con varios tipos de clima.`;
  }
 
  // Añadir contexto de temperatura
  if (promedio > 1000) {
    resumen += " Temperaturas extremadamente altas: condiciones letales.";
  } else if (promedio > 100) {
    resumen += " Calor abrasador sin posibilidad de vida conocida.";
  } else if (promedio > 0) {
    resumen += " Temperaturas cálidas sobre el punto de congelación.";
  } else if (promedio > -50) {
    resumen += " Semana fría pero con rangos moderados.";
  } else if (promedio > -150) {
    resumen += " Semana muy fría, extremos gélidos.";
  } else {
    resumen += " Temperaturas criogénicas: frío extremo.";
  }
 
  return {
    min: minGlobal,
    max: maxGlobal,
    promedio,
    conteoEstados,
    estadoMasFrecuente,
    resumen,
  };
}
 

//Color

const colorMap = {
  hot: {
    bg: "rgba(239,68,68,0.25)",
    color: "#fca5a5",
    border: "rgba(239,68,68,0.3)",
  },
  warm: {
    bg: "rgba(249,115,22,0.25)",
    color: "#fdba74",
    border: "rgba(249,115,22,0.3)",
  },
  mild: {
    bg: "rgba(34,197,94,0.2)",
    color: "#86efac",
    border: "rgba(34,197,94,0.3)",
  },
  cold: {
    bg: "rgba(56,189,248,0.2)",
    color: "#7dd3fc",
    border: "rgba(56,189,248,0.3)",
  },
  frozen: {
    bg: "rgba(129,140,248,0.2)",
    color: "#c4b5fd",
    border: "rgba(129,140,248,0.3)",
  },
};
 

