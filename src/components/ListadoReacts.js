import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Listado.module.css'
import stylesG from '../../styles/Tabs.module.css';

const ListadoReacts = ({ proyectos}) => {

  return (
    <>
      <div className={stylesG.grid}>
        {proyectos.map( proyecto => {
          const { nombre, descripcion, linkGit, linkProyecto, imagen, tecnologias} = proyecto.attributes;

          return(
            <div data-aos="flip-left" className={styles.card} key={proyecto.id}>
              <h3>{nombre}</h3>
              <a href={linkProyecto} target='_blank' rel="noopener noreferrer" className='mask'>
                <Image
                  width={300}
                  height={300}
                  src={imagen.data.attributes.url}
                  alt={`imagen proyecto ${nombre}`}
                />
              </a>

              <div className={styles.tecnologias}>
                {tecnologias?.data?.map( tecnologia => (
                  <Image
                    key={tecnologia.id}
                    width={30}
                    height={30}
                    src={tecnologia?.attributes?.url}
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
        
        {proyectos.length > 3 && 
          <div className={styles.boton}>
            <Link href='/proyectos-react'>
              Ver mas
            </Link>
          </div>
        }
    </>
  )
}



export default ListadoReacts