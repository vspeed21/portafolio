import { useEffect, useRef } from 'react';
import Link from 'next/link'
import Typed from 'typed.js';

const Header = ({ informacion }) => {

  // const el = useRef(null);
  // const typed = useRef(null)

  // useEffect( () => {
  //   const options = {
  //     strings: ['Victor Torres', 'Desarrollador web', 'Maquetador web'],
  //     startDelay: 300,
  //     typeSpeed: 150,
  //     backDelay: 150,
  //     backSpeed: 150,
  //     smartBackspace: true,
  //     showCursor: false,
  //     loop: true,
  //   }

  //   if(informacion){
  //     typed.current = new Typed(el.current, options);

  //     return () => {
  //       typed.current.destroy();
  //     }
  //   }
  // }, []);

  return (
    <header className="hero">
      <div className='contenedor text-white p-10'>
        hola
      </div>
    </header>
  )
}

Header.defaultProps = {
  informacion: null
}

export default Header