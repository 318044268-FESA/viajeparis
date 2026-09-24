import { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function Hoteles() {
  const { hoteles, noches, setNoches, setHotel, setPage } = useApp();
  const [tipo, setTipo] = useState("Todos");
  const [orden, setOrden] = useState("Precio ↑");
  const [nochesInput, setNochesInput] = useState(String(noches));
  const [selected, setSelected] = useState(null);

  const tipos = useMemo(
    () => ["Todos", ...Array.from(new Set(hoteles.map((h) => h.tipo))).sort()],
    [hoteles]
  );

  const lista = useMemo(() => {
    let arr = [...hoteles];
    if (tipo !== "Todos") arr = arr.filter((h) => h.tipo === tipo);
    switch (orden) {
      case "Precio ↑":       arr.sort((a, b) => a.precio - b.precio); break;
      case "Precio ↓":       arr.sort((a, b) => b.precio - a.precio); break;
      case "Calificación ↓": arr.sort((a, b) => b.calif - a.calif); break;
      case "Distancia ↑":    arr.sort((a, b) => a.dist - b.dist); break;
    }
    return arr;
  }, [hoteles, tipo, orden]);

  const nActual = parseInt(nochesInput) || noches;

  const seleccionar = () => {
    if (selected === null) { alert("Selecciona un hospedaje"); return; }
    const n = parseInt(nochesInput);
    if (!isNaN(n)) setNoches(n);
    const h = lista[selected];
    setHotel(h);
    alert(`Hospedaje seleccionado\n\n${h.nombre}\n${nActual} noches`);
  };

  return (
    <Shell titulo="Comparación de hospedajes" subtitulo="Ordena por precio, calificación o distancia">
      <Card className="p-3 mb-3">
        <div className="d-flex gap-3 align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <span className="tap-muted">Tipo</span>
            <select className="form-select-tap" style={{ width: 140 }} value={tipo} onChange={(e) => setTipo(e.target.value)}>
              {tipos.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="tap-muted">Ordenar</span>
            <select className="form-select-tap" style={{ width: 160 }} value={orden} onChange={(e) => setOrden(e.target.value)}>
              <option>Precio ↑</option>
              <option>Precio ↓</option>
              <option>Calificación ↓</option>
              <option>Distancia ↑</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="tap-muted">Noches</span>
            <input className="form-control-tap" style={{ width: 70 }} value={nochesInput} onChange={(e) => setNochesInput(e.target.value)} />
          </div>
        </div>
      </Card>

      <div className="tap-card overflow-hidden mb-3">
        <table className="table-tap">
          <thead>
            <tr>
              <th>Nombre</th><th>Tipo</th><th>$/noche</th><th>Dist. centro</th>
              <th>Calificación</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((h, i) => (
              <tr key={h.nombre} className={selected === i ? "selected" : ""} onClick={() => setSelected(i)}>
                <td>{h.nombre}</td>
                <td>{h.tipo}</td>
                <td>${h.precio.toLocaleString()}</td>
                <td>{h.dist} km</td>
                <td>★ {h.calif}</td>
                <td>${(h.precio * nActual).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex gap-2">
        <button className="btn-tap-primary" onClick={seleccionar}>Seleccionar hospedaje</button>
        <button className="btn-tap-default" onClick={() => setPage("resumen")}>
          Ver resumen →
        </button>
      </div>
    </Shell>
  );
}