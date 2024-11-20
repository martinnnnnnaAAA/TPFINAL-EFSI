import styles from './register.module.css'

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <h1>Registro de Usuario</h1>
      <form className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Nombre Completo</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a></p>
    </div>
  )
}