import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenido a Eventos App</h1>
          <p>Descubre y participa en los mejores eventos de tu ciudad</p>
          <a href="/events" className={styles.heroButton}>
            Explorar Eventos
          </a>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <i className="fas fa-calendar-alt"></i>
            <h3>Eventos Únicos</h3>
            <p>Encuentra eventos exclusivos y emocionantes</p>
          </div>
          <div className={styles.featureCard}>
            <i className="fas fa-ticket-alt"></i>
            <h3>Registro Fácil</h3>
            <p>Proceso de registro simple y rápido</p>
          </div>
          <div className={styles.featureCard}>
            <i className="fas fa-map-marked-alt"></i>
            <h3>Eventos Locales</h3>
            <p>Descubre eventos cerca de ti</p>
          </div>
        </div>
      </section>
    </div>
  );
}