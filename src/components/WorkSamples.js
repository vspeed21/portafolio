import Project from "./Project";

function WorkSamples({ projects }) {

  return (
    <section className="contenedor mt-16 min-h-full">
      <h1
        className='text-white-dark text-center text-4xl md:text-5xl p-5 font-bold'
      >Work Samples</h1>

      <p className="text-white text-center max-w-lg mx-auto">In my experience I have developed several websites with different technologies, below I show you some of them</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        {projects?.map( project => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkSamples