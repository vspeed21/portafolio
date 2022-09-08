import styles from '../../styles/Tabla.module.css';

const Tabla = () => {
  return (
    <div className={styles.tabla}>
      <div className={`${styles.flex} contenedor`}>``
        <div className={styles.categoria}>
          <p>40+</p>
          <p>Proyectos</p>
        </div>

        <div className={styles.categoria}>
          <p>2+</p>
          <p>Años de experiencia</p>
        </div>
      </div>
    </div>
  )
}

export default Tabla