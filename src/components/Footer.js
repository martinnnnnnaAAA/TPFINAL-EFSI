import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Sobre Nosotros</h3>
          <p>Eventos App es la plataforma líder en gestión y descubrimiento de eventos en Argentina.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/events">Eventos</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>Email: info@eventos.com</p>
          <p>Teléfono: +54 11 1234-5678</p>
          <div className={styles.socialLinks}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Eventos App. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}