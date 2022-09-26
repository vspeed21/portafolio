import axios from 'axios';
import { useState } from 'react'

import styles from '../../styles/Contacto.module.css'
import Alerta from './Alerta';
import Spinner from './Spinner';

const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState({});
  const [errorInput, setErrorInput] = useState(false);
  const [cargando, setCargando] = useState(false);

  const er = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexTel = /^[a-z][a-z]*$/

  async function handleSubmit(e) {
    e.preventDefault();

    //Validacion para el nombre
    if(nombre === '') {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    if(nombre.length < 4) {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    if(!regexTel.test(nombre)) {
      setErrorInput(true);
      setTimeout(() => {
         setErrorInput(false)
       }, 3000);
       return;
    }

    //Validacion para el correo
    if(!er.test(email)) {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }else{
      setErrorInput(false);
    }

    //Validacion para el celular
    if(celular !== '') {
      if(!Number(celular)) {
        setErrorInput(true);
        setTimeout(() => {
          setErrorInput(false)
        }, 3000);
        return;
      }
    }

    //Validacion para el mensaje
    if(mensaje === '') {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    if(mensaje.length <= 20) {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false)
      }, 3000);
      return;
    }

    setErrorInput(false);
    setAlerta({});

    //Guardar mensaje en la api
    try {
      setCargando(true)
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contacto`;
      await axios.post(url, {nombre, email, celular, mensaje});
      setCargando(false)
      setAlerta({msg: '1', error: false});
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
      {cargando ? <Spinner/> :
        alerta.msg && !alerta.error &&
        <Alerta>
          Mensaje enviado correctamente
        </Alerta>
      }
      <div className={styles.campo}>
        <label htmlFor='nombre'>Nombre:</label>
        <input
          id='nombre'
          type={'text'}
          value={nombre}
          className={errorInput && nombre.length < 4 ? 'borde-rojo' : ''}
          onChange={e => setNombre(e.target.value)}
          placeholder={errorInput ? '' : 'Ingresa tu nombre'}
        />


        {errorInput && nombre === '' ? <p>El nombre es obligatorio</p> : 
         errorInput && nombre.length < 4 ? <p>Nombre muy corto. Ingrese mas de 4 caracteres</p> : 
         errorInput && !regexTel.test(nombre) && <p>El nombre no puede llevar un numero</p>}

      </div>

      <div className={styles.campo}>
        <label htmlFor='email'>E-mail:</label>
        <input
          id='email'
          type={'email'}
          value={email}
          className={errorInput && email === '' ? 'borde-rojo' : ''}
          onChange={e => setEmail(e.target.value)}
          placeholder={errorInput ? '' : 'Ingresa tu email'}
        />
        {errorInput && !er.test(email) && <p>Dirección de correo no válida</p>}

      </div>

      <div className={styles.campo}>
        <label htmlFor='celular'>Celular:</label>
        <input
          id='celular'
          type={'tel'}
          value={celular}
          className={errorInput && celular !== '' && !Number(celular) ? 'borde-rojo' : ''}
          onChange={e => setCelular(e.target.value)}
          placeholder='Ingresa tu telefono'
        />

        {errorInput && celular !== '' && !Number(celular) && <p>Ingrese un numero válido</p>}
      </div>

      <div className={styles.campo}>
        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea 
          id='mensaje'
          onChange={e => setMensaje(e.target.value)}
          value={mensaje}
          className={errorInput && mensaje === '' ? 'borde-rojo' : ''}
          placeholder={errorInput ? '' : 'Ingresa tu mensaje'}
        >
        </textarea>

        {errorInput && mensaje === '' ? <p>Ingrese su mensaje</p> : 
          errorInput && mensaje.length <= 17 && <p>Mensaje muy corto</p>
        }
      </div>

      <input
        type='submit'
        value='Contactar'
      />
    </form>
  )
}

export default Formulario