import Layout from "../components/Layout"
import Input from "../components/Input";

const blog = ({inputs}) => {
    console.log();
    return (
        <Layout
            pagina='Blog'
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div>
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
    const url = 'http://localhost:1337/api/blogs?populate=*';
    const response = await fetch(url);
    const inputs = await response.json();
    return {
        props: {
            inputs
        }
    }
}

export default blog