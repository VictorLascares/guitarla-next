import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina, guitarra}) => {
    return (
        <>
            <Head>
                <title>GuitarLA{pagina? ` - ${pagina}` : ''}</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                <title>GuitarLA{pagina? ` - ${pagina}` : ''}</title>
            </Head>
            <Header 
                guitarra={guitarra} 
            />
            {children}
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    guitarra: null
}
export default Layout