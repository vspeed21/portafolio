import { useState } from 'react'

import styles from '../../styles/Contacto.module.css'

const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if([nombre, email, mensaje].includes('')) {
      setAlerta('Todos los campos son obligatorios')
      setTimeout(() => {
        setAlerta('')
      }, 3000);
      return;
    }

    setAlerta('');
  }

  return (
    <form 
      className={`${styles.formulario} contenedor`} 
      onSubmit={handleSubmit} noValidate
    >
      {alerta && 
        <p className='alerta'>{alerta}</p>
      }
      <div className={styles.campo}>
        <label htmlFor='nombre'>Nombre:</label>
        <input
          id='nombre'
          type={'text'}
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder='Ingresa tu nombre'
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor='email'>E-mail:</label>
        <input
          id='email'
          type={'email'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Ingresa tu correo'
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor='celular'>Celular:</label>
        <input
          id='celular'
          type={'tel'}
          value={celular}
          onChange={e => setCelular(e.target.value)}
          placeholder='Ingresa tu telefono'
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea 
          id='mensaje'
          onChange={e => setMensaje(e.target.value)}
          placeholder='Ingresa tu mensaje'
          value={mensaje}
        >
        </textarea>
      </div>

      <input
        type={'submit'}
        value='Contactar'
      />
    </form>
  )
}

export default Formulario