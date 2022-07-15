import Layout from "../../components/Layout";
import Image from "next/image";
import { formatDate } from "../../helpers";
import styles from "../../styles/Input.module.css"

const BlogInput = ({ent}) => {
    const { titulo, contenido, imagen, createdAt } = ent.attributes
    return (
        <Layout
            pagina={titulo}
        >
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
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs?populate=imagen`
    const response = await fetch(url)
    const result = await response.json()
    const ent = (result.data)
    const paths = ent.map(entrada => ({
        params: {url: entrada.attributes.url}
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params : { url }}) {
    const urlB = `${process.env.API_URL}/blogs?populate=imagen&filters[url][$eq]=${url}`
    const response = await fetch(urlB)
    const result = await response.json();
    const ent = result.data[0]
    return {
        props: {
            ent,
        }
    }
}


// export async function getServerSideProps({query : { id }}) {
//     const url = `http://localhost:1337/api/blogs/${id}?populate=imagen`
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