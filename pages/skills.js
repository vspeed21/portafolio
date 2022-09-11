import AOS from 'aos';
import { useEffect } from 'react';

import Layout from "../src/layout/Layout"
import ListadoSkills from "../src/components/ListadoSkills";
import styles from '../styles/Listado.module.css'

import { Frontend, Backend, Herramientas } from '../src/data/skills'

const skills = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  

  return (
    <Layout pagina='Habilidades'>
      <div className={`${styles.texto}`}>
        <h2 className='heading'>Mis Habilidades</h2>
        <p>A continuacion se presentan mis habilidades en el desarrollo web; tanto para el lado del cliente como el lado del servidor</p>
      </div>

      <ListadoSkills 
        frontends={Frontend}
        backends={Backend}
        herramientas={Herramientas}
      />
    </Layout>
  )
}

export default skills