import Image from 'next/image';

function Stage({ stage }) {
  const { name, description, image } = stage.attributes;

  return (
    <div className="mx-auto bg-[#3a3a3a] mt-5 flex flex-col md:flex-row gap-4 items-center p-10 md:py-2 max-w-sm md:max-w-3xl">
      <figure>
        <Image
          src={image?.data?.attributes?.url}
          alt={`${name} illustration`}
          width={300}
          height={250}
        />
      </figure>

      <div className='text-white'>
        <h2 className='font-bold text-xl text-center md:text-left pb-2'>{name}</h2>
        <p className='max-w-xs'>{description}</p>
      </div>
    </div>
  )
}

export default Stage