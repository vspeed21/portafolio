import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

function Project({ project, dataAos }) {
  const { nombre, descripcion, imagen, linkGit, linkProyecto, tecnologias } = project.attributes;

  return (
    <div
      data-aos={dataAos} 
      className="mt-5"
    >
        <div className='relative -z-10'>
          <div className='overflow-hidden flex justify-center'>
            <Image
              src={imagen.data.attributes.url}
              alt="imagen proyecto"
              className=""
              width={400}
              height={300}
            />
          </div>
        </div>

        <div className='text-white p-3 bg-[#3a3a3a] -mt-5 z-30 rounded-t-2xl max-w-[26rem] mx-auto'>
          <h2 className='text-xl text-center first-letter:uppercase font-bold py-1'>
            {nombre}
          </h2>
          <p>{descripcion}</p>
          
          <div className='flex gap-4 mt-3 justify-evenly'>
            <Link href={linkProyecto}>
              <a className='first-letter:uppercase bg-secondary font-bold p-2 rounded hover:bg-primary transition-colors duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
                see
              </a>
            </Link>
            
            <Link href={linkGit}>
              <a 
                className="first-letter:uppercase bg-[#161b22] font-bold p-2 rounded hover:bg-[#010409] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                repository
              </a>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Project