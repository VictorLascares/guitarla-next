import Layout from '../components/Layout'
import Course from '../components/Course';
import GuitarList from '../components/GuitarList';
import BlogList from '../components/BlogList';

export default function Home({guitars, course, blogs}) {
    return (
        <Layout
            pagina={'Inicio'}
        >
            <main className='contenedor'>
                <h2 className='heading'>Nuestra colección</h2>
                <GuitarList 
                    guitars={guitars}
                />
            </main>

            <Course 
                course={course}
            />

            <section className='contenedor'>
                <h2 className='heading'>Blog</h2>
                <BlogList 
                    entradas={blogs}
                />
            </section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const guitarsUrl = `${process.env.API_URL}/guitarras?populate=imagen`;
    const courseUrl = `${process.env.API_URL}/curso?populate=imagen`;
    const blogsUrl = `${process.env.API_URL}/blogs?populate=imagen&pagination[limit]=3`
    const [resGuitarras, resCursos, resBlogs] = await Promise.all([
        fetch(guitarsUrl),
        fetch(courseUrl),
        fetch(blogsUrl)
    ])

    const [guitars, course, blogs] = await Promise.all([
        resGuitarras.json(),
        resCursos.json(),
        resBlogs.json()
    ])

    return {
        props: {
            guitars: guitars.data,
            course: course.data,
            blogs: blogs.data
        }
    }
}
