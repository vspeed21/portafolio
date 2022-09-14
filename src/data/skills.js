import { generarId } from "../helpers"

const Frontend = [
  {
    id: generarId(),
    nombre: 'CSS',
    descripcion: 'Styled Components & CSS modules',
    imagen: '/logos/css.png'
  },

  {
    id: generarId(),
    nombre: 'SASS',
    descripcion: '',
    imagen: '/logos/logo-sass.png'
  },

  {
    id: generarId(),
    nombre: 'Tailwindcss',
    descripcion: '',
    imagen: '/logos/logo-tailwindcss.png'
  },

  {
    id: generarId(),
    nombre: 'Bootstrap',
    descripcion: '',
    imagen: '/logos/logo-bootstrap.png'
  },

  {
    id: generarId(),
    nombre: 'JavaScript',
    descripcion: 'ES6+, Async, Fetch, etc.',
    imagen: '/logos/logo-js.png'
  },

  {
    id: generarId(),
    nombre: 'React',
    descripcion: 'useState, useEffect react-router-dom, context & Next.js',
    imagen: '/logos/logo-react.png'
  },
]

const Backend = [
  {
    id: generarId(),
    nombre: 'PHP',
    descripcion: 'Validación de formularios y la realización de un CRUD',
    imagen: '/logos/logo-php.png'
  },

  {
    id: generarId(),
    nombre: 'MySQL',
    descripcion: '',
    imagen: '/logos/logo-mysql.png'
  },

  {
    id: generarId(),
    nombre: 'Mongo DB',
    descripcion: '',
    imagen: '/logos/logo-mongodb.png'
  },
  
]

const Herramientas = [
  {
    id: generarId(),
    nombre: 'Gulp',
    descripcion: 'Conversión de imagenes, Compilar SASS y JavaScript',
    imagen: '/logos/logo-gulp.jpg'
  },

  {
    id: generarId(),
    nombre: 'Office 365',
    descripcion: '',
    imagen: '/logos/logo-office.png'
  },

  {
    id: generarId(),
    nombre: 'Git & GitHub',
    descripcion: '',
    imagen: '/logos/git-github-logo.png'
  },
]

export {
  Frontend,
  Backend,
  Herramientas,
}