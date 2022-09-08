import { useState } from 'react'
import styles from '../../styles/Tabs.module.css';
import ListadoReacts from './ListadoReacts';
import ListadoSass from './ListadoSass';

export const Tabs = ({reacts, sass}) => {

  const [toggleTabs, setToggleTabs] = useState(1)

  return (
    <>
      <h2 className='heading'>
        Mis proyectos
      </h2>
      <div className={`${styles.contenedor} contenedor`}>
        <ul>
          <li 
            className={toggleTabs === 1 ? `${styles.active}` : ''}
            onClick={() => setToggleTabs(1)}
          >
             SASS
          </li>

          <li
            className={toggleTabs === 2 ? `${styles.active}` : ''}
            onClick={() => setToggleTabs(2)}
          >
             React
          </li>
        </ul>

        <div className={styles.contenido}>
          <div 
            className={`${toggleTabs === 1 ? styles.contenidoActivo : ''}`}
          >
              <ListadoSass
                proyecto={sass}
              />
          </div>

          <div
            className={`${toggleTabs === 2 && styles.contenidoActivo}`}
          >
              <ListadoReacts
                proyecto={reacts}
              />
          </div>
        </div>
    </div>
    </>
  )
}
