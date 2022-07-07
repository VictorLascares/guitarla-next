import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <>
            <Head>
                <title>GuitarLA</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout