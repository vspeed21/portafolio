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

  // {
  //   nombre: 'Buscador usuarios de github',
  //   descripcion: 'Una simple agenda de contactos con LocalStorage incluido',
  //   imagen: '/img/proyectos/proyectos-react/contact-list.png'
  // },
]

const Sass = [
  {
    id: generarId(),
    nombre: 'Cafeteria',
    descripcion: '',
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
    descripcion: '',
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
    descripcion: '',
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
    descripcion: '',
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