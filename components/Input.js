import { formatDate } from "../helpers"
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Input.module.css'

const Input = ({entrada}) => {
    const { titulo, resumen, imagen, createdAt, url } = entrada.attributes

    return (
        <article className={styles.entrada}>
            <Image layout="responsive" height={600} width={600} src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatDate(createdAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <div className={styles.enlace}>
                    <Link href={`/blog/${url}`}>Leer entrada</Link>
                </div>
            </div>
        </article>
    )
}

export default Input