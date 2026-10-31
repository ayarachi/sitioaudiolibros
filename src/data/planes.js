import planBasico from "../assets/planes/plan-basico.jpg";
import planPremium from "../assets/planes/plan-premium.jpg";
import planFamiliar from "../assets/planes/plan-familiar.jpg";

export const planes = [
  {
    id: 1,
    nombre: "Plan Básico",
    precio: "$4,99",
    promo: "$0,99 los primeros 3 meses",
    descripcion: "Ideal para empezar a escuchar.",
    beneficios: [
      "1 audiolibro por mes",
      "Escucha sin conexión",
      "Cancelá cuando quieras",
    ],
    imagen: planBasico,
    destacado: false,
  },
  {
    id: 2,
    nombre: "Plan Premium",
    precio: "$9,99",
    promo: "$0,99 los primeros 3 meses",
    descripcion: "Para quienes escuchan todos los días.",
    beneficios: [
      "Audiolibros ilimitados",
      "Escucha sin conexión",
      "Sin publicidad",
      "Calidad de audio alta",
    ],
    imagen: planPremium,
    destacado: true,
  },
  {
    id: 3,
    nombre: "Plan Familiar",
    precio: "$14,99",
    promo: "$0,99 los primeros 3 meses",
    descripcion: "Hasta 5 perfiles para toda la familia.",
    beneficios: [
      "Todo lo del Premium",
      "5 perfiles",
      "Sección infantil",
      "Control parental",
    ],
    imagen: planFamiliar,
    destacado: false,
  },
];
