import 'boxicons'

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
            <a href='mailito:vtorresquintanilla0206@gmail.com'>
              <box-icon name='gmail' type='logo' size='cssSize'></box-icon>
            </a>
            <p>vtorresquintanilla0206@gmail.com</p>
          </div>

          <div className={styles.flex}>
            <a href='https://api.whatsapp.com/send?phone=50499152520'>
              <box-icon name='whatsapp' type='logo' size='cssSize'></box-icon>
            </a>

            <a href='https://github.com/vspeed21'>
              <box-icon name='github' type='logo' size='cssSize'></box-icon>
            </a>
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