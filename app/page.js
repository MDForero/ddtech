import Caso from "@/components/Caso";
import Servicio from "@/components/Servicio";
import Somos from "@/components/Somos";
import Team from "@/components/Team";

export default async function Home() {
  const servicios = await fetch('http://127.0.0.1:3000/servicios.json', { cache: 'no-cache' }).then(res => res.json())
  const casos = await fetch('http://127.0.0.1:3000/casos-de-exito.json', { cache: 'no-cache' }).then(res => res.json())

  return (<>
    <main className=" relative">
      <figure className="h-96">
        <img src="/default_banner.jpg" loading="lazy" className="h-full max-w-screen-2xl w-screen object-cover"/>
      </figure>
      <div className="max-w-3xl mx-auto absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center text-xl"><img src='/8.svg' className="h-8" /> Impulsando tu negocio al siguiente nivel. </h1>
        <h2>Soluciones innovadoras para emprendedores como tu</h2>
        <p>Construimos soluciones digitales para emprendedores y empresas que buscan crecer y mejorar su presencia en línea. </p>
        <p>Desarrollamos aplicaciones web y móviles, tiendas en línea, sistemas de gestión y mucho más.</p>
      </div>
    </main>
    <section className="max-w-7xl">

      {/* <details name="somos" className="border">
        <summary >¿Quienes somos?</summary>
        <p>Somos un equipo de desarrolladores y diseñadores que amamos lo que hacemos. Nos apasiona crear soluciones digitales que ayuden a emprendedores y empresas a crecer y mejorar su presencia en línea.</p>
      </details>
      <details name="somos"> 
        <summary>¿Porque lo hacemos?</summary>
        <p>Creemos que la tecnología es una herramienta poderosa que puede ayudar a las personas a mejorar su calidad de vida y a las empresas a crecer y ser más eficientes. </p>
      </details>
      <details name="somos">
        <summary>¿Que nos motiva?</summary>
        <p>Nos motiva ayudar a emprendedores y empresas a crecer y mejorar su presencia en línea. Nos encanta ver como las soluciones que creamos ayudan a nuestros clientes a alcanzar sus objetivos. </p>
      </details> */}
      <Somos />
    </section>
    <Team />
    <section className="flex gap-12 justify-center flex-wrap">
      {servicios.map(item => <Servicio item={item} />)}
    </section>
    <section>
      {casos.map(item => <Caso item={item} />)}
    </section>
  </>
  )
}
