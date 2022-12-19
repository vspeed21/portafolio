import { useEffect } from 'react';
import AOS from 'aos';

import Layout from "../src/layout/Layout"
import SobreMi from "../src/components/SobreMi";
import Tabla from "../src/components/Tabla"
import Services from '../src/components/Services';
import WorkSamples from '../src/components/WorkSamples';
import Methodology from '../src/components/Methodology';
import ContactHome from '../src/components/ContactHome';

export default function Home({ projects }) {
  useEffect( () => {
    AOS.init();
  }, []);
  
  return (
    <Layout pagina='Inicio' informacion='informacion'>

      <SobreMi/>
      <Tabla/>
      <Services/>
      <WorkSamples
        projects={projects.data}
      />
      <ContactHome/>
      <Methodology/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/reacts?populate=*`;
  const response = await fetch(url);
  const projects = await response.json();

  return{
    props:{
      projects,
    }
  }
}