import Image from 'next/image';

const BackendSkill = ({skill}) => {
    const { nombre, descripcion, imagen} = skill.attributes;

  return (
    <div className={styles.skill}>
        <Image 
            width={300}
            height={250}
            src={imagen.data.attributes.url}
            alt={`imagen tecnologia ${nombre}`}
        />

        <div className={styles.textos}>
            <p className={styles.nombre}>{nombre}</p>
            {descripcion && 
                <p className={styles.descripcion}>{descripcion}</p>
            }
        </div>
    </div>
  )
}

export default BackendSkill