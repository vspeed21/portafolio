import Navegacion from '../components/Navegacion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-content mt-16 text-white-dark py-10'>
      <div className='flex flex-col md:flex-row items-center justify-between contenedor'>
        <div>
          <Navegacion/>
          
          <div class="py-3 px-5 border border-gray-400 border-solid flex items-center gap-3 mt-3 rounded-md">
            Estado: 
            <div className='flex items-center gap-2'>
              <span className='bg-lime-400 rounded-full w-3 h-3'></span> 
              <p>Disponible</p>
            </div>
          </div>
        </div>

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