'use client';
import { useState, useEffect } from 'react';
import { getEvents } from '@/services/api';
import EventCard from '@/components/EventCard';
import styles from './events.module.css';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        console.log("data", data);
        console.log("Datos recibidos de la API:", data);
        if (data && data.collection) {
          console.log("Collection a establecer:", data.collection);
          setEvents(data.collection);
        } else {
          setError('Los datos recibidos no tienen el formato esperado');
        }
      } catch (err) {
        setError('Error al cargar los eventos');
        console.error('Error completo:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("events actualizado:", events);
  }, [events]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Cargando eventos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeader}>
        <h1>Eventos Disponibles</h1>
        <div className={styles.filters}>
          <input 
            type="text" 
            placeholder="Buscar eventos..." 
            className={styles.searchInput}
          />
          <select className={styles.filterSelect}>
            <option value="">Todas las categorías</option>
            <option value="musica">Música</option>
            <option value="deportes">Deportes</option>
            <option value="cultura">Cultura</option>
          </select>
        </div>
      </div>

      {events.length === 0 ? (
        <div className={styles.noEvents}>
          No hay eventos disponibles
        </div>
      ) : (
        <div className={styles.eventsGrid}>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}