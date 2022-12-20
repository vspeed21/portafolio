import Image from "next/image";

function Services() {
  return (
    <section className="contenedor">
      <h2
        className='text-white-dark text-center text-4xl md:text-5xl pt-10 font-bold'
      >My Services</h2>

      <div className="flex flex-col md:flex-row text-white mt-10 gap-4 justify-evenly">
        <div className="bg-content py-5 px-3 rounded-md mx-auto max-w-md">
          <h3 className="text-center text-2xl font-bold">Frontend</h3>
          <p className="text-center text-lg mt-1">Client side</p>

          <div className="flex justify-center">
            <Image
              src="/icons/frontend.svg"
              alt="icon frontend"
              width={300}
              height={300}
            />
          </div>

          <ul className="list-disc mt-3 ml-5">
            <li className="text-lg">Site development with best practices</li>
            <li className="text-lg">website maintenance</li>
          </ul>
        </div>

        <div className="bg-content py-5 px-3 rounded-md mx-auto max-w-md">
          <h3 className="text-center text-2xl font-bold">Backend</h3>
          <p className="text-center text-lg mt-1">Server side</p>

          <div className="flex justify-center">
            <Image
              src="/icons/backend.svg"
              alt="icon frontend"
              width={300}
              height={300}
            />
          </div>

          <ul className="list-disc mt-3 ml-5">
            <li className="text-lg">Authentication</li>
            <li className="text-lg">server installation and maintenance</li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Services