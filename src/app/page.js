export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Descubre los Mejores Eventos</h1>
            <p>Encuentra y participa en eventos increíbles en tu ciudad</p>
            <a href="/events" className="cta-button">Ver Eventos</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Eventos Destacados</h2>
            <p>Descubre los eventos más populares de esta semana</p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <img src="https://via.placeholder.com/300x200" alt="Evento 1" />
              <div className="event-info">
                <h3>Festival de Música</h3>
                <p className="event-date">
                  <i className="fas fa-calendar"></i> 15 de Mayo, 2024
                </p>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> Buenos Aires
                </p>
                <a href="/events/1" className="btn-details">Ver Detalles</a>
              </div>
            </div>

            <div className="event-card">
              <img src="https://via.placeholder.com/300x200" alt="Evento 2" />
              <div className="event-info">
                <h3>Conferencia Tech</h3>
                <p className="event-date">
                  <i className="fas fa-calendar"></i> 20 de Mayo, 2024
                </p>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> Córdoba
                </p>
                <a href="/events/2" className="btn-details">Ver Detalles</a>
              </div>
            </div>

            <div className="event-card">
              <img src="https://via.placeholder.com/300x200" alt="Evento 3" />
              <div className="event-info">
                <h3>Exposición de Arte</h3>
                <p className="event-date">
                  <i className="fas fa-calendar"></i> 25 de Mayo, 2024
                </p>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> Rosario
                </p>
                <a href="/events/3" className="btn-details">Ver Detalles</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container">
          <div className="section-title">
            <h2>Categorías de Eventos</h2>
            <p>Explora eventos por categoría</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <i className="fas fa-music"></i>
              <h3>Música</h3>
            </div>
            <div className="category-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Tecnología</h3>
            </div>
            <div className="category-card">
              <i className="fas fa-palette"></i>
              <h3>Arte</h3>
            </div>
            <div className="category-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Educación</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}