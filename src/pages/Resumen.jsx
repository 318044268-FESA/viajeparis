import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import Shell from "../components/Shell";
import { Card } from "../components/Card";

export default function Resumen() {
  const { vuelo, hotel, noches, setTotal, setPage } = useApp();

  const subtotal = (vuelo ? vuelo.tarifa : 0) + (hotel ? hotel.precio * noches : 0);
  const imp = subtotal * 0.16;
  const total = subtotal + imp;

  useEffect(() => { setTotal(total); }, [total, setTotal]);

  const fmt = (n) =>
    `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <Shell titulo="Resumen del paquete" subtitulo="Revisa los elementos antes de cobrar">
      <Card className="p-3 mb-3">
        <div className="tap-title">✈  Vuelo</div>
        {vuelo ? (
          <>
            <div className="label-tap mt-2">{vuelo.aero} · {vuelo.num}</div>
            <div className="tap-muted">
              {vuelo.sal} → {vuelo.lle}  ·  {vuelo.fecha}  ·  {vuelo.tipo}
            </div>
            <div className="tap-stat text-end">{fmt(vuelo.tarifa)}</div>
          </>
        ) : (
          <div className="tap-muted my-2">Sin seleccionar</div>
        )}
      </Card>

      <Card className="p-3 mb-3">
        <div className="tap-title">🏨  Hospedaje</div>
        {hotel ? (
          <>
            <div className="label-tap mt-2">{hotel.nombre}  ·  {hotel.tipo}</div>
            <div className="tap-muted">
              {noches} noches × ${hotel.precio.toLocaleString()}
            </div>
            <div className="tap-stat text-end">{fmt(hotel.precio * noches)}</div>
          </>
        ) : (
          <div className="tap-muted my-2">Sin seleccionar</div>
        )}
      </Card>

      <Card className="p-3 mb-3">
        <div className="tap-title mb-2">💰  Totales</div>
        {[
          { etq: "Subtotal", val: subtotal, bold: false },
          { etq: "Impuestos (16%)", val: imp, bold: false },
          { etq: "TOTAL", val: total, bold: true },
        ].map((r) => (
          <div key={r.etq} className="d-flex justify-content-between py-1">
            <span style={{ fontWeight: r.bold ? "bold" : "normal" }}>{r.etq}</span>
            <span style={{ fontWeight: r.bold ? "bold" : "normal" }}>{fmt(r.val)}</span>
          </div>
        ))}
      </Card>

      <div className="text-end">
        <button className="btn-tap-success" onClick={() => setPage("cobro")}>
          💳  Ir a cobro
        </button>
      </div>
    </Shell>
  );
}
