import Image from 'next/image';

function Stage({ stage }) {
  return (
    <div className="max-w-3xl mx-auto bg-[#3a3a3a] mt-5 flex flex-col md:flex-row gap-4 items-center p-10 md:py-2">
      <figure>
        <Image
          src={stage.imagePath}
          alt={`${stage.name} illustration`}
          width={300}
          height={250}
        />
      </figure>

      <div className='text-white'>
        <h2 className='font-bold text-xl text-center md:text-left pb-2'>{stage.name}</h2>
        <p className='max-w-xs'>{stage.description}</p>
      </div>
    </div>
  )
}

export default Stage