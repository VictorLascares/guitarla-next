import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina={'Nosotros'}
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450}  src="/img/nosotros.jpg" alt='Imagen de Nosotros' />
                    <div>
                        <p>
                            Vestibulum libero nulla, porta pharetra nulla quis, laoreet venenatis orci. Maecenas maximus fermentum risus, eu facilisis mi lacinia in. Quisque vel ullamcorper quam. Fusce quam metus, posuere ut nisi eu, bibendum efficitur orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p>
                            Vestibulum libero nulla, porta pharetra nulla quis, laoreet venenatis orci. Maecenas maximus fermentum risus, eu facilisis mi lacinia in. 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros