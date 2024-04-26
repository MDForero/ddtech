import React from 'react'

const Servicio = ({ item }) => {
    return (
        <article key={item.href} className=" w-80 p-4 flex flex-col  border rounded-md hover:shadow-2xl hover:shadow-quaternary duration-700 justify-between">
            <img loading="lazy" src={item.svg} className="w-16 h-16 mx-auto" alt="Diseño y Desarrollo Web a Medida" />
            <h2 className="text-center text-3xl font-semibold text-secondary ">{item.title}</h2>
            <p className="text-quaternary line-clamp-3 ">{item.description}</p>

            <a className="inline-block font-bold bg-secondary text-primary hover:bg-primary hover:text-secondary  rounded-lg border-2 p-2 mt-2 " href={'servicios/' + item.href}>Ver mas</a>
        </article>
    )
}

export default Servicio