import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const HerramientaSkill = ({ tool }) => {
	const { images, description } = tool.attributes;

  return (
    <>
      <div className="skill md:text-lg ml-5" data-aos="zoom-in">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 bg-gray-700 shadow-lg py-3 md:py-0'>
        {images?.data.map(image => (
          <Image
            data-aos={image.id % 2 ? 'fade-down' : 'fade-up'}
            key={image?.id}
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

export default HerramientaSkill