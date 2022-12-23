import React from 'react'
import Contacto from '../src/components/Contacto'
import Layout from '../src/layout/Layout'

const contacto = () => {
  return (
    <Layout pagina='Contact'>
      <div className='relative'>
        <img 
          src='/icons/wave-skill.svg'
          alt='wave'
        />
        <h1 
        className='text-white-dark text-2xl md:text-5xl md:-mt-16 font-bold absolute top-2/4 left-2/4 center uppercase'
        >
          get in touch
        </h1>
      </div>

      <Contacto/>
    </Layout>
  )
}

export default contacto