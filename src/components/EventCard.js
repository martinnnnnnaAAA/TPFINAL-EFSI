'use client';
import { useRouter } from 'next/navigation';
import styles from './EventCard.module.css';

export default function EventCard({ event }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/events/${event.id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <img 
                src={event.imageUrl || 'https://via.placeholder.com/300x200'} 
                alt={event.name} 
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.name}</h3>
                <p className={styles.cardDate}>
                    <i className="fas fa-calendar"></i>
                    {new Date(event.start_date).toLocaleDateString()}
                </p>
                <p className={styles.cardLocation}>
                    <i className="fas fa-map-marker-alt"></i>
                    {event.event_location.name}
                </p>
                <p className={styles.cardDescription}>
                    {event.description.substring(0, 100)}...
                </p>
                <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>
                        ${event.price}
                    </span>
                    <button className={styles.cardButton}>
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    );
}