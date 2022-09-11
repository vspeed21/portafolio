import { useEffect, useRef, useState } from 'react';

import Link from 'next/link'
import styles from '../../styles/SobreMi.module.css';

const SobreMi = () => {
  const [animacion, setAnimacion] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      // console.log(y);
      
      y <= 270 ? setAnimacion(true) : setAnimacion(false);
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (
    <div className='contenedor'>
      <h2 className='heading'>Sobre mí</h2>

      <div ref={divRef} className={styles.sobre}>
      
        <div className={`${animacion ? 'animacionTexto' : ''} ${styles.texto}`}>
          <p>
            Soy una persona responsable, honesta, apasionado en mi área. He realizado diversos sitios web con diferentes tecnologías que me han permitido practicar mis conocimientos y así obtener cierto nivel de experiencia.
          </p>

          <p>
            Actualmente sigo mis estudios en la universidad, cursando Tecnico en desarrollo web
          </p>

          <Link href='/contacto'>
            <a className='btn'>
              Contactar
            </a>
          </Link>
        </div>

        <div className={`${styles.imagenes} ${animacion ? 'animacionImagen' : ''}`}>
          <img
            src={'/img/sobremi-1.jpg'}
            alt={'imagen sobre-mi seccion'}
          />

          <img
            src={'/img/sobremi-2.jpg'}
            alt={'imagen sobre-mi seccion'}
          />
        </div>
      </div>
    </div>
  )
}

export default SobreMi