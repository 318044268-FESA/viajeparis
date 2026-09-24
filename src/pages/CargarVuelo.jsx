import { useState } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function CargarVuelo() {
  const { vuelos, setVuelos, setPage } = useApp();
  const [form, setForm] = useState({
    num: "AM123", aero: "Aeroméxico", sal: "MEX", lle: "CDG",
    fecha: "2025-07-01 09:00", tipo: "Directo", tarifa: "10000",
  });

  const set = (k, v) => setForm({ ...form, [k]: v });

  const guardar = () => {
    const tarifa = parseFloat(form.tarifa);
    if (isNaN(tarifa)) { alert("Tarifa inválida"); return; }
    setVuelos([
      ...vuelos,
      {
        num: form.num, aero: form.aero, sal: form.sal, lle: form.lle,
        fecha: form.fecha, tipo: form.tipo, tarifa,
      },
    ]);
    alert("Vuelo agregado al catálogo");
    setPage("inicio_recopilador");
  };

  const Fila = ({ etq, k }) => (
    <div className="d-flex align-items-center gap-3 py-2">
      <label className="label-tap" style={{ width: 100 }}>{etq}</label>
      <input className="form-control-tap" value={form[k]} onChange={(e) => set(k, e.target.value)} />
    </div>
  );

  return (
    <Shell titulo="Cargar vuelo" subtitulo="Registra un vuelo para el catálogo">
      <Card className="p-4">
        <div className="tap-title mb-2">Datos del vuelo</div>
        <Fila etq="Número"    k="num" />
        <Fila etq="Aerolínea" k="aero" />
        <Fila etq="Origen"    k="sal" />
        <Fila etq="Destino"   k="lle" />
        <Fila etq="Fecha"     k="fecha" />
        <Fila etq="Tipo"      k="tipo" />
        <Fila etq="Tarifa"    k="tarifa" />

        <button className="btn-tap-primary mt-3" onClick={guardar}>
          Guardar vuelo
        </button>
      </Card>
    </Shell>
  );
}