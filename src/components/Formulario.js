import axios from 'axios';
import { useState } from 'react'

import Alerta from './Alerta';
import Spinner from './Spinner';

function Formulario() {
  const [emailOCell, setEmailOCell] = useState('email');
  const [data, setData] = useState({
    name: '',
    emailOrCell: '',
    message: '',
  });

  const [alerta, setAlerta] = useState('');
  const [loading, setLoading] = useState(false);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false)
  const [validMessage, setvalidMessage] = useState(false);

  const regex = /^[+0-9]*$/;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleInput = e => {
    if(e.target.name === 'name' && e.target.value.length < 3) {
      setValidName(true);
      return;
    }
    setValidName(false)

    if(e.target.id === 'email' && !validarEmail(e.target.value)) {
      setValidEmail(true);
      return;
    }
    setValidEmail(false);

    if (e.target.id === 'cel' && !regex.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      setValidPhone(true);
      return;
    }
    setValidPhone(false);

    if(e.target.id === 'message' && e.target.value.length < 10) {
      setvalidMessage(true);
      return;
    }
    setvalidMessage(false);
  }

  function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_API_BACKEND}/api/contacto`;
      const response = await axios.post(url, data);
      setAlerta(response.data.msg);
      setTimeout(() => {
        setAlerta('')
      }, 5000);

      setData({
        name: '',
        emailOrCell: '',
        message: '',
      })
      setLoading(false);

    } catch (error) {
      setLoading(false)
      setAlerta(error.response.data.msg);
      setTimeout(() => {
        setAlerta('')
      }, 5000);
      setLoading(false);
    }
  }

  return(
    <form
      onSubmit={handleSubmit}
      className='bg-[#383838] p-5 rounded-md shadow-xl w-auto md:w-96'
      noValidate
    >
      {loading ? <Spinner/> : alerta ? <Alerta msg={alerta} error={alerta === 'Duplicate message' ? 'true': null} /> : null}

      <div className="flex flex-col gap-2 mb-5">
        <label
          htmlFor='name'
          className='uppercase text-white-dark font-bold mt-4'
        >
          Name:
        </label>

        <input
          type="text"
          id='name'
          name='name'
          className="bg-gray-300 p-2 pl-3 rounded focus:outline-secondary outline-none placeholder-gray-900"
          placeholder="Enter your name"
          value={data.name}
          onChange={handleChange}
          onInput={handleInput}
        />

        {validName && data.name.length < 3 ? <Alerta msg="Short name" error="true" /> : null}
      </div>

      <div className="flex gap-5">
        <div className='flex flex-row-reverse'>
          <label
            htmlFor='email'
            className='uppercase text-white-dark font-bold ml-2'
          >
            Email
          </label>

          <input
            type="radio"
            name='emailorcel'
            id='email'
            onClick={() => {
              data.emailOrCell = ''
              setEmailOCell('email')
            }}
          />
        </div>

        <div className='flex flex-row-reverse'>
          <label
            htmlFor='cel'
            className='uppercase text-white-dark font-bold ml-2'
          >
            Phone
          </label>

          <input
            type="radio"
            name='emailorcel'
            id='cel'
            onClick={() => {
              data.emailOrCell = ''
              setEmailOCell('cel')
            }}
          />
        </div>
      </div>
      <input
          type={emailOCell === 'email' ? 'email': 'tel'}
          className="bg-gray-300 p-2 pl-3 rounded mt-4 focus:outline-secondary outline-none placeholder-gray-900 mb-5"
          id={emailOCell === 'email' ? 'email': 'cel'}
          name="emailOrCell"
          placeholder={`Enter your ${emailOCell}`}
          value={data.emailOrCell}
          onChange={handleChange}
          onInput={handleInput}
        />

        {validEmail && !validarEmail(data.emailOrCell) ? <Alerta msg="Invalid email address" error='true' /> : 
        validPhone ? <Alerta msg="Don't type letters" error='true' /> : null}

      <div className="flex flex-col gap-2 mb-5">
        <label
          htmlFor='message'
          className='uppercase text-white-dark font-bold mt-4'
        >
          Message:
        </label>

        <textarea
          id='message'
          name="message"
          className="bg-gray-300 p-2 pl-3 rounded focus:outline-secondary outline-none placeholder-gray-900 h-40"
          placeholder="Enter your message"
          value={data.message}
          onChange={handleChange}
          onInput={handleInput}
        >
        </textarea>

        {validMessage ? <Alerta msg="Short message" error="true"/> : null}
      </div>

      <div className='flex justify-end'>
        <input
          type='submit'
          value="contact"
          disabled={data.name === '' || data.emailOrCell === '' || data.message === '' ? true : false}
          className={`py-2 px-4 uppercase font-bold rounded w-full md:w-auto text-white transition-colors duratin-300 ${data.name === '' || data.emailOrCell === '' || data.message === '' || validName || validPhone || validEmail || validMessage ? 'bg-blue-100 hover:cursor-not-allowed opacity-90' : 'bg-secondary hover:cursor-pointer hover:bg-blue-700 opacity-100'}`}
        />
      </div>

    </form>
  )
}

export default Formulario