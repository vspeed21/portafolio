import Image from 'next/image';

const BackendSkill = ({herramienta}) => {
    const { nombre, descripcion, imagen } = herramienta.attributes;

  return (
    <div className="">
        <Image 
            width={300}
            height={nombre === 'Gulp' ? 400 : 250}
            src={imagen.data.attributes.url}
            alt={`imagen tecnologia ${nombre}`}
        />

        <div className="">
            <p className="">{nombre}</p>
            {descripcion && 
                <p className="">{descripcion}</p>
            }
        </div>
    </div>
  )
}

export default BackendSkill