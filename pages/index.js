import styles from '../styles/Tienda.module.css'
import Layout from '../components/Layout'
import Guitar from '../components/Guitar';
import Course from '../components/Course';

export default function Home({guitars, course}) {
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

            <Course 
                course={course}
            />
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

    const [guitars, course] = await Promise.all([
        resGuitarras.json(),
        resCursos.json()
    ])

    return {
        props: {
            guitars: guitars.data,
            course: course.data
        }
    }
}
