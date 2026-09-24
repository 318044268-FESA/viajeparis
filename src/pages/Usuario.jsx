import { useState } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function Usuario() {
  const { user, setUser } = useApp();
  const [form, setForm] = useState({ ...user });

  const set = (k, v) => setForm({ ...form, [k]: v });

  const guardar = () => {
    setUser({ ...user, ...form });
    alert("Datos actualizados");
  };

  const Fila = ({ etq, k, disabled }) => (
    <div className="d-flex align-items-center gap-3 py-2">
      <label style={{ width: 100 }} className="label-tap">{etq}</label>
      <input
        className="form-control-tap"
        value={form[k]}
        disabled={disabled}
        onChange={(e) => set(k, e.target.value)}
      />
    </div>
  );

  return (
    <Shell titulo="Mi cuenta" subtitulo="Datos del usuario activo">
      <Card className="p-4">
        <div className="tap-title mb-2">Información personal</div>
        <Fila etq="Nombre"   k="nombre" />
        <Fila etq="Apellido" k="apellido" />
        <Fila etq="Correo"   k="email" />
        <Fila etq="Teléfono" k="tel" />
        <Fila etq="Agencia"  k="agencia" />
        <Fila etq="Rol"      k="rol" disabled />

        <button className="btn-tap-primary mt-3" onClick={guardar}>
          💾  Guardar cambios
        </button>
      </Card>
    </Shell>
  );
}