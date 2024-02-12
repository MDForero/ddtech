import React from 'react'

const Servicio = ({item}) => {
    return (
        <article key={item.href} class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">
            <img loading="lazy" src={item.svg} class="w-16 h-16 mx-auto" alt="Diseño y Desarrollo Web a Medida" />
            <h2 class="text-center text-3xl font-semibold text-gray-100 ">{item.title}</h2>
            <p class="text-gray-100 line-clamp-3 ">{item.description}</p>
            <a class="text-gray-50 font-bold underline underline-offset-4" href={'servicios/' + item.href}>Ver mas</a>
        </article>
    )
}

export default Servicio