import Layout from "../components/Layout"
import Input from "../components/Input";
import styles from "../styles/Blog.module.css"

const blog = ({inputs}) => {
    return (
        <Layout
            pagina='Blog'
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styles.blog}>
                    {inputs.data.map(entrada => (
                        <Input 
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/blogs?populate=*`;
    const response = await fetch(url);
    const inputs = await response.json();
    return {
        props: {
            inputs
        }
    }
}

export default blog