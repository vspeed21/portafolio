import Link from 'next/link'
import Image from 'next/image'

import reactIcon from '../../public/icons/react-color.svg'; 
import cssIcon from '../../public/icons/css-color.svg';
import sassIcon from '../../public/icons/sass-color.svg'
import tailwindIcon from '../../public/icons/tailwindcss-color.svg'

const SobreMi = () => {
  const images = [reactIcon, cssIcon, sassIcon, tailwindIcon]

  return (
    <>
      <h1 
      className='text-white-dark text-center text-4xl md:text-5xl p-5 font-bold'
      >About me</h1>

      <div className='grid md:grid-cols-2 place-content-center text-white contenedor gap-5 text-xl'>
        <div className='max-w-lg'>
          <p>
            I consider myself a responsible, honest, passionate person in my area.
            Wanting to enter the world of work to demonstrate my skills 
          </p>
        </div>

        <div className='max-w-lg'>
          <p>With two years of experience I have developed websites with different web technologies for clients in my community to gain experience.</p>

          <div className='flex gap-3 mt-4'>
            {images.length ? images.map( image => (
              <Image 
              src={image} 
              alt='icon'
              width={32} 
              height={32}
            />
            )): null }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default SobreMi