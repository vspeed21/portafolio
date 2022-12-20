import reactIcon from '../../public/icons/react-color.svg'; 
import cssIcon from '../../public/icons/css-color.svg';
import sassIcon from '../../public/icons/sass-color.svg'
import tailwindIcon from '../../public/icons/tailwindcss-color.svg';
import FrontendSkill from './FrontendSkill';
import BackendSkill from './BackendSkill';

function SkillSection() {
	
  const images = [reactIcon, cssIcon, sassIcon, tailwindIcon]

	return (
		<section>
			<div className="grid md:grid-cols-2 md:grid-rows-3 gap-5 text-white max-w-3xl mx-auto p-4 border-4 border-gray-600 rounded-md">
				<FrontendSkill/>
			</div>
		</section>
	)
}

export default SkillSection