import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './layout.module.css';

export const metadata = {
  title: 'Eventos App',
  description: 'Sistema de gestión de eventos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={styles.layoutContainer}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 