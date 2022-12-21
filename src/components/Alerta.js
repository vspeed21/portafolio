const Alerta = ({children, error, msg}) => {
  return (
    <p className={`text-center font-bold py-2 border-l-4 mt-2 ${error ? 'bg-red-100 border-l-red-400 text-red-700': 'bg-green-100 border-l-green-400 text-green-700'}`}>{children || msg}</p>
  )
}

export default Alerta