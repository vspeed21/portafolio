import Layout from '../src/layout/Layout'
import ListadoReactPagina from '../src/components/ListadoReactPagina';
import { Reacts } from '../src/data/proyectos';

const proyectosReact = () => {
  return (
    <Layout pagina='Proyectos React'>
      <h2 className='heading'>Proyectos React</h2>

      <div className='contenedor'>
        <ListadoReactPagina
          proyecto={Reacts}
        />
      </div>
    </Layout>
  )
}

export default proyectosReact