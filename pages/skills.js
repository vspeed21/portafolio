import Layout from "../src/layout/Layout"
import ListadoSkills from "../src/components/ListadoSkills";
import styles from '../styles/Listado.module.css'

const skills = ({ frontend, backend, herramientas }) => {

  return (
    <Layout pagina='Habilidades'>
      <div className={styles.texto}>
        <h2 className='heading'>Mis Habilidades</h2>
        <p>A continuacion se presentan mis habilidades en el desarrollo web; tanto para el lado del cliente como el lado del servidor</p>
      </div>

      <ListadoSkills 
        frontends={frontend.data}
        backends={backend.data}
        herramientas={herramientas.data}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  const urlFrontend = `${process.env.API_URL}/api/frontends?populate=imagen`;
  const urlBackend = `${process.env.API_URL}/api/backends?populate=imagen`;
  const urlHerramientas = `${process.env.API_URL}/api/herramientas?populate=imagen`;

  const [ resFrontend, resBackend, resHerramientas ] = await Promise.all([
    fetch(urlFrontend),
    fetch(urlBackend),
    fetch(urlHerramientas),
  ]);

  const [ frontend, backend, herramientas ] = await Promise.all([
    resFrontend.json(),
    resBackend.json(),
    resHerramientas.json()
  ]);

  return{
    props:{
      frontend,
      backend,
      herramientas,
    }
  }
}

export default skills