import { generarId } from "../helpers"

const Reacts = [
  {
    id: generarId(),
    nombre: 'Agenda de contactos',
    descripcion: 'Una simple agenda de contactos con LocalStorage incluido',
    imagen: '/img/proyectos/proyectos-react/contact-list.png',
    linkProyecto: 'https://contact-list-vt.netlify.app',
    linkGit: 'https://github.com/vspeed21/contact-list',

    tecnologias: [
      {
        id: generarId(),
        imagen: '/logos/logo-react.png'
      },

      {
        id: generarId(),
        imagen: '/logos/logo-tailwindcss.png'
      },
    ]
  },

  {
    id: generarId(),
    nombre: 'Buscador de Clima',
    descripcion: 'Ingresa la ciudad y el pais para poder observar la temperatura actual y mas... Con context incluido',
    imagen: '/img/proyectos/proyectos-react/buscador-clima.png',
    linkProyecto: 'https://buscador-clima-context.netlify.app',
    linkGit: 'https://github.com/vspeed21/buscador-clima',

    tecnologias: [
      {
        id: generarId(),
        imagen: '/logos/logo-react.png'
      },
      {
        id: generarId(),
        imagen: '/logos/css.png'
      },
    ]
  },
]

const Sass = [
  {
    id: generarId(),
    nombre: 'La Cafeteria',
    descripcion: 'Sitio web con diferentes secciones para visitar, entre ellas; Nosotros, Contacto, Menú, etc..',
    imagen: '/img/proyectos/proyectos-sass/cafeteria.png',
    linkProyecto: 'https://cafeteriasass-proyecto.netlify.app',
    linkGit: 'https://github.com/vspeed21/cafeteria',

    tecnologias:[
      {
        id: generarId(),
        imagen: '/logos/logo-sass.png',
      },
      {
        id: generarId(),
        imagen: '/logos/logo-gulp.png',
      }
    ]
  },

  {
    id: generarId(),
    nombre: 'Majestic Spa',
    descripcion: 'Proyecto universitario, crear un sitio web de nuestro emprendimiento',
    imagen: '/img/proyectos/proyectos-sass/majesticSpa.png',
    linkProyecto: 'https://majestic-spa.netlify.app',
    linkGit: 'https://github.com/vspeed21/MajesticSpa',

    tecnologias:[
      {
        id: generarId(),
        imagen: '/logos/logo-sass.png',
      },
      {
        id: generarId(),
        imagen: '/logos/logo-gulp.png',
      }
    ]
  },

  {
    id: generarId(),
    nombre: 'Podcast Web',
    descripcion: 'Sitio web de para una aplicacion para crear Podcast, para despues distribuirlo',
    imagen: '/img/proyectos/proyectos-sass/podcast-app.png',
    linkProyecto: 'https://podcastfm-proyecto.netlify.app',
    linkGit: 'https://github.com/vspeed21/podcast-web',

    tecnologias:[
      {
        id: generarId(),
        imagen: '/logos/logo-sass.png',
      },
      {
        id: generarId(),
        imagen: '/logos/logo-gulp.png',
      }
    ]
  },

  {
    id: generarId(),
    nombre: 'Real State',
    descripcion: 'Sitio web de una compañia de bienes raices',
    imagen: '/img/proyectos/proyectos-sass/real-state.png',
    linkProyecto: 'https://real-state-vt.netlify.app',
    linkGit: 'https://github.com/vspeed21/real-state',

    tecnologias:[
      {
        id: generarId(),
        imagen: '/logos/logo-sass.png',
      },
      {
        id: generarId(),
        imagen: '/logos/logo-gulp.png',
      }
    ]
  },
]

export {
  Reacts,
  Sass,
}