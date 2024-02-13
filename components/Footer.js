import { redes } from '@/app/layout'
import Link from 'next/link'
import React from 'react'

const Footer = async ({ paginas }) => {
    const servicios = await fetch('http://127.0.0.1:3000/servicios.json', { cache: 'no-cache' }).then(res => res.json())
    console.log(servicios)
    return (<>
        <section className='flex flex-wrap  justify-center lg:justify-between  gap-10 p-4 max-w-screen-2xl mx-auto bg-sky-800'>
            <div className='px-4 space-y-4 flex items-center flex-col  w-80'>
                <h1 className='font-bold text-xl'>¿Quienes somos?</h1>
                <p>Somos un equipo de desarrolladores y diseñadores que amamos lo que hacemos. Nos apasiona crear soluciones digitales que ayuden a emprendedores y empresas a crecer y mejorar su presencia en línea.</p>
                <ul className='flex justify-center items-center gap-2 '>
                    {redes.map((link) => <li key={link.name} className='border-2 p-2 rounded-full '><Link className='hover:text-sky-200 text-sky-50' href={link.url}><img src={link.svg} className='h-8' /></Link></li>)}
                </ul>
            </div>
            <div className='space-y-4 flex items-center flex-col   w-80'>
                <h1 className='font-bold text-xl'>Enlaces</h1>
                <ul className='list-none'>{paginas.map(pagina => <li><Link className='hover:text-sky-200 text-sky-50' href={pagina.url}>{pagina.name}</Link></li>)}</ul>
            </div>
            <div className='space-y-4 flex items-center flex-col  w-80'>
                <h1 className='font-bold text-xl'>Servicios</h1>
                <ul className='list-none'>{servicios.map(servicio => <li><Link className='hover:text-sky-200 text-sky-50' href={'/servicios/' + (servicio.href)}>{servicio.title}</Link></li>)}</ul>
            </div>
            <div className='space-y-4 flex items-center flex-col  w-80'>
                <h1 className='font-bold text-xl'>Atencion al cliente</h1>
                <dl className='list-none'>
                    <dt>Teléfono:</dt>
                    <dd className='ml-4'><a href='tel:+573108854737'>+57 310 885 4737</a></dd>
                    <dt>Ubicación:</dt>
                    <dd className='ml-4'><a href='https://maps.app.goo.gl/Mmx3J8wwsjRTyP2y5'>Carrera 11 18 82 Monterrey, Casanare</a></dd>
                    <dt>Horarios de atención:</dt>
                    <dd className='ml-4'>Lunes - Sábado: 8:00am - 5:00pm</dd>
                </dl>
            </div>
        </section>

    </>
    )
}

export default Footer