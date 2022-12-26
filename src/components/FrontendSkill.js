import ReactMarkdown from 'react-markdown';
import Image from 'next/image'

const FrontendSkill = ({ frontend }) => {
  const { images, description } = frontend.attributes;
  console.log(images);

  return (
    <>
      <div className='skill'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className='grid grid-cols-2 items-center sm:flex justify-evenly gap-4 bg-gray-700 shadow-lg py-3 md:py-0'>
        {images.data.map(image => (
          <Image
            src={image.attributes.url}
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