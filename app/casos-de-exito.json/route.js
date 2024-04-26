import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            title: 'Centro vacacional Los Lagos Monterrey Casanare',
            description: ['Los Lagos, un oasis de paz y aventura, buscaba conectar con un público más amplio y fortalecer su presencia online. No contaban con una pagina web que mostrara la belleza del lugar.',
                'Página web: Diseño moderno y atractivo, con imágenes cautivadoras y videos que transportan al usuario a un tour virtual por el lugar.',
                'Información clara: Descripción de actividades, instalaciones y servicios, facilitando la toma de decisiones.',
                'Reservas online: Sistema rápido y seguro para reservar directamente desde la página web.',
                'Redes sociales: Integración con las plataformas sociales del Centro Vacacional, creando una comunidad digital vibrante.'],
            img: [ '/images/los-lagos-piscina.jpg','/images/DJI_0073.JPG', '/images/los-lagos-tobogan.jpg',]
        },
        {
            title: 'Terraza Hotel Monterrey: Un caso de éxito en transformación digital',
            description: [
                'Terraza Hotel Monterrey, un hotel boutique ubicado en el corazón de la ciudad, se encontraba en una situación difícil con baja tasa de ocupación y una imagen negativa en el mercado. Su información online era incorrecta y desactualizada, lo que afectaba su visibilidad y reservas.',
                'DDTech al rescate: Implementamos una estrategia integral de marketing digital que incluyó posicionamiento online en plataformas como Booking y Airbnb, optimización de Google My Business, creación de una atractiva página web, fotografía profesional y marketing en redes sociales.',
                'El resultado: ¡Un rotundo éxito! Terraza Hotel Monterrey logró aumentar su tasa de ocupación, mejorar su imagen en el mercado y ganar nuevos clientes.La nueva página web generó un mayor número de reservas directas.',
                '¿Quieres saber más ? Descubre cómo DDTech puede ayudarte a transformar tu negocio digitalmente.Visita nuestro sitio web o contáctanos para una consulta gratuita.'],
            img: ['/images/terraza-hotel-drone.jpg', '/images/terraza-hotel-fachada.jpg', '/images/terraza-hotel-lobby.jpg']
        },
        {
            title: 'Centro Agroecoturistico las Heliconias Monterrey Casanare',
            description: [
                'Las Heliconias, un hermoso centro agroecoturístico ubicado en Monterrey, Casanare, buscaba mejorar su presencia online y atraer a más visitantes. No contaban con una página web que mostrara la belleza del lugar.',
                'Página web: Diseño moderno y atractivo, con imágenes cautivadoras y videos que transportan al usuario a un tour virtual por el lugar.',
                'Información clara: Descripción de actividades, instalaciones y servicios, facilitando la toma de decisiones.',
                'Reservas online: Sistema rápido y seguro para reservar directamente desde la página web.',
                'Redes sociales: Integración con las plataformas sociales del Centro Agroecoturístico, creando una comunidad digital vibrante.'
            ],
            img: ['/images/menu.jpg', '/images/heliconias-piscina.jpg', '/images/Heliconias-Drone.jpg']
            
        },
    ])
}