import { useEffect, useRef } from 'react';
import Link from 'next/link'
import Typed from 'typed.js';

import Navegacion from '../components/Navegacion';

const Header = ({ informacion }) => {

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
    <header className={`hero ${informacion ? 'wrapper': ''}`}>
      <div className='contenedor text-white p-7 flex flex-col md:flex-row justify-between items-center'>
        <div className=''>
          <Link href="/">
            <img 
              src="/logo.png" 
              alt='logo'
              className='w-12 h-12 cursor-pointer'
            />
          </Link>
        </div>

        <Navegacion
          informacion={informacion}
        />
      </div>

      {informacion ? (
        <div className="max-w-3xl text-white mx-auto grid md:grid-cols-2 place-content-center gap-7">
          <div className='flex flex-col item-center justify-center'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4'>
              Hola, soy {''}
              <span ref={el}></span>
            </h2>

            <p className='text-2xl text-center'>Transformo tu idea a una forma de vender</p>
          </div>

        <p className='gradient inline-block text-transparent -mt-14 md:mt-0'> {'</>'} </p>

        </div>
      ): null}

    </header>
  )
}

Header.defaultProps = {
  informacion: null
}

export default Header