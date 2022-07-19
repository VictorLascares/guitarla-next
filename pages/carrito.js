import { useState } from "react"
import Layout from "../components/Layout"
import styles from "../styles/Carrito.module.css"

const carrito = ({carrito}) => {
    const [productos, setProductos] = useState([])
    console.log(carrito);
    return (
        <Layout
            pagina={'Carrito de compras'}
        >
            <h1 className="heading">Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
            </main>
        </Layout>
    )
}

export default carrito