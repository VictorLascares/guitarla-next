import { useRouter } from "next/router"

const BlogInput = ({result}) => {
    const router = useRouter();
    return (
        <div>Desde Entrada Blog</div>
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