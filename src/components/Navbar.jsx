//Al cambiar evita recargar la pagina
import { NavLink } from "react-router";

function Navbar() {
  //desestructuración sobre el objeto que manda Navlink
  const estiloLink = ({ isActive }) =>
    isActive ? "text-yellow-200 font-bold" : "text-white hover:text-yellow-200";

  return (
    <nav className="bg-emerald-900 px-8 py-4 flex justify-between items-center">
      <span className="text-white text-xl font-bold">🎧 AudioLibros</span>
      <div className="flex gap-6">
        <NavLink to="/" className={estiloLink}>
          Inicio
        </NavLink>
        <NavLink to="/servicios" className={estiloLink}>
          Servicios
        </NavLink>
        <NavLink to="/perfil" className={estiloLink}>
          Perfil
        </NavLink>
        <NavLink to="/contacto" className={estiloLink}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
