export default function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nosotros</h3>
            <p>Plataforma líder en gestión de eventos en Argentina.</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Eventos</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Eventos App. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }