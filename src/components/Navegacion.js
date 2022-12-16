import Link from "next/link"
import { useRouter } from "next/router"

function Navegacion({ informacion }) {
  const router = useRouter();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 mt-3 md:mt-0">
      {
        !informacion ? (
          <Link
            href='/'
          >
            <a className="after:content-[''] after:block after:h-1 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300 text-lg md:text-xl font-bold">
              Home
            </a>
          </Link>
        ): null
      }

      <Link
        href='/skills'
      >
        <a className={`after:content-[''] after:block after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300 text-lg md:text-xl font-bold ${router.pathname === '/skills' ? 'after:w-full' : 'after:w-0'}`}>
          Skills
        </a>
      </Link>
      <Link href='/contacto'>
        <a className={`after:content-[''] after:block after:h-1  after:bg-primary hover:after:w-full after:transition-all after:duration-300 text-lg md:text-xl font-bold ${router.pathname === '/contacto' ? 'after:w-full' : 'after:w-0'}`}>
          Contact me
        </a>
      </Link>
    </nav>
  )
}

Navegacion.defaultProps = {
  informacion: null
}

export default Navegacion