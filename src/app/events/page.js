export default function Events() {
    return (
        <section className="section-gray">
        <div className="container">
          <div className="section-title"></div>
        <h2>Eventos Disponibles</h2>
        <p>Encuentra el evento perfecto para ti</p>
        </div>
        <div className="events-grid">
          {/* Ejemplo de tarjetas de eventos */}
          <div className="event-card">
            <img src="https://via.placeholder.com/300x200" alt="Evento 1" />
            <div className="event-info">
              <h3>Nombre del Evento 1</h3>
              <p className="event-date">
                <i className="fas fa-calendar"></i> 15 de Mayo, 2024
              </p>
              <p className="event-location">
                <i className="fas fa-map-marker-alt"></i> Buenos Aires, Argentina
              </p>
              <p className="event-description">
                Breve descripción del evento que se realizará...
              </p>
              <a href="/events/1" className="btn-details">Ver Detalles</a>
            </div>
          </div>
  
          <div className="event-card">
            <img src="https://via.placeholder.com/300x200" alt="Evento 2" />
            <div className="event-info">
              <h3>Nombre del Evento 2</h3>
              <p className="event-date">
                <i className="fas fa-calendar"></i> 20 de Mayo, 2024
              </p>
              <p className="event-location">
                <i className="fas fa-map-marker-alt"></i> Córdoba, Argentina
              </p>
              <p className="event-description">
                Breve descripción del evento que se realizará...
              </p>
              <a href="/events/2" className="btn-details">Ver Detalles</a>
            </div>
          </div>
        </div>
      </section>
        
    )
  }