import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, pagina, informacion}) => {
  return (
    <>
      <Head>
        <title>TikoDev | {pagina}</title>
        <link rel="icon" href="/favicon_web.png" />
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