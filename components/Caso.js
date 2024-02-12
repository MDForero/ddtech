import React from 'react'

const Caso = ({item}) => {
  return (
    <article>
        <header className='text-center font-bold text-4xl'>
            <h1>{item.title}</h1>
        </header>
        <main className='flex justify-center items-center gap-24'>
            <div>
                <p>{item.description}</p>
            </div>
            <figure>
                <img loading="lazy" src={item.img} alt={item.title} className='w-32'/>
            </figure>
        </main>
    </article>
  )
}

export default Caso