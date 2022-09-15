import styles from '../../styles/Alerta.module.css'

const Alerta = ({msg, error}) => {
  return (
    <p className={`${styles.alerta} ${error ? styles.error : styles.exito}`}>{msg}</p>
  )
}

export default Alerta