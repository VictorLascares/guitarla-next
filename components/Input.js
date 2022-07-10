import { formatDate } from "../helpers"
import Link from "next/link"
import Image from "next/image"

const Input = ({entrada}) => {
    const { titulo, resumen, imagen, createdAt } = entrada.attributes

    return (
        <article>
            <Image layout="responsive" height={800} width={600} src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
            <div>
                <h1>{titulo}</h1>
                <p>{formatDate(createdAt)}</p>
                <p>{resumen}</p>
                <Link href={`/blog/${entrada.id}`}>Leer entrada</Link>
            </div>
        </article>
    )
}

export default Input