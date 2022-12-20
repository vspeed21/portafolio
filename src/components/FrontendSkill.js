import Image from 'next/image'

import reactIcon from '../../public/icons/react-color.svg';
import tsIcon from '../../public/icons/typescript-color.svg';
import sassIcon from '../../public/icons/sass-color.svg'
import tailwindIcon from '../../public/icons/tailwindcss-color.svg';

const FrontendSkill = () => {

  const images = [reactIcon, tsIcon, sassIcon, tailwindIcon]

  return (
    <>
      <ul className='list-disc md:text-lg ml-5'>
        <h2 className='text-white-dark text-2xl font-bold text-center'>Frontend</h2>
        <li className="mt-5">Semantic HTML</li>
        <li className="">
          Design
          <ul className='list-disc pl-3'>
            <li className='mt-1'>Responsive CSS</li>
            <li className='mt-1'>SASS for flexible & reusable styles</li>
            <li className='mt-1'>TailwindCSS</li>
            <li className='mt-1'>Styled Components</li>
          </ul>
        </li>
        <li>Modern JavaScript (ES6+)</li>
        <li>Typescript for JavaScript types</li>
        <li>React</li>
      </ul>

      <div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 bg-gray-400 shadow-lg'>
        {images.map(image => (
          <Image
            src={image}
            alt="icon"
            width={50}
            height={50}
          />
        ))}
      </div>
    </>
  )
}

export default FrontendSkill