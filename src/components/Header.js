export default function Header() {
    return (
      <header>
        <div className="top-bar">
          <div className="user-menu">
            <i className="fas fa-user"></i>
            <span>John Doe</span>
            <button>Cerrar Sesión</button>
          </div>
        </div>
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="Eventos Logo" />
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Eventos</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    )
  } 