import { useApp } from "../context/AppContext";

export default function Shell({ titulo, subtitulo = "", children }) {
  const { user, setPage } = useApp();

  const navItems = () => {
    if (user.rol === "recopilador") {
      return [
        { label: "Inicio",           page: "inicio_recopilador" },
        { label: "Cargar vuelo",     page: "cargar_vuelo" },
        { label: "Cargar hospedaje", page: "cargar_hotel" },
      ];
    }
    return [
      { label: "Inicio",     page: "inicio_agente" },
      { label: "Vuelos",     page: "vuelos" },
      { label: "Hospedajes", page: "hoteles" },
      { label: "Resumen",    page: "resumen" },
      { label: "Cobro",      page: "cobro" },
    ];
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div className="tap-header">
        <p className="tap-title">{titulo}</p>
        {subtitulo && <p className="tap-sub">{subtitulo}</p>}
      </div>

      <div className="tap-nav">
        {navItems().map((item) => (
          <button
            key={item.page}
            className="nav-btn"
            onClick={() => setPage(item.page)}
          >
            {item.label}
          </button>
        ))}
        <div className="ms-auto d-flex align-items-center flex-wrap">
          <span className="nav-user">
            👤 {user.nombre} {user.apellido} ({user.rol})
          </span>
          <button className="nav-btn" onClick={() => setPage("usuario")}>Mi cuenta</button>
          <button className="nav-btn" onClick={() => setPage("login")}>Salir</button>
        </div>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}
