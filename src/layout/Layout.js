import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, pagina, informacion}) => {
  return (
    <>
      <Head>
        <title>TikoDev | {pagina}</title>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
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