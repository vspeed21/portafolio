import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

 const BackendSkill = ({ backend }) => {
  const { images, description } = backend?.attributes;

	return (
		<>
      <div className='skill md:text-lg ml-5 md:col-start-2 md:col-end-3'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 py-3 md:py-0 bg-gray-700 shadow-lg'>
        {images?.data.map(image => (
          <Image
            key={image.id}
            src={image?.attributes?.url}
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