import AOS from 'aos';
import { useEffect } from 'react';

import FrontendSkill from './FrontendSkill'
import BackendSkill from './BackendSkill'
import HerramientaSkill from './HerramientaSkill'
import SkillSection from './SkillSection';

const ListadoSkills = ({frontends, backends, herramientas}) => {
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

      <SkillSection/>
    </>
  )
}

export default ListadoSkills