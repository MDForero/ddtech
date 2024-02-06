export default async function page() {
    const data = await fetch('http://127.0.0.1:3000/servicios.json').then(res => res.json())
    return <>
        <section className=" flex flex-wrap gap-16 max-w-6xl mx-auto justify-center">
            {data.map((item) => <article key={item.href} class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">
                <img loading="lazy" src={item.svg} class="w-16 h-16 mx-auto" alt="Diseño y Desarrollo Web a Medida" />
                <h2 class="text-center text-3xl font-semibold text-gray-100 ">{item.title}</h2>
                <p class="text-gray-100 line-clamp-3 ">{item.description}</p>
                <a class="text-gray-50 font-bold underline underline-offset-4" href={item.href}>Ver mas</a>
            </article>)}
        </section>
    </>
}