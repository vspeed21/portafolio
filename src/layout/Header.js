import { useEffect, useRef } from 'react';
import Link from 'next/link'
import Typed from 'typed.js';
import { useRouter } from 'next/router';

import styles from '../../styles/Header.module.css'

const Header = ({ informacion }) => {

  const router = useRouter();
  const path = router.pathname;

  const el = useRef(null);
  const typed = useRef(null)

  useEffect( () => {
    const options = {
      strings: ['Victor Torres', 'Desarrollador web', 'Maquetador web'],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    }

    if(informacion){
      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      }
    }

    

  }, []);

  return (
    <header className={`${styles.header} ${informacion && styles.wrapper}`}>
      <div className={`${styles.flex} contenedor`}>
        <div>
          <Link href='/'>
            <a>
              <img
                src='/logo.png'
                alt='logo tikodev'
              />
            </a>
          </Link>
        </div>

        <nav className={styles.navegacion}>
          {informacion === null && 
            <Link href='/'>
              Inicio
            </Link>
          }

          <Link href='/skills'>
            <a className={path === '/skills' && styles.active_link}>
              Habilidades
            </a>
          </Link>
          <Link href='/contacto'>
            <a className={path === '/contacto' && styles.active_link}>
              Contacto
            </a>
          </Link>
        </nav>
      </div>


      {informacion && (
        <div className={`${styles.grid} contenedor`}>
            <div>
              <h2>
                Hola, soy {''}
                <span ref={el}></span>
              </h2>

              <p>Transformo tu idea a una forma de vender</p>
            </div>

            <p> {'</>'} </p>

        </div>
      )}
    </header>
  )
}

Header.defaultProps = {
  informacion: null
}

export default Header