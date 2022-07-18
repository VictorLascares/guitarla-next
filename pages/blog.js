import Layout from "../components/Layout"
import Input from "../components/Input";
import BlogList from "../components/BlogList";

const blog = ({inputs}) => {
    return (
        <Layout
            pagina='Blog'
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <BlogList 
                    entradas={inputs.data}
                />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/blogs?populate=imagen`;
    const response = await fetch(url);
    const inputs = await response.json();
    return {
        props: {
            inputs
        }
    }
}

export default blog