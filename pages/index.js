import styles from '../styles/Tienda.module.css'
import Layout from '../components/Layout'
import Guitar from '../components/Guitar';

export default function Home({guitars, curso}) {
    console.log(curso);
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
    const guitarsUrl = `${process.env.API_URL}/guitarras?populate=imagen`;
    const courseUrl = `${process.env.API_URL}/curso?populate=imagen`;
    const [resGuitarras, resCursos] = await Promise.all([
        fetch(guitarsUrl),
        fetch(courseUrl)
    ])

    const [guitars, curso] = await Promise.all([
        resGuitarras.json(),
        resCursos.json()
    ])

    return {
        props: {
            guitars: guitars.data,
            curso: curso.data
        }
    }
}
