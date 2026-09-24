import { useState } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function CargarHotel() {
  const { hoteles, setHoteles, setPage } = useApp();
  const [form, setForm] = useState({
    nombre: "Hotel Nuevo", tipo: "Hotel", precio: "1500",
    dist: "2.0", calif: "4.5",
  });

  const set = (k, v) => setForm({ ...form, [k]: v });

  const guardar = () => {
    const p = parseFloat(form.precio);
    const d = parseFloat(form.dist);
    const c = parseFloat(form.calif);
    if (isNaN(p) || isNaN(d) || isNaN(c)) { alert("Revisa los números"); return; }
    setHoteles([
      ...hoteles,
      { nombre: form.nombre, tipo: form.tipo, precio: p, dist: d, calif: c },
    ]);
    alert("Hospedaje agregado al catálogo");
    setPage("inicio_recopilador");
  };

  const Fila = ({ etq, k }) => (
    <div className="d-flex align-items-center gap-3 py-2">
      <label className="label-tap" style={{ width: 110 }}>{etq}</label>
      <input className="form-control-tap" value={form[k]} onChange={(e) => set(k, e.target.value)} />
    </div>
  );

  return (
    <Shell titulo="Cargar hospedaje" subtitulo="Registra un hospedaje para el catálogo">
      <Card className="p-4">
        <div className="tap-title mb-2">Datos del hospedaje</div>
        <Fila etq="Nombre"       k="nombre" />
        <Fila etq="Tipo"         k="tipo" />
        <Fila etq="Precio/noche" k="precio" />
        <Fila etq="Distancia km" k="dist" />
        <Fila etq="Calificación" k="calif" />

        <button className="btn-tap-primary mt-3" onClick={guardar}>
          Guardar hospedaje
        </button>
      </Card>
    </Shell>
  );
}