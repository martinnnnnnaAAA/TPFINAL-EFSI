export default function EventDetail({ params }) {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="event-detail-container">
              <div className="event-header">
                <h1>Nombre del Evento</h1>
                <div className="event-meta">
                  <span><i className="fas fa-calendar"></i> 15 de Mayo, 2024</span>
                  <span><i className="fas fa-clock"></i> 19:00 hs</span>
                  <span><i className="fas fa-map-marker-alt"></i> Buenos Aires, Argentina</span>
                </div>
              </div>
    
              <div className="event-content">
                <div className="event-image">
                  <img src="https://via.placeholder.com/800x400" alt="Evento" />
                </div>
    
                <div className="event-info">
                  <h2>Descripción</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
    
                  <div className="event-details">
                    <h2>Detalles del Evento</h2>
                    <ul>
                      <li><strong>Organizador:</strong> Nombre del Organizador</li>
                      <li><strong>Categoría:</strong> Tipo de Evento</li>
                      <li><strong>Capacidad:</strong> 200 personas</li>
                      <li><strong>Precio:</strong> $1000</li>
                    </ul>
                  </div>
    
                  <button className="btn-register">Registrarse al Evento</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }