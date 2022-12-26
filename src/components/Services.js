import Service from "./Service";

function Services({services}) {

  return (
    <section className="contenedor">
      <h2
        className='text-white-dark text-center text-4xl md:text-5xl pt-10 font-bold'
      >My Services</h2>

      <div className="flex flex-col md:flex-row text-white mt-10 gap-4 justify-evenly">
        {services?.map(service => (
          <Service
            key={service.id}
            service={service}
          />
        ))}
      </div>

    </section>
  )
}

export default Services