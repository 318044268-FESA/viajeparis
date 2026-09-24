import { useState } from "react";
import { useApp } from "../context/AppContext";
import { Card } from "../components/Card";

export default function Login() {
  const { user, setUser, setPage } = useApp();
  const [usr, setUsr]   = useState("laura");
  const [pass, setPass] = useState("demo");
  const [rol, setRol]   = useState("agente");

  const entrar = () => {
    setUser({ ...user, rol });
    setPage(rol === "recopilador" ? "inicio_recopilador" : "inicio_agente");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div style={{ width: 420 }}>
        <div className="text-center mb-3">
          <div className="tap-hero-title">✈  TravelAgent Pro</div>
          <div className="tap-muted mt-2">
            Plataforma de comparación y venta de paquetes de viaje
          </div>
        </div>

        <Card className="p-4">
          <div className="tap-title">Bienvenido</div>
          <div className="tap-muted mb-3">Ingresa tus credenciales para continuar</div>

          <label className="label-tap">Usuario</label>
          <input className="form-control-tap mt-1 mb-3" value={usr} onChange={(e) => setUsr(e.target.value)} />

          <label className="label-tap">Contraseña</label>
          <input type="password" className="form-control-tap mt-1 mb-3" value={pass} onChange={(e) => setPass(e.target.value)} />

          <label className="label-tap">Rol</label>
          <select className="form-select-tap mt-1 mb-4" value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="agente">agente</option>
            <option value="recopilador">recopilador</option>
          </select>

          <button className="btn-tap-primary w-100" onClick={entrar}>Iniciar sesión</button>
        </Card>
      </div>
    </div>
  );
}