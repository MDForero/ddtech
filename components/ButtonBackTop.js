"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ButtonBackTop = () => {
    const [show, setShow] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect (() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <button onClick={handleClick} >
    <Image className={show ?' fixed bottom-8 right-8 z-50 animate-bounce w-10 bg-primary rounded-full ring-secondary border-4 border-secondary': ' hidden'} src='/images/svg/arrow-up-svgrepo-com.svg' width={0} height={0}/>
    </button>
  )
}

export default ButtonBackTop