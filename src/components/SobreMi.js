import Link from 'next/link'
import Image from 'next/image'

import reactIcon from '../../public/icons/react-color.svg'; 
import cssIcon from '../../public/icons/css-color.svg';
import sassIcon from '../../public/icons/sass-color.svg'
import tailwindIcon from '../../public/icons/tailwindcss-color.svg'
import gulpLogo from '../../public/icons/gulp-color.svg';
import JSLogo from '../../public/icons/js-color.svg';

const SobreMi = () => {
  const images = [reactIcon, cssIcon, sassIcon, tailwindIcon, gulpLogo, JSLogo]

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

          <Link href='/contacto'>
            <a 
              className='bg-secondary py-1 px-3 mt-5 inline-block rounded hover:bg-[#1c03ff] font-bold transition-colors duration-300'
            >
              Contact me
            </a>
          </Link>
        </div>

        <div className='max-w-lg'>
          <p>With two years of experience I have developed websites with different web technologies for clients in my community to gain experience.</p>

          <ul className="list-disc mt-3 ml-5">
            <li className="text-lg">Team work</li>
            <li className="text-lg">Proactive</li>
            <li className="text-lg">Problem solving</li>
          </ul>

          <div className='flex gap-3 mt-4'>
            {images.length ? images.map( (image, i) => (
              <Image
              key={i}
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