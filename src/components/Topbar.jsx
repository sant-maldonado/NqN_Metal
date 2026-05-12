import { NavLink } from 'react-router-dom'

function Topbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">FM</div>
        <div>
          <strong>Ferro & Madera</strong>
          <span>Muebles industriales</span>
        </div>
      </div>

      <nav className="topnav">
        <NavLink to="/inicio" end>
          Inicio
        </NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>

      <NavLink className="button cta" to="/contacto">
        Cotizar ahora
      </NavLink>
    </header>
  )
}

export default Topbar
