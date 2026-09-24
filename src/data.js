export const USER_INITIAL = {
  id: 1,
  nombre: "Laura",
  apellido: "Méndez",
  rol: "agente",
  email: "laura@viajes.com",
  tel: "+52 55 1234 5678",
  agencia: "Viajes del Sol",
};

export const VUELOS_INITIAL = [
  { num: "AM006", aero: "Aeroméxico",     sal: "MEX", lle: "CDG", fecha: "2025-06-15 08:30", tipo: "Directo",  tarifa: 12500 },
  { num: "IB340", aero: "Iberia",         sal: "MEX", lle: "CDG", fecha: "2025-06-15 11:45", tipo: "1 escala", tarifa: 9800  },
  { num: "AF440", aero: "Air France",     sal: "MEX", lle: "CDG", fecha: "2025-06-15 22:10", tipo: "Directo",  tarifa: 15200 },
  { num: "JL012", aero: "Japan Airlines", sal: "MEX", lle: "NRT", fecha: "2025-06-20 14:00", tipo: "Directo",  tarifa: 18900 },
];

export const HOTELES_INITIAL = [
  { nombre: "Hotel Central", tipo: "Hotel",  precio: 1800, dist: 1.2, calif: 4.1 },
  { nombre: "Lux Palace",    tipo: "Hotel",  precio: 4500, dist: 0.5, calif: 4.8 },
  { nombre: "Hostal Norte",  tipo: "Hostal", precio: 900,  dist: 3.5, calif: 3.5 },
  { nombre: "Sakura Inn",    tipo: "Ryokan", precio: 2200, dist: 2.0, calif: 4.6 },
];