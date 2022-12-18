import Stage from "./Stage"


const STAGES = [
    {
        id: 1,
        name: 'Meeting',
        description: 'We have a virtual or face-to-face meeting to listen to your needs about the website',
        imagePath: '/icons/meeting.svg',
    },
    {
        id: 2,
        name: 'Prototype',
        description: 'Once the requirements of the website have been heard, the prototype stage begins, which consists of bringing the site to life on paper and pencil.',
        imagePath: '/icons/prototype.svg',
    },
    {
        id: 3,
        name: 'UX/UI Design',
        description: 'Start looking for colors that are easy on the eye and fonts that are easy to read to color the prototype and matches the design of the website.',
        imagePath: '/icons/design.svg',
    },
    {
        id: 4,
        name: 'Developing',
        description: 'In this stage, the design is converted to code, looking for the most effective and efficient way to develop it.',
        imagePath: '/icons/coding.svg',
    },
]

function Methodology() {
  return (
    <section className="contenedor mt-16">
      <h1
        className='text-white-dark text-center text-4xl md:text-5xl p-5 font-bold'
      >Work Methodology</h1>

      <p className="text-white text-center max-w-lg mx-auto">
      My work process consists of 4 stages to obtain satisfactory results
      </p>

      {STAGES.map( stage => (
        <Stage
            key={stage.id}
            stage={stage}
        />
      ))}

      
    </section>
  )
}

export default Methodology