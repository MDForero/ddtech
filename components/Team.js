import React from 'react'

const Team = ({ data }) => {
    const team = data || [
        {
            name: 'Juan Perez',
            description: 'Juan es un desarrollador con 10 años de experiencia en el desarrollo de aplicaciones web y móviles.'
        },
        {
            name: 'Maria Lopez',
            description: 'Maria es una diseñadora con 10 años de experiencia en el diseño de interfaces y experiencia de usuario.'
        },
        {
            name: 'Pedro Ramirez',
            description: 'Pedro es un desarrollador con 15 años de experiencia en el desarrollo de aplicaciones web y móviles.'
        }
    ]
    return (
        <section className='space-y-12'>
            <div className='text-center space-y-2'>
                <h1 className='font-bold lg:text-5xl text-2xl '> Equipo</h1>
                <h2 className='font-semibold lg:text-xl text-lg'> Somos un equipo de desarrolladores y diseñadores que amamos lo hacemos.</h2>
            </div>
            <div className='flex justify-center gap-12 max-w-4xl flex-wrap'>
                {team.map((member, index) => (
                    <fieldset key={index} className='space-y-4 relative border w-64 p-2'>
                        <legend className='text-center'><img src='/desarrollo.jpg' className='w-40 h-40  object-cover rounded-full' alt='Desarrollo' /></legend>
                        <h2 className='font-bold text-center'>{member.name}</h2>
                        <p className='font-semibold text-justify'>{member.description}</p>
                    </fieldset>
                ))}
            </div>
        </section>

    )
}

export default Team