import styles from '../styles/Guitar.module.css'
import Image from "next/image"
import Link from "next/link"

const Guitar = ({ guitar }) => {
    const { nombre, descripcion, precio, imagen, url } = guitar.attributes
    return (
        <div className={styles.guitar}>
            <h2>{nombre}</h2>
            <div className={styles.contenido}>
                <Image className={styles.imagen} layout="responsive" width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} />
                <div>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}.00</p>
                </div>
            </div>
            <Link href={`/guitarra/${url}`}>Ver Producto</Link>
        </div>
    )
}

export default Guitar