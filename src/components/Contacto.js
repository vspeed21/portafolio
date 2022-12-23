import { GoMarkGithub, GoMail, GoLocation } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <section className="bg-content py-10 mt-10">
      <div className="contenedor flex flex-col md:flex-row gap-5 justify-between md:justify-evenly items-center">
        <div className="text-white-dark text-center md:text-left">
          <h3 className="text-4xl font-bold">
            Let's make <span className="text-secondary italic">something great </span>
            together
          </h3>

          <div className="mt-5 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center gap-2">
              <a 
                href='mailito:vtorresquintanilla0206@gmail.com'
                target='_blank'
                rel="noopener noreferrer"
                className="scale-150 font-bold"
              >
                <GoMail />
              </a>
              <p className="font-bold">vtorresquintanilla0206@gmail.com</p>
            </div>

            <div className="flex items-center gap-6 mt-3 md:ml-20">
              <a 
                href='mailito:vtorresquintanilla0206@gmail.com'
                target='_blank'
                rel="noopener noreferrer"
                className="scale-150"
              >
                <BsWhatsapp />
              </a>

              <a 
                href='https://github.com/vspeed21'
                target='_blank'
                rel="noopener noreferrer"
                className="scale-150"
              >
                <GoMarkGithub />
              </a>
            </div>
          </div>

        </div>
        <Formulario/>
      </div>
    </section>
  )
}

export default Contacto