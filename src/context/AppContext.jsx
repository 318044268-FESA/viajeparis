import { createContext, useContext, useState } from "react";
import { USER_INITIAL, VUELOS_INITIAL, HOTELES_INITIAL } from "../data";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser]       = useState({ ...USER_INITIAL });
  const [vuelos, setVuelos]   = useState([...VUELOS_INITIAL]);
  const [hoteles, setHoteles] = useState([...HOTELES_INITIAL]);

  const [vuelo, setVuelo]     = useState(null);
  const [hotel, setHotel]     = useState(null);
  const [noches, setNoches]   = useState(5);
  const [cobros, setCobros]   = useState([]);
  const [total, setTotal]     = useState(null);

  const [page, setPage]       = useState("login");

  const value = {
    user, setUser,
    vuelos, setVuelos,
    hoteles, setHoteles,
    vuelo, setVuelo,
    hotel, setHotel,
    noches, setNoches,
    cobros, setCobros,
    total, setTotal,
    page, setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de AppProvider");
  return ctx;
}