import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Listado.module.css'
import stylesG from '../../styles/Tabs.module.css';

const ListadoSass = ({proyecto}) => {

  return (
    <>
      <div className={stylesG.grid}>
        {proyecto.map( sass => {
          const { nombre, descripcion, linkGit, linkProyecto, imagen, tecnologias} = sass;


          return(
          <div data-aos="flip-left" className={styles.card} key={sass.id}>
            <h3>{nombre}</h3>
            <a href={linkProyecto} target='_blank' rel="noopener noreferrer" className='mask'>
              <Image
                width={300}
                height={300}
                src={imagen}
                alt={`imagen proyecto ${nombre}`}
              />
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
      
      {proyecto.length > 3 && 
          <div className={styles.boton}>
            <Link href='/proyectos-sass'>
              Ver mas
            </Link>
          </div>
        }
    </>
  )
}

export default ListadoSass