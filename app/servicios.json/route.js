import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            svg: "/images/svg/artist-palette.svg",
            title: 'Diseño y Desarrollo Web a Medida',
            description: 'Como artistas digitales, utilizamos tecnologías avanzadas para pintar la presencia única de tu negocio en el mundo virtual.',
            href: "diseño-y-desarrollo-web-a-medida"
        },
        {
            svg: "/images/svg/wrench.svg",
            title: 'Mantenimiento Web',
            description: 'Optimizamos y ajustamos tu sitio web para un rendimiento óptimo, garantizando que todas las piezas funcionen perfectamente.',
            href: "mantenimiento-web"
        },
        {
            svg: "/images/svg/compass.svg",
            title: 'Posicionamiento SEO',
            description: 'Guiamos a tu negocio hacia una mayor visibilidad en el vasto océano de Internet.',
            href: "posicionamiento-seo"
        },
        {
            svg: "/images/svg/pen.svg",
            title: 'Marketing de Contenidos',
            description: 'Damos vida a tu marca con contenido cautivador y creativo.',
            href: "marketing-de-contenidos"
        },
        {
            svg: "/images/svg/sky-vision.svg",
            title: 'SkyVision',
            description: '¡Haz que tu marca vuele alto! Con SkyVision, nuestro servicio de videos con drone, capturamos momentos únicos y vistas impresionantes para llevar tu contenido visual a nuevas alturas.',
            href: "skyvision"
        },
    ])
}
<section id="servicios" class="flex gap-12 flex-wrap justify-center">
    <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">

    </article>
    <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">

    </article>
    <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">

    </article>
    <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">

    </article>
    <article class=" w-80 p-4 space-y-4 border rounded-md hover:shadow-2xl hover:shadow-gray-300 duration-700 relative ">

    </article>
</section>