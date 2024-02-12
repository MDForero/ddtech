'use client'
import React, { useState } from 'react'

const Somos = ({ data }) => {
    const questions = data || [
        {
            question: '¿Quienes somos?',
            response: 'Somos un equipo de desarrolladores y diseñadores que amamos lo que hacemos. Nos apasiona crear soluciones digitales que ayuden a emprendedores y empresas a crecer y mejorar su presencia en línea.'
        },
        {
            question: '¿Porque lo hacemos?',
            response: 'Creemos que la tecnología es una herramienta poderosa que puede ayudar a las personas a mejorar su calidad de vida y a las empresas a crecer y ser más eficientes.'
        },
        {
            question: '¿Que nos motiva?',
            response: 'Nos motiva ayudar a emprendedores y empresas a crecer y mejorar su presencia en línea. Nos encanta ver como las soluciones que creamos ayudan a nuestros clientes a alcanzar sus objetivos.'
        }
    ]
    const [response, setResponse] = useState(questions[0].response || 'No hay respuesta')
    return (
        <div className='max-w-xl flex flex-col justify-center text-justify border p-4  space-y-4'>
            <header className='flex justify-center gap-5'>
                {questions.map(item => <button
                    className='hidden sm:flex items-center  text-center space-x-3 px-2 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                    key={item.question}
                    onClick={() => setResponse(item.response)}
                >{item.question}</button>)}
            </header>
            <div>
                {response}
            </div>
        </div>
    )
}

export default Somos