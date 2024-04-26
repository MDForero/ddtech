import React from 'react'

const Caso = ({ item }) => {
    return (
        <article className='space-y-6 border p-4 rounded-lg'>
            <header className='text-center font-bold text-4xl'>
                <h1>{item.title}</h1>
            </header>
            <main className='flex justify-center items-center md:gap-24 gap-10 flex-wrap'>
                <div className='max-w-xl space-y-3 text-justify'>
                    {item.description.map((p, i) => <p key={i}><span className='font-bold text-lg'>{p.slice(0, p.indexOf(':') + 1)}</span> {p.slice(p.indexOf(':') + 1)} </p>)}
                </div>
                <div class="flex flex-wrap md:flex-nowrap justify-center items-center gap-8  max-w-xl w-full">
                    <img src={item.img[0]} class="md:w-1/2 w-full md:h-80 object-cover rounded-lg" alt="Tree" />
                    <div className='flex md:flex-col gap-2 justify-around w-full'>
                        <img src={item.img[1]} class="w-2/5 md:w-full  rounded-lg md:h-44 object-cover" alt="Tree" />
                        <img src={item.img[2]} class="w-2/5 md:w-full rounded-lg md:h-44 object-cover" alt="Tree" />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Caso