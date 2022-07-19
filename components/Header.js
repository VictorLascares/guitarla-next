import styles from '../styles/Header.module.css'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'

const Header = ({guitarra}) => {
    const router = useRouter();
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
                        <Link href="/carrito">
                            <a>
                                <Image 
                                    layout='fixed' 
                                    width={25} 
                                    height={20} 
                                    src="/img/carrito.png" 
                                    alt='Imagen de carrito de compras' 
                                />
                            </a>
                        </Link>
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

            {router.pathname === '/' && (
                <div className={styles.guitarra}>
                    <Image layout='fixed' width={500} height={1200} src="/img/header_guitarra.png" alt="imagen header guitarra" />
                </div>
            )}
        </header>
    )
}

export default Header