import axios from 'axios';
import { useState } from 'react'

import styles from '../../styles/Contacto.module.css'
import Alerta from './Alerta';

const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    if([nombre, email, mensaje].includes('')) {
      setAlerta({msg: 'Todos los campos son obligatorios', error: true})
      setTimeout(() => {
        setAlerta({})
      }, 5000);
      return;
    }

    setAlerta({});

    //Guardar mensaje en la api
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contacto`;
      await axios.post(url, {nombre, email, celular, mensaje});
      setAlerta({msg: 'Mensaje enviado correctamente', error: false});
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true});
    }

    setTimeout(() => {
      setAlerta({});
    }, 5000);
  }

  return (
    <form 
      className={`${styles.formulario} contenedor`} 
      onSubmit={handleSubmit} noValidate
    >
      {alerta.msg && 
        <Alerta msg={alerta.msg} error={alerta.error}/>
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