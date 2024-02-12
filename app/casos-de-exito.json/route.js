import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            title: 'Centro vacacional Los Lagos Monterrey Casanare',
            description: 'Este es un caso de exito',
            img: '/images/logos/los-lagos.png'
        },
        {
            title: 'Terraza Hotel Monterrey Casanare',
            description: 'Este es un caso de exito',
            img: '/images/logos/terraza-hotel.png'
        },
        {
            title: 'Centro Agroecoturistico las Heliconias Monterrey Casanare',
            description: 'Este es un caso de exito',
            img: '/images/logos/heliconias.png'
        },
    ])
}