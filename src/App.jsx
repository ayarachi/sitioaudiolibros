import { HashRouter, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Perfil from "./pages/Perfil";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
