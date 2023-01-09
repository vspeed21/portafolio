import Stage from "./Stage"

function Methodology({stages}) {
  return (
    <section className="contenedor mt-16">
      <h1
        className='text-white-dark text-center text-4xl md:text-5xl p-5 font-bold'
      >Work Methodology</h1>

      <p className="text-white text-center max-w-lg mx-auto">
      My work process consists of 4 stages to obtain satisfactory results
      </p>

      {stages?.map( stage => (
        <Stage
          dataAos={stage.id % 2 ? "flip-right" : "flip-left"}
          key={stage.id}
          stage={stage}
        />
      ))}

      
    </section>
  )
}

export default Methodology