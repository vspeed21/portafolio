import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ListadoP.module.css'
import stylesG from '../../styles/Tabs.module.css';

const ListadoSassPagina = ({proyecto}) => {

  return (
    <>
      <div className={stylesG.grid}>
        {proyecto.map( sass => {
          const { nombre, descripcion, linkGit, linkProyecto, imagen} = sass;


          return(
          <div className={styles.card} key={sass.id}>
            <h3>{nombre}</h3>
            <Link href={linkProyecto} target='_blank' rel="noopener noreferrer" className='mask'>
              <a>
                <Image
                  width={300}
                  height={300}
                  src={imagen}
                  alt={`imagen proyecto ${nombre}`}
                />
              </a>
            </Link>

            {descripcion && 
              <p className={styles.descripcion}>{descripcion}</p>
            }

            <div className={styles.botones}>
              <Link
                href={linkProyecto} 
                target='_blank'
                rel="noopener noreferrer"
                className='btn btn-proyecto'
              >
                Ver Proyecto
              </Link>
              <Link
                href={linkGit}
                target='_blank'
                rel="noopener noreferrer"
                className='btn btn-git'
              >
                Repositorio
              </Link>
            </div>
          </div>
            )
          })}
      </div>
    </>
  )
}

export default ListadoSassPagina