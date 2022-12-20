import Image from 'next/image';

import gitIcon from '../../public/icons/git-color.svg'; 
import githubIcon from '../../public/icons/github-color.svg';

const HerramientaSkill = () => {
	const images = [gitIcon, githubIcon]

  return (
		<>
			<ul className='list-disc md:text-lg ml-5'>
				<h2 className='text-white-dark text-2xl font-bold text-center'>Tools</h2>
				<li className="mt-5">Git for version control</li>
				<li>GitHub to collaborate and open source projects</li>
			</ul>

			<div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 py-3 md:py-0 bg-gray-400 shadow-lg'>
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

export default HerramientaSkill