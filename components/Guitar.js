import Image from "next/image"
import Link from "next/link"

const Guitar = ({ guitar }) => {
    const { nombre, descripcion, precio, imagen, url } = guitar.attributes
    return (
        <div>
            <Image layout="responsive" width={500} height={350} src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} />
            <div>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <p>${precio}.00</p>
                <Link href={`/guitarras/${url}`}>
                    Ver Producto
                </Link>
            </div>
        </div>
    )
}

export default Guitar