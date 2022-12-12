const Alerta = ({children, error, msg}) => {
  return (
    <p className={`${styles.alerta} ${error ? styles.error : styles.exito}`}>{children || msg}</p>
  )
}

export default Alerta