import { valores } from "../data";

export default function page() {
    return (
        <div className="space-y-32 p-4 text-justify">
            <section className="flex flex-col space-y-24">

                <article className="flex flex-wrap justify-center items-center gap-14 ">
                    <main className="max-w-xl  lg:w-2/5 ">
                        <h2 className="text-3xl text-center p-4 font-bold">Visión:</h2>
                        <p>En D&D Tech, nuestra visión es ser líderes indiscutibles en el campo del desarrollo web y el marketing digital, no solo en Monterrey, Casanare, sino en toda la región. Buscamos transformar la forma en que las empresas locales se conectan con sus cli entes y expanden sus operaciones en el mundo digital. Nuestra visión es impulsar el crecimiento de los negocios, brindando soluciones de software de vanguardia y estrategias de marketing digital efectivas, y estableciendo un estándar de excelencia en la industria. Queremos ser reconocidos por nuestra innovación, compromiso con la calidad y resultados tangibles que generamos para nuestros clientes.</p>
                    </main>
                    <aside className="md:w-1/2 2xl:w-1/4">
                        <figure>
                            <img src='default_banner.jpg' alt='Imagen que describe nuestra vision como empresa' className="w-full aspect-video" />
                            <figcaption>Vision</figcaption>
                        </figure>
                    </aside>
                </article>
                <article className="flex flex-wrap justify-center items-center gap-14 flex-row-reverse">
                    <main className="max-w-xl  lg:w-2/5 text-justify">
                        <h2 className="text-3xl text-center p-4 font-bold">Misión:</h2>
                        <p>En D&D Tech, nuestra misión es ayudar a las empresas a prosperar en el mundo digital. Nos dedicamos a proporcionar servicios de desarrollo web altamente funcionales y atractivos, así como estrategias de marketing digital efectivas que impulsen el crecimiento de nuestros clientes. Trabajamos estrechamente con ellos para entender sus necesidades específicas y ofrecer soluciones a medida que generen un impacto positivo en sus resultados. Nos enorgullece nuestra atención al cliente y nos comprometemos a entregar productos y servicios solo cuando nuestros clientes estén totalmente satisfechos. Estamos comprometidos con la excelencia en cada proyecto que abordamos y buscamos ser un socio estratégico confiable para todas las empresas que buscan tener éxito en línea.</p>
                    </main>
                    <aside className="md:w-1/2 2xl:w-1/4">
                        <figure>
                            <img src='default_banner.jpg' alt='Imagen que describe nuestra vision como empresa' className="w-full aspect-video" />
                            <figcaption>Vision</figcaption>
                        </figure>
                    </aside>
                </article>
            </section>
            <section className="space-y-14 max-w-6xl mx-auto">
                <div>
                    <h2 class="text-4xl font-semibold text-center">Valores Corporativos</h2>
                </div>
                <section  id="valores_corporativos" class="bg -max-w-6xl mx-auto flex gap-20 flex-wrap justify-center">
                    {valores.map((item) => <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700">
                        <img loading="lazy" src={item.icon} class="w-16 h-16 mx-auto" alt="Innovación Tecnológica" />
                        <h2 class="text-center text-3xl font-semibold text-gray-200 ">{item.title}</h2>
                        <p class="text-gray-100">{item.text}</p>
                    </article>)}

                </section>
            </section>
        </div>
    )
}