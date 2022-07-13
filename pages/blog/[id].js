import Layout from "../../components/Layout";
import Image from "next/image";
import { formatDate } from "../../helpers";
import styles from "../../styles/Input.module.css"

const BlogInput = ({result}) => {
    const { titulo, contenido, imagen, createdAt } = result.data.attributes
    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada_blog}>
                    <Image layout="responsive" width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen entrada ${titulo}`}/>
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatDate(createdAt)}</p>
                        <p>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}
export async function getStaticProps({params : { id }}) {
    const url = `${process.env.API_URL}/blogs/${id}?populate=*`
    const response = await fetch(url)
    const result = await response.json();

    return {
        props: {
            result,
        }
    }
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const result = await response.json()
    const paths = result.data.map(entrada => ({
        params: {
            id: entrada.id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

// export async function getServerSideProps({query : { id }}) {
//     const url = `http://localhost:1337/api/blogs/${id}?populate=*`
//     const response = await fetch(url)
//     const result = await response.json();

//     console.log(result);
//     return {
//         props: {
//             result
//         }
//     }
// }

export default BlogInput