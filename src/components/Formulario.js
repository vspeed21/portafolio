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
  const [errorInput, setErrorInput] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    if(nombre === '') {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    if(email === '') {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    if(mensaje === '') {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
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
    }, 4000);

    setNombre('')
    setEmail('')
    setCelular('')
    setMensaje('');
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
          className={errorInput && nombre === '' && 'borde-rojo'}
          onChange={e => setNombre(e.target.value)}
          placeholder={errorInput ? '' : 'Ingresa tu nombre'}
        />

        {errorInput && nombre ==='' && <p>Ingrese su nombre</p>}
      </div>

      <div className={styles.campo}>
        <label htmlFor='email'>E-mail:</label>
        <input
          id='email'
          type={'email'}
          value={email}
          className={errorInput && email === '' && 'borde-rojo'}
          onChange={e => setEmail(e.target.value)}
          placeholder={errorInput ? '' : 'Ingresa tu email'}
        />

        {errorInput && email === '' && <p>Ingrese su correo electronico</p>}
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
          value={mensaje}
          className={errorInput && mensaje === '' && 'borde-rojo'}
          placeholder={errorInput ? '' : 'Ingresa tu mensaje'}
        >
        </textarea>

        {errorInput && mensaje === '' && <p>Ingrese su mensaje</p>}
      </div>

      <input
        type={'submit'}
        value='Contactar'
      />
    </form>
  )
}

export default Formulario