'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [user, setUser] = useState(null);

    const checkUserData = () => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        checkUserData();
        
        // Para cambios en otras pestañas
        window.addEventListener('storage', checkUserData);
        
        // Para cambios en la misma pestaña
        window.addEventListener('localStorageChange', checkUserData);
        
        return () => {
            window.removeEventListener('storage', checkUserData);
            window.removeEventListener('localStorageChange', checkUserData);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        window.location.href = '/';
    };

    return (
        <header className={styles.header}>
            {user && (
                <div className={styles.userBar}>
                    <div className={styles.userInfo}>
                        <i className="fas fa-user"></i>
                        <span>{user.username}</span>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/logo.png" alt="Eventos Logo" />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/events">Eventos</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                    {!user && (
                        <>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Registro</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}