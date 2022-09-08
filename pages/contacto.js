import React from 'react'
import Contacto from '../src/components/Contacto'
import Layout from '../src/layout/Layout'

const contacto = () => {
  return (
    <Layout pagina='Contacto'>
      <h2 className='heading'>Contacto</h2>

      <Contacto />
    </Layout>
  )
}

export default contacto