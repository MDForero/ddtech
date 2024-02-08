import Cta from "@/components/Cta"
import Faq from "@/components/Faq"
import Features from "@/components/Features"
import Hero from "@/components/Hero"

export default async function page({ params }) {
    const data = await fetch('http://127.0.0.1:3000/servicios.json', { cache: 'no-cache' }).then(res => res.json())
    const item = await data.find(item => item.href === params.href)
    return <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center bg-white">
        <Hero data={{ title: item.landing_pages.titulo, description: item.landing_pages.propuesta_valor }} />
        <Features data={item.landing_pages}/>
        <Faq data={item.landing_pages.faq} />
        <Cta/>

    </div>
}  