'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contacto</h1>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Ubicación</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>contacto@eventos.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-phone"></i>
            <div>
              <h3>Teléfono</h3>
              <p>+54 11 1234-5678</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Asunto</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Mensaje</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}