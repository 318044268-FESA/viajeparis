import { useState } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function Cobro() {
  const { total, cobros, setCobros, setPage } = useApp();
  const [metodo, setMetodo] = useState("Tarjeta de crédito");
  const [mod, setMod]       = useState("Pago total");

  const refInicial = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `AUTH-${hh}${mm}${ss}`;
  };
  const [ref, setRef] = useState(refInicial());

  if (!total) {
    return (
      <Shell titulo="Cobro" subtitulo="Procesa el pago del paquete">
        <Card className="p-4 mb-3 text-center">
          <div className="label-tap mb-3">Primero genera el resumen del paquete.</div>
          <button className="btn-tap-primary" onClick={() => setPage("resumen")}>
            ← Ir a resumen
          </button>
        </Card>
      </Shell>
    );
  }

  const confirmar = () => {
    const now = new Date();
    const fecha = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setCobros([...cobros, { total, met: metodo, mod, ref, fecha }]);
    alert(
      `✅ Cobro procesado\n\nMétodo: ${metodo}\nModalidad: ${mod}\nTotal: $${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}\nRef: ${ref}`
    );
    setPage("inicio_agente");
  };

  return (
    <Shell titulo="Cobro" subtitulo="Procesa el pago del paquete">
      <Card className="p-4 mb-3">
        <div className="tap-muted">Total a cobrar</div>
        <div className="tap-stat mb-3">
          ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>

        <label className="label-tap">Método de pago</label>
        <select className="form-select-tap mt-1 mb-3" style={{ maxWidth: 320 }}
                value={metodo} onChange={(e) => setMetodo(e.target.value)}>
          <option>Tarjeta de crédito</option>
          <option>Tarjeta de débito</option>
          <option>Transferencia</option>
        </select>

        <label className="label-tap">Modalidad</label>
        <select className="form-select-tap mt-1 mb-3" style={{ maxWidth: 320 }}
                value={mod} onChange={(e) => setMod(e.target.value)}>
          <option>Pago total</option>
          <option>3 cuotas</option>
          <option>6 cuotas</option>
        </select>

        <label className="label-tap">Referencia</label>
        <input className="form-control-tap mt-1 mb-4" style={{ maxWidth: 320 }}
               value={ref} onChange={(e) => setRef(e.target.value)} />

        <button className="btn-tap-success" onClick={confirmar}>
          💳  Procesar cobro
        </button>
      </Card>

      {cobros.length > 0 && (
        <Card className="p-3">
          <div className="tap-title mb-2">Historial de la sesión</div>
          {cobros.map((c, i) => (
            <div key={i} className="label-tap">
              · {c.fecha}  |  {c.met}  |  {c.mod}  |  ${c.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          ))}
        </Card>
      )}
    </Shell>
  );
}