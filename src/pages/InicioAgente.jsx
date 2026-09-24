import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card, StatCard, MenuCard } from "../components/Card";

export default function InicioAgente() {
  const { vuelos, hoteles, noches, cobros, setPage } = useApp();

  const campos = [
    { etq: "Origen",  val: "MEX" },
    { etq: "Destino", val: "CDG" },
    { etq: "Fecha",   val: "2025-06-15" },
    { etq: "Noches",  val: "5" },
  ];

  return (
    <Shell titulo="Inicio" subtitulo="Panel del agente · búsqueda y accesos rápidos">
      <Card className="p-3 mb-3">
        <div className="tap-title mb-2">Búsqueda rápida</div>
        <div className="d-flex flex-wrap gap-3 align-items-end">
          {campos.map((c) => (
            <div key={c.etq} style={{ width: 120 }}>
              <div className="tap-muted">{c.etq}</div>
              <input className="form-control-tap mt-1" defaultValue={c.val} />
            </div>
          ))}
          <button className="btn-tap-primary" onClick={() => setPage("vuelos")}>🔍 Buscar</button>
        </div>
      </Card>

      <div className="tap-title mb-2" style={{ color: "var(--text)" }}>Resumen</div>
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3"><StatCard titulo="Vuelos disponibles" valor={vuelos.length} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Hospedajes"         valor={hoteles.length} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Noches"             valor={noches} /></div>
        <div className="col-6 col-md-3"><StatCard titulo="Cobros hoy"         valor={cobros.length} /></div>
      </div>

      <div className="tap-title mb-2" style={{ color: "var(--text)" }}>Accesos rápidos</div>
      <div className="row g-3">
        <div className="col-6 col-md-3"><MenuCard texto="✈  Comparar vuelos"      onClick={() => setPage("vuelos")} /></div>
        <div className="col-6 col-md-3"><MenuCard texto="🏨  Comparar hospedajes" onClick={() => setPage("hoteles")} /></div>
        <div className="col-6 col-md-3"><MenuCard texto="📋  Resumen del paquete" onClick={() => setPage("resumen")} /></div>
        <div className="col-6 col-md-3"><MenuCard texto="💳  Cobro"               onClick={() => setPage("cobro")} /></div>
      </div>
    </Shell>
  );
}
