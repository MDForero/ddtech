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
        <section>
            <h1> Equipo</h1>
            <p> Somos un equipo de desarrolladores y diseñadores que amamos lo hacemos.</p>
            <div className='flex justify-center gap-12 max-w-4xl'>
                {team.map((member, index) => (
                    <article key={index}>
                        <h2>{member.name}</h2>
                        <p>{member.description}</p>
                    </article>
                ))}
            </div>
        </section>

    )
}

export default Team