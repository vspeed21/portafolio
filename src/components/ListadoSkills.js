import AOS from 'aos';
import { useEffect } from 'react';

import FrontendSkill from './FrontendSkill'
import BackendSkill from './BackendSkill'
import HerramientaSkill from './HerramientaSkill'

const ListadoSkills = ({frontend, backend, tool}) => {
  return (
    <>
      <div className='relative'>
        <img 
          src='/icons/wave-skill.svg'
          alt='wave'
        />
        <h1 
        className='text-white-dark text-2xl md:text-5xl md:-mt-16 font-bold absolute top-2/4 left-2/4 center'
        >
          My web skills
        </h1>
      </div>

      <section className="grid md:grid-cols-2 md:grid-rows-3 gap-5 text-white max-w-3xl md:mx-auto p-4 rounded-md bg-gray-800 mx-3">
          <FrontendSkill
            frontend={frontend}
          />
          <BackendSkill
            backend={backend}
          />
          <HerramientaSkill
            tool={tool}
          />
	    </section>
    </>
  )
}

export default ListadoSkills