export function Card({ children, className = "", style = {} }) {
  return (
    <div className={`tap-card p-3 ${className}`} style={style}>
      {children}
    </div>
  );
}

export function StatCard({ titulo, valor }) {
  return (
    <div className="tap-card p-3 h-100">
      <div className="tap-stat-title">{titulo}</div>
      <div className="tap-stat">{valor}</div>
    </div>
  );
}

export function MenuCard({ texto, onClick }) {
  return (
    <div className="tap-card p-3 h-100 d-flex flex-column">
      <div className="tap-title">{texto}</div>
      <button className="btn-tap-primary mt-3 align-self-start" onClick={onClick}>
        Abrir
      </button>
    </div>
  );
}