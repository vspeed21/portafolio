import { useEffect } from 'react';
import AOS from 'aos';

import Layout from "../src/layout/Layout"
import SobreMi from "../src/components/SobreMi";
import Tabla from "../src/components/Tabla"
import Services from '../src/components/Services';
import WorkSamples from '../src/components/WorkSamples';
import Methodology from '../src/components/Methodology';
import ContactHome from '../src/components/ContactHome';

export default function Home({ projects, stages, services }) {
  useEffect( () => {
    AOS.init();
  }, []);
  
  return (
    <Layout pagina='Home' informacion='informacion'>

      <SobreMi/>
      <Tabla/>
      <Services
        services={services.data}
      />
      <WorkSamples
        projects={projects.data}
      />
      <ContactHome/>
      <Methodology
        stages={stages.data}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const urlProjects = `${process.env.API_URL}/api/reacts?populate=*`;
  const urlStages = `${process.env.API_URL}/api/stages?populate=*`;
  const urlServices = `${process.env.API_URL}/api/services?populate=*`;

  const [ resProjects, resStages, resServices ] = await Promise.all([
    fetch(urlProjects),
    fetch(urlStages),
    fetch(urlServices),
  ]);

  const [ projects, stages, services ] = await Promise.all([
    resProjects.json(),
    resStages.json(),
    resServices.json(),
  ]);

  return{
    props:{
      projects,
      stages,
      services,
    }
  }
}