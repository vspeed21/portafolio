import ReactMarkdown from 'react-markdown'
import Image from 'next/image';

function Service({ service }) {
  const { tittle, subtittle, image, description } = service.attributes;

  return (
    <div
      data-aos={tittle === 'Frontend' ? "flip-left" : "flip-right"}
      data-aos-duration="1000"
      className="bg-content py-5 px-3 rounded-md mx-auto max-w-md service"
    >
        <h3 className="text-center text-2xl font-bold">{tittle}</h3>
        <p className="text-center text-lg mt-1">{subtittle}</p>

        <div className="flex justify-center">
          <Image
              src={image.data.attributes.url}
              alt={`icon ${tittle}`}
              width={300}
              height={300}
          />
        </div>
        
        <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  )
}

export default Service