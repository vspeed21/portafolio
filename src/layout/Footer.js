import Navegacion from '../components/Navegacion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-content mt-16 text-white-dark py-10'>
      <div className='flex flex-col md:flex-row items-center justify-between contenedor'>
          <Navegacion/>

        <div className='flex items-center gap-2 mt-3 md:mt-0'>
          <p className='text-lg'>
            Hecho por:
          </p>

          <a
            href='https://github.com/vspeed21'
            className='opacity-80 hover:underline hover:opacity-100 transition-opacity duration-300'
            target="_blank"
            rel="noopener noreferrer"
          >
            Victor Torres
          </a>
        </div>
      </div>

      <p className='text-center text-lg mt-6'>
        Copyright {''}
        <span className='font-bold'>{year}</span> - 
        All rights reserved
      </p>

    </footer>
  )
}

export default Footer