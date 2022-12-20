import Image from 'next/image'

import nodeIcon from '../../public/icons/nodejs-color.svg'; 
import npmIcon from '../../public/icons/npm-color.svg';
import dbIcon from '../../public/icons/database.svg'

 const BackendSkill = () => {
	
  const images = [nodeIcon, npmIcon, dbIcon]

	return (
		<>
			<ul className='list-disc md:text-lg ml-5 md:col-start-2 md:col-end-3'>
				<h2 className='text-white-dark text-2xl font-bold text-center'>Back End</h2>
				<li className="mt-5">REST APIs with Node.js & express</li>
				<li>NPM for package management</li>
				<li>Mongo DB - mongoose</li>
				<li>React</li>
			</ul>

			<div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 bg-gray-500 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 py-3 md:py-0'>
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

export default BackendSkill