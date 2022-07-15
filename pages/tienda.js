import Layout from "../components/Layout"
import Guitar from "../components/Guitar";

const tienda = ({ guitars }) => {
    
    return (
        <Layout
            pagina='Tienda Virtual'
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>
                <div>
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

export default tienda