import { useEffect } from 'react';
import AOS from 'aos';

import Layout from "../src/layout/Layout"
import SobreMi from "../src/components/SobreMi";
import { Tabs } from "../src/components/Tabs"
import Tabla from "../src/components/Tabla"

import { Reacts, Sass } from '../src/data/proyectos';

export default function Home() {
  useEffect( () => {
    AOS.init();
  }, []);
  
  return (
   <>
    <Layout pagina={'Inicio'} informacion='informacion'>

      <SobreMi/>

      <Tabla/>

      <Tabs
        reacts={Reacts}
        sass={Sass}
      />

    </Layout>
   </>
  )
}