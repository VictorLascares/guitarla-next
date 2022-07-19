import { useState } from 'react';
import styles from '../../styles/Guitar.module.css'
import Layout from "../../components/Layout";
import Image from "next/image";

const GuitarraInput = ({ guitarra, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, precio, imagen } = guitarra.attributes
    const handleSubmit = e => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Cantidad no validad');
            return;
        }
        
        const guitarraSeleccionada = {
            id: guitarra.id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada);
    }
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
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <div className={styles.campos}>
                        <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
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