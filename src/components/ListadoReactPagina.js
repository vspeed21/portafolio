import Image from 'next/image';
import styles from '../../styles/ListadoP.module.css'
import stylesG from '../../styles/Tabs.module.css';

const ListadoReactPagina = ({proyecto}) => {

  return (
    <>
      <div className={stylesG.grid}>
        {proyecto.map( sass => {
          const { nombre, descripcion, linkGit, linkProyecto, imagen} = sass;


          return(
          <div className={`${styles.card} block`} key={sass.id}>
            <h3>{nombre}</h3>
            <a href={linkProyecto} target='_blank' rel="noopener noreferrer" className='mask'>
              <Image
                width={300}
                height={300}
                src={imagen}
                alt={`imagen proyecto ${nombre}`}
              />
            </a>

            {descripcion && 
              <p className={styles.descripcion}>{descripcion}</p>
            }

            <div className={styles.botones}>
              <a 
                href={linkProyecto} 
                target='_blank'
                rel="noopener noreferrer"
                className='btn btn-proyecto'
              >
                Ver Proyecto
              </a>
              <a
                href={linkGit}
                target='_blank'
                rel="noopener noreferrer"
                className='btn btn-git'
              >
                Repositorio
              </a>
            </div>
          </div>
            )
          })}
      </div>
    </>
  )
}

export default ListadoReactPagina