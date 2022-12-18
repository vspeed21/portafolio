import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

import reactIcon from '../../public/icons/react-color.svg';
import cssIcon from '../../public/icons/css-color.svg';
import sassIcon from '../../public/icons/sass-color.svg'
import tailwindIcon from '../../public/icons/tailwindcss-color.svg'

function Project() {
  const [info, setInfo] = useState(false);

  const images = [reactIcon, cssIcon, sassIcon, tailwindIcon]
  return (
    <div className="mt-5">
        <div className='relative -z-10'>
          <div className='overflow-hidden'>
            <img
              src="/img/proyectos/proyectos-react/buscador-clima.png"
              alt="imagen proyecto"
              className="hover:scale-125 transition-all duration-300"
            />
          </div>
        </div>

        <div className='text-white p-3 bg-[#3a3a3a] -mt-5 z-30 rounded-t-2xl'>
          <h2 className='text-xl text-center first-letter:uppercase font-bold py-1'>nombre proyecto</h2>
          <p>info acerca del proyecto</p>
          
          <div className='flex gap-4 mt-3 justify-evenly'>
            <Link href="/">
              <a className='first-letter:uppercase bg-secondary font-bold p-2 rounded hover:bg-primary transition-colors duration-300'>
                see
              </a>
            </Link>
            
            <Link href="/">
              <a className="first-letter:uppercase bg-[#161b22] font-bold p-2 rounded hover:bg-[#010409] transition-colors duration-300">
                repository
              </a>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Project