'use client'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MainBanner = ({}) => {
    const path = usePathname()
    const image = '/default_banner.jpg'
  return (
    <main className='relative w-screen'>
        <Image src={image} alt='Main Banner'  width={0} height={0} className='object-cover w-screen h-[600px]'/>
        <div className='absolute top-0 w-full h-full flex justify-center items-center bg-secondary/60 text-5xl text-primary  gap-3'> <strong className='capitalize'   >{path.slice(1)} </strong> | <Link href="/"> Inicio </Link></div> 
    </main>
  )
}

export default MainBanner