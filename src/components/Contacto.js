import { GoMarkGithub, GoMail, GoLocation } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <div className={`${styles.padre} contenedor`}>
      <div className={`${styles.contacto}`}>
        <div className={styles.texto}>
          <h3>
            ¿Quiere realizar un proyecto?
            <span>Hagamoslo juntos</span>
          </h3>

          <div className={styles.email}>
            <a 
              href='mailito:vtorresquintanilla0206@gmail.com'
              target='_blank'
              rel="noopener noreferrer"
            >
              <GoMail />
            </a>
            <p>vtorresquintanilla0206@gmail.com</p>
          </div>

          <div className={styles.email}>
            <a><GoLocation/></a>
            <p>La Lima, Cortes. Honduras</p>
          </div>

          <div className={styles.flex}>
            <a 
              href='https://api.whatsapp.com/send?phone=50499152520'
              target='_blank'
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
            </a>

            <a 
              href='https://github.com/vspeed21'
              target='_blank'
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
            </a>
          </div>
        </div>

        <a className='btn' href='/data/CV-VictorTorres.pdf' download>
          Descargar CV
        </a>
      </div>

      <Formulario/>
    </div>
  )
}

export default Contacto