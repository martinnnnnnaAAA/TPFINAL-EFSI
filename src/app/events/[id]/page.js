'use client';
import { useState, useEffect } from 'react';
import { getEventById } from '@/services/api';
import styles from './eventDetail.module.css';

export default function EventDetail({ params }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEventById(params.id);
      setEvent(data);
      setLoading(false);
    };
    fetchEvent();
  }, [params.id]);

  if (loading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  if (!event) {
    return <div className={styles.error}>Evento no encontrado</div>;
  }

  return (
    <div className={styles.eventDetailContainer}>
      <div className={styles.eventHeader}>
        <h1>{event.name}</h1>
        <div className={styles.eventMeta}>
          <span>
            <i className="fas fa-calendar"></i>
            {new Date(event.start_date).toLocaleDateString()}
          </span>
          <span>
            <i className="fas fa-clock"></i>
            {event.duration_in_minutes} minutos
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            {event.event_location.name}
          </span>
        </div>
      </div>

      <div className={styles.eventContent}>
        <div className={styles.mainInfo}>
          <img 
            src={event.imageUrl || 'https://via.placeholder.com/800x400'} 
            alt={event.name} 
            className={styles.eventImage}
          />
          <div className={styles.description}>
            <h2>Descripción</h2>
            <p>{event.description}</p>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.priceCard}>
            <h3>Precio</h3>
            <div className={styles.price}>${event.price}</div>
            <button className={styles.registerButton}>
              Registrarse al Evento
            </button>
          </div>

          <div className={styles.infoCard}>
            <h3>Detalles</h3>
            <ul>
              <li>
                <strong>Capacidad:</strong> {event.max_assistance} personas
              </li>
              <li>
                <strong>Organizador:</strong> {event.creator_user.first_name} {event.creator_user.last_name}
              </li>
              <li>
                <strong>Ubicación:</strong> {event.event_location.full_address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}