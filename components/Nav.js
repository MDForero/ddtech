'use client'
import { redes } from '@/app/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Nav = ({ links }) => {
    const path = usePathname()
    const [active, setActive] = useState(false)

    return (<header className='w-full bg-secondary'>
        <nav className='flex justify-between max-w-screen-2xl p-2  text-2xl mx-auto text-sky-100'>
            <div><Link href='/'><img src='/8.svg' className='h-8' /></Link></div>
            <ul className='lg:flex justify-center items-center gap-4  hidden'>
                {links.map((link) => <li key={link.name}><Link href={link.url} className={(path === link.url ? 'text-tertiary' : '') + ' hover:text-tertiary duration-150 '}>{link.name}</Link></li>)}
            </ul>
            <ul className={active ? ' absolute z-40 top-0 left-0 bottom-0 right-0 h-screen  bg-secondary flex items-end  justify-center p-8 gap-8 ' : ' hidden ' + ' lg:flex  justify-center items-center gap-2 sm:hidden'}>
                {redes.map((link) => <li key={link.name} className='border-2 p-2 rounded-full h-fit '><Link href={link.url}><img src={link.svg} className='h-4 p1' /></Link></li>)}
            </ul>
            <ul className={(active ? "fixed z-50 " : 'hidden ') + 'flex flex-col p-8 gap-2   lg:hidden'}>
                {links.map((link) => <li key={link.name}><Link href={link.url} onClick={() => setActive(!active)}>{link.name}</Link></li>)}
            </ul>
            <button onClick={() => setActive(!active)} className='flex  lg:hidden relative z-50'>
                <img src={!active ? "/images/svg/burger.svg" : '/images/svg/close.svg'} className='h-8' />
            </button>
        </nav>
    </header>
    )
}


export default Nav