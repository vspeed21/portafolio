import FrontendSkill from './FrontendSkill'
import BackendSkill from './BackendSkill'
import styles from '../../styles/Listado.module.css'
import HerramientaSkill from './HerramientaSkill'

const ListadoSkills = ({frontends, backends, herramientas}) => {

  return (
    <div className={`${styles.listado} contenedor`}>
        <h3>Frontend</h3>
        <div className={styles.grid}>
            {frontends.map(frontend => (
                <FrontendSkill 
                    key={frontend.id}
                    skill={frontend}
                />
            ))}
        </div>
        
        <h3>Backend</h3>
        <div className={styles.grid}>
            {backends.map( backend => (
                <BackendSkill 
                    key={backend.id}
                    skill={backend}
                />
            ))}
        </div>

        <h3>Otras herramientas</h3>
        <div className={styles.grid}>
            {herramientas.map( herramienta => (
                <HerramientaSkill
                    key={herramienta.id}
                    herramienta={herramienta}
                />
            ))}
        </div>
    </div>
  )
}

export default ListadoSkills