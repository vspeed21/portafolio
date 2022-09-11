import { useState, useEffect, useRef } from 'react';

import styles from '../../styles/Tabla.module.css';

const Tabla = () => {
  const [animacion, setAnimacion] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      y <= 230 ? setAnimacion(true) : setAnimacion(false);

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (
    <div className={styles.tabla}>
      <div ref={divRef} className={`${styles.flex} contenedor`}>
        <div className={`${styles.categoria} ${animacion ? 'animacionProyectos' : ''}`}>
          <p>40+</p>
          <p>Proyectos</p>
        </div>

        <div className={`${styles.categoria} ${animacion ? 'animacionXP' : ''}`}>
          <p>2+</p>
          <p>Años de experiencia</p>
        </div>
      </div>
    </div>
  )
}

export default Tabla