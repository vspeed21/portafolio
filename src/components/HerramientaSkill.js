import Image from 'next/image';

import styles from '../../styles/Skill.module.css'

const BackendSkill = ({herramienta}) => {
    const { nombre, descripcion, imagen} = herramienta;

  return (
    <div className={styles.skill}>
        <Image 
            width={300}
            height={nombre === 'Gulp' ? 400 : 250}
            src={imagen}
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