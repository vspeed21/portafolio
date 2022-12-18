import { useEffect } from 'react';
import AOS from 'aos';

import Layout from "../src/layout/Layout"
import SobreMi from "../src/components/SobreMi";
import Tabla from "../src/components/Tabla"
import Services from '../src/components/Services';
import WorkSamples from '../src/components/WorkSamples';

export default function Home({sass, reacts}) {
  useEffect( () => {
    AOS.init();
  }, []);
  
  return (
    <Layout pagina='Inicio' informacion='informacion'>

      <SobreMi/>
      <Tabla/>
      <Services/>
      <WorkSamples/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const urlSass = `${process.env.API_URL}/api/sasses?populate=*`;
  const urlReact = `${process.env.API_URL}/api/reacts?populate=*`;

  const [ resSass, resReact ] = await Promise.all([
    fetch(urlSass),
    fetch(urlReact)
  ]);

  const [ sass, reacts ] = await Promise.all([
    resSass.json(),
    resReact.json(),
  ]);

  return{
    props:{
      sass,
      reacts,
    }
  }
}