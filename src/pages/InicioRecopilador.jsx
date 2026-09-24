import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { StatCard, MenuCard } from "../components/Card";

export default function InicioRecopilador() {
  const { vuelos, hoteles, setPage } = useApp();
  const hora = new Date().toTimeString().slice(0, 5);

  return (
    <Shell titulo="Inicio · Recopilador" subtitulo="Carga la información que verán los agentes de viajes">
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3"><StatCard titulo="Vuelos cargados"     valor={vuelos.length} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Hospedajes cargados" valor={hoteles.length} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Última carga"        valor={hora} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Estado"              valor="Activo" /></div>
      </div>

      <div className="row g-3">
        <div className="col-6 col-md-3"><MenuCard texto="✈  Cargar vuelo"     onClick={() => setPage("cargar_vuelo")} /></div>
        <div className="col-6 col-md-3"><MenuCard texto="🏨  Cargar hospedaje" onClick={() => setPage("cargar_hotel")} /></div>
      </div>
    </Shell>
  );
}