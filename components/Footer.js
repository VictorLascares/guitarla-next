import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    const [year, setYear] = useState(0)

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, [])
    

    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>

                <p>Todos los derechos reservados &copy; {year}</p>
            </div>
        </footer>
    )
}

export default Footer