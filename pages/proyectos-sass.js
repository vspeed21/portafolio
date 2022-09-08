import Layout from '../src/layout/Layout';
import ListadoSassPagina from '../src/components/ListadoSassPagina';
import { Sass } from '../src/data/proyectos';

const proyectosSass = () => {
  
  return (
    <Layout pagina='Proyectos Sass'>
      <h2 className='heading'>Proyectos Sass</h2>

      <div className='contenedor'>
        <ListadoSassPagina 
          proyecto={Sass}
        />
      </div>

    </Layout>
  )
}

export default proyectosSass