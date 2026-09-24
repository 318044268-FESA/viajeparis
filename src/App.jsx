import { AppProvider, useApp } from "./context/AppContext";

import Login             from "./pages/Login";
import InicioAgente      from "./pages/InicioAgente";
import Vuelos            from "./pages/Vuelos";
import Hoteles           from "./pages/Hoteles";
import Resumen           from "./pages/Resumen";
import Cobro             from "./pages/Cobro";
import Usuario           from "./pages/Usuario";
import InicioRecopilador from "./pages/InicioRecopilador";
import CargarVuelo       from "./pages/CargarVuelo";
import CargarHotel       from "./pages/CargarHotel";

function Router() {
  const { page } = useApp();
  switch (page) {
    case "login":              return <Login />;
    case "inicio_agente":      return <InicioAgente />;
    case "vuelos":             return <Vuelos />;
    case "hoteles":            return <Hoteles />;
    case "resumen":            return <Resumen />;
    case "cobro":              return <Cobro />;
    case "usuario":            return <Usuario />;
    case "inicio_recopilador": return <InicioRecopilador />;
    case "cargar_vuelo":       return <CargarVuelo />;
    case "cargar_hotel":       return <CargarHotel />;
    default:                   return <Login />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}