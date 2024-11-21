'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/api';
import styles from './login.module.css';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData.username, formData.password);
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          username: formData.username
        }));
        window.dispatchEvent(new Event('localStorageChange'));
        router.push('/events');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al intentar iniciar sesión');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Iniciar Sesión</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuario</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required 
          />
        </div>
        <button type="submit" className={styles.button}>Ingresar</button>
      </form>
      <p className={styles.registerLink}>
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
}