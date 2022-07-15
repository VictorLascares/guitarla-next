import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <>
            <Head>
                <title>GuitarLA{pagina? ` - ${pagina}` : ''}</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                <title>GuitarLA{pagina? ` - ${pagina}` : ''}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"  /> 
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout