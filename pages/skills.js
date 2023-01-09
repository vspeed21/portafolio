import AOS from 'aos';
import { useEffect } from 'react';
import Layout from "../src/layout/Layout"
import ListadoSkills from "../src/components/ListadoSkills";

const Skills = ({frontend, backend, tool}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout pagina='Skills'>
      <ListadoSkills
        frontend={frontend.data}
        backend={backend.data}
        tool={tool.data}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const urlFrontend = `${process.env.API_URL}/api/frontend?populate=*`;
  const urlBackend = `${process.env.API_URL}/api/backend?populate=*`;
  const urlTool = `${process.env.API_URL}/api/tool?populate=*`;

  const [ resFrontends, resBackends, resTool ] = await Promise.all([
    fetch(urlFrontend),
    fetch(urlBackend),
    fetch(urlTool),
  ]);

  const [ frontend, backend, tool ] = await Promise.all([
    resFrontends.json(),
    resBackends.json(),
    resTool.json(),
  ]);

  return{
    props:{
      frontend,
      backend,
      tool
    }
  }
}

export default Skills
