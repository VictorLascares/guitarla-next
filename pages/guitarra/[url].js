import styles from '../../styles/Guitar.module.css'
import Layout from "../../components/Layout";
import Image from "next/image";

const GuitarraInput = ({ guitarra }) => {
    const { nombre, descripcion, precio, imagen } = guitarra.attributes
    return (
        <Layout
            pagina={nombre}
        >
            <div className={styles.guitar}>
                <h2>{nombre}</h2>
                <div className={styles.contenido}>
                    <Image className={styles.imagen} layout="responsive" width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} />
                    <div>
                        <p>{descripcion}</p>
                        <p className={styles.precio}>${precio}.00</p>
                    </div>
                </div>
                <form action="" className={styles.formulario}>
                    <div className={styles.campos}>
                        <input type="number" placeholder="Cantidad" min="1" />
                        <input type="submit" value="Agregar al carrito" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({ query: { url } }) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?populate=imagen&filters[url][$eq]=${url}`
    const response = await fetch(urlGuitarra)
    const result = await response.json();
    const guitarra = result.data[0]
    return {
        props: {
            guitarra,
        }
    }
}


export default GuitarraInput