
import FrontendSkill from './FrontendSkill';
import BackendSkill from './BackendSkill';
import HerramientaSkill from './HerramientaSkill';

function SkillSection() {

	return (
		<section>
			<div className="grid md:grid-cols-2 md:grid-rows-3 gap-5 text-white max-w-3xl md:mx-auto p-4 rounded-md bg-gray-800 mx-3">
				<FrontendSkill/>
				<BackendSkill/>
				<HerramientaSkill/>
			</div>
		</section>
	)
}

export default SkillSection