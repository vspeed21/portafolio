import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, pagina, informacion}) => {
  return (
    <>
      <Head>
        <title>TikoDev | {pagina}</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/favicon_web.png" />
        <meta name="description" content="Sitio web donde visualizar proyectos y habilidades de un programador web" />
        <meta name="author" content="Victor Torres" />
        <meta name="keywords" content="portafolio web, proyectos web, skills" />
      </Head>

        <Header informacion={informacion} />
          {children}
        <Footer />

    </>
  )
}

Layout.defaultProps = {
  informacion: null
}

export default Layout