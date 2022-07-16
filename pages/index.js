import styles from '../styles/Tienda.module.css'
import Layout from '../components/Layout'
import Guitar from '../components/Guitar';

export default function Home({guitars}) {
    return (
        <Layout
            pagina={'Inicio'}
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra colección</h1>
                <div className={styles.listado}>
                    {guitars.map(guitar => (
                        <Guitar 
                            key={guitar.id}
                            guitar={guitar}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?populate=imagen`;
    const response = await fetch(url);
    const guitars = await response.json();
    return {
        props: {
            guitars: guitars.data
        }
    }
}
