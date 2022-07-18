import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"

const Header = ({guitarra}) => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image priority="true" width={400} height={100} src="/img/logo.svg" alt="Imagen de Logo" className={styles.logo} />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo}>
                        <h1>{guitarra.attributes.nombre}</h1>
                        <p>{guitarra.attributes.descripcion}</p>
                        <p>${guitarra.attributes.precio}.00</p>
                        <Link href={`/guitarra/${guitarra.attributes.url}`}>Ver producto</Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header