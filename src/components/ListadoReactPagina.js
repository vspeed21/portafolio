import Image from 'next/image';
import styles from '../../styles/ListadoP.module.css'

const ListadoReactPagina = ({proyecto}) => {

  return (
    <>
      <div className={styles.grid}>
        {proyecto.map( sass => {
          const { nombre, descripcion, linkGit, linkProyecto, imagen, tecnologias} = sass;


          return(
          <div className={`${styles.card} block`} key={sass.id}>
            <h3>{nombre}</h3>
            <a href={linkProyecto} target='_blank' rel="noopener noreferrer" className='mask'>
              <div className={styles.imagen}>
                <Image
                  width={300}
                  height={300}
                  src={imagen}
                  alt={`imagen proyecto ${nombre}`}
                />
              </div>
            </a>

            <div className={styles.tecnologias}>
              {tecnologias.map( tecnologia => (
                <Image
                  key={tecnologia.id}
                  width={30}
                  height={tecnologia.imagen === '/logos/logo-gulp.png' ? 30 : 50}
                  src={tecnologia.imagen}
                  alt='imagen tecnologia'
                />
              ))}
            </div>

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