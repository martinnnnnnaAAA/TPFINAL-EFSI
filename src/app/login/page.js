import styles from './login.module.css'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1>Iniciar Sesión</h1>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.button}>Ingresar</button>
      </form>
      <p className={styles.registerLink}>
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  )
}