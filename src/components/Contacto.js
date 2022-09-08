
import styles from '../../styles/Contacto.module.css'
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <div className={`${styles.padre} contenedor`}>
      <div className={`${styles.contacto}`}>
        <div className={styles.texto}>
          <h3>
            ¿Quiere hacer un buen proyecto?
            <span>Hagamoslo juntos</span>
          </h3>

          <div className={styles.email}>
            <i className='bx bxl-gmail bx-lg'></i>
            <p>vtorresquintanilla0206@gmail.com</p>
          </div>

          <div className={styles.email}>
            <i className='bx bxl-github bx-lg'></i>
            <p>vspeed21</p>
          </div>

          <div className={styles.email}>
            <i className='bx bxl-whatsapp bx-lg'></i>
            <p>+504 99152520</p>
          </div>
        </div>

        <a className='btn' href='/data/CV Victor Torres.pdf' download>
          Descargar CV
        </a>
      </div>

      <Formulario/>
    </div>
  )
}

export default Contacto