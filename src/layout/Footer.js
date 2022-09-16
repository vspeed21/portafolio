import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.flex} contenedor`}>
        <div>
          <nav className={styles.navegacion}>
            <Link href='/skills'>
              Habilidades
            </Link>

            <Link href='/contacto'>
              Contacto
            </Link>
          </nav>

          <div className={styles.disponibilidad}>
            <p>Estado:</p>
            
            <div>
              <span></span>
              <p>Disponible</p>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Todos los derechos reservados &#169; <span>{year}</span> </p>
          <p>Hecho por: {''}
            <a
              href='https://www.github.com/vspeed21'
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor Torres
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer