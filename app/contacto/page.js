import { contacto } from "../data"

export default function page() {
    return (<>
        <div className="max-w-screen-2xl flex flex-col space-y-6 ">
            <section className="flex justify-center items-center gap-9 flex-wrap">
                {contacto.map((item) => <a key={item.title} href={item.url} target="_blank" className="flex flex-col items-center justify-center w-44 overflow-hidden border-2 p-4">
                    <img src={item.icon} alt={item.title} className="w-8 h-8" />
                    <h2>{item.title}</h2>
                    <p className="overflow-ellipsis px-2 w-40 overflow-hidden text-center">{item.description}</p>
                </a>)}
            </section>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3616486724263!2d-72.89842292401663!3d4.87895094008447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad33c51110f4d%3A0x3da6e7b3ba7ebaf7!2sD%26D%20Tech!5e0!3m2!1ses-419!2sco!4v1707084586867!5m2!1ses-419!2sco" className="w-full h-[420px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    </>
    )
}

export const metadata = {
    title: 'DDtech | Contacto',
    description: 'Contáctanos para más información',
}