import MainBanner from "@/components/MainBanner"

export default async function page() {
    const data = await fetch('http://127.0.0.1:3000/servicios.json', {cache:'no-cache'}).then(res => res.json())
    return <>
    <MainBanner />
        <section className=" flex flex-wrap gap-16 max-w-6xl mx-auto justify-center">
            {data.map((item) => <article key={item.href} className=" w-80 p-4 flex flex-col  border rounded-md hover:shadow-2xl hover:shadow-quaternary duration-700 justify-between">
                <img loading="lazy" src={item.svg} className="w-16 h-16 mx-auto" alt="Diseño y Desarrollo Web a Medida" />
                <h2 className="text-center text-3xl font-semibold text-secondary ">{item.title}</h2>
                <p className="text-quaternary line-clamp-3 ">{item.description}</p>
        
                <a className="inline-block font-bold bg-secondary text-primary hover:bg-primary hover:text-secondary  rounded-lg border-2 p-2 mt-2 " href={'servicios/'+item.href}>Ver mas</a>
            </article>)}
        </section>
    </>
}