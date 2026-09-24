import { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function Vuelos() {
  const { vuelos, setVuelo, setPage } = useApp();
  const [aero, setAero] = useState("Todas");
  const [tipo, setTipo] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const aerolineas = useMemo(
    () => ["Todas", ...Array.from(new Set(vuelos.map((v) => v.aero))).sort()],
    [vuelos]
  );

  const filtrados = useMemo(
    () =>
      vuelos.filter(
        (v) =>
          (aero === "Todas" || v.aero === aero) &&
          (tipo === "Todos" || v.tipo === tipo)
      ),
    [vuelos, aero, tipo]
  );

  const seleccionar = () => {
    if (selected === null) { alert("Selecciona un vuelo"); return; }
    const v = filtrados[selected];
    setVuelo(v);
    alert(`Vuelo seleccionado\n\n${v.aero} ${v.num}\n$${v.tarifa.toLocaleString()}`);
  };

  return (
    <Shell titulo="Comparación de vuelos" subtitulo="Filtra y selecciona el vuelo para el paquete">
      <Card className="p-3 mb-3">
        <div className="d-flex gap-3 align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <span className="tap-muted">Aerolínea</span>
            <select className="form-select-tap" style={{ width: 160 }} value={aero} onChange={(e) => setAero(e.target.value)}>
              {aerolineas.map((a) => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="tap-muted">Tipo</span>
            <select className="form-select-tap" style={{ width: 140 }} value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option>Todos</option>
              <option>Directo</option>
              <option>1 escala</option>
            </select>
          </div>
          <button className="btn-tap-default" onClick={() => { setAero("Todas"); setTipo("Todos"); }}>
            Aplicar
          </button>
        </div>
      </Card>

      <div className="tap-card overflow-hidden mb-3">
        <table className="table-tap">
          <thead>
            <tr>
              <th>Vuelo</th><th>Aerolínea</th><th>Ruta</th><th>Fecha</th><th>Tipo</th><th>Tarifa</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((v, i) => (
              <tr key={v.num} className={selected === i ? "selected" : ""} onClick={() => setSelected(i)}>
                <td>{v.num}</td>
                <td>{v.aero}</td>
                <td>{v.sal} → {v.lle}</td>
                <td>{v.fecha}</td>
                <td>{v.tipo}</td>
                <td>${v.tarifa.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex gap-2">
        <button className="btn-tap-primary" onClick={seleccionar}>Seleccionar vuelo</button>
        <button className="btn-tap-default" onClick={() => setPage("hoteles")}>
          Continuar a hospedajes →
        </button>
      </div>
    </Shell>
  );
}