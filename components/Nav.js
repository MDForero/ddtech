'use client'
import { redes } from '@/app/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Nav = ({ links }) => {
    const path = usePathname()
    const [active, setActive] = useState(false)

    return (
        <nav className='flex justify-between max-w-screen-2xl p-8 bg-sky-900 text-2xl mx-auto'>
            <div><Link href='/'><img src='/8.svg' className='h-8'/></Link></div>
            <ul className='lg:flex justify-center items-center gap-4  hidden'>
                {links.map((link) => <li key={link.name}><Link href={link.url} className={(path===link.url?'text-sky-600':'')+ ' hover:text-sky-600 duration-150 '}>{link.name}</Link></li>)}
            </ul>
            <ul className='lg:flex justify-center items-center gap-2 hidden'>
                {redes.map((link) => <li key={link.name} className='border-2 p-2 rounded-full '><Link href={link.url}><img src={link.svg} className='h-8'/></Link></li>)}
            </ul>
            <ul className={(active ? "fixed top-0 right-0 bottom-0 left-0 bg-sky-900  z-50 " : 'hidden ') + 'flex flex-col justify-center items-center gap-2   lg:hidden'}>
                {links.map((link) => <li key={link.name}><Link href={link.url} onClick={()=>setActive(!active)}>{link.name}</Link></li>)}
            </ul>
                <button onClick={()=> setActive(!active)} className='flex  lg:hidden relative z-50'>
                    <img src={!active? "/images/svg/burger.svg": '/images/svg/close.svg'} className='h-8'/>
                </button>
        </nav>
    )
}


export default Nav