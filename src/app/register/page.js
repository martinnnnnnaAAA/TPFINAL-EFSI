'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/services/api';
import styles from './register.module.css';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const userData = {
        username: formData.username,
        password: formData.password,
        first_name: formData.first_name,
        last_name: formData.last_name
      };

      const response = await registerUser(userData);
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          username: formData.username
        }));
        window.dispatchEvent(new Event('localStorageChange'));
        router.push('/');
      } else {
        setError(response.error || 'Error al registrar usuario');
      }
    } catch (err) {
      setError('Error en el registro');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1>Registro de Usuario</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="first_name">Nombre</label>
          <input 
            type="text" 
            id="first_name"
            value={formData.first_name}
            onChange={(e) => setFormData({...formData, first_name: e.target.value})}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="last_name">Apellido</label>
          <input 
            type="text" 
            id="last_name"
            value={formData.last_name}
            onChange={(e) => setFormData({...formData, last_name: e.target.value})}
            required 
          />
        </div>
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input 
            type="password" 
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required 
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a></p>
    </div>
  )
}