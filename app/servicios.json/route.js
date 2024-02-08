import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            svg: "/images/svg/artist-palette.svg",
            title: 'Diseño y Desarrollo Web a Medida',
            description: 'Como artistas digitales, utilizamos tecnologías avanzadas para pintar la presencia única de tu negocio en el mundo virtual.',
            href: "diseno-y-desarrollo-web-a-medida",
            'landing_pages': {
                "servicio": "Diseño y Desarrollo Web a Medida",
                "titulo": "Despierta tu marca online con un sitio web único y a medida",
                "imagen": "collage-sitios-web.jpg",
                "propuesta_valor": "Creamos experiencias web memorables que te ayudan a conectar con tu público objetivo, impulsar tu negocio y alcanzar tus metas.",
                'features': {
                    "titulo": "¿Qué incluye nuestro servicio de diseño y desarrollo web a medida?",
                    'imagen': 'diseno-web-a-medida.jpg',
                    'descripcion': 'Características básicas de nuestro servicio de desarrollo web a medida: Disfruta de un sitio web único, profesional y optimizado para tu negocio.',
                    "features": [
                        "Hosting premium para un rendimiento óptimo",
                        "Dominio personalizado para tu marca",
                        "Navegación segura con certificado SSL",
                        "Conecta con tu público en redes sociales",
                        "Diseño web responsive para todos los dispositivos",
                        "Optimizado para SEO y mejor posicionamiento",
                    ]
                },
                "faq": {
                    "titulo": "¿Te preguntas cómo un sitio web a medida puede impulsar tu negocio?",
                    "beneficios": [
                        {
                            "pregunta": "¿Cansado de las plantillas limitadas? ¿Quieres un sitio web único que refleje tu marca y se destaque de la competencia?",
                            "respuesta": "Con un desarrollo web a medida, tu sitio web será una obra de arte digital, creado con tu marca y público objetivo en mente. ¡Olvídate de las limitaciones de las plantillas y disfruta de un diseño totalmente personalizado!"
                        },
                        {
                            "pregunta": "¿Quieres que tus visitantes naveguen por tu sitio web con facilidad y se conviertan en clientes?",
                            "respuesta": "Te ofrecemos una experiencia de usuario optimizada, con una navegación intuitiva, fluida y atractiva que encantará a tus visitantes y los convertirá en clientes."
                        },
                        {
                            "pregunta": "¿Necesitas funcionalidades específicas para tu negocio que no encuentras en las plataformas estándar?",
                            "respuesta": "Desarrollamos las funcionalidades que necesitas para que tu sitio web sea tan único como tu negocio. ¡Podrás tener las herramientas que te ayuden a alcanzar tus objetivos específicos!"
                        },
                        {
                            "pregunta": "¿Te preocupa la velocidad de carga, la seguridad y la estabilidad de tu sitio web?",
                            "respuesta": "Te garantizamos un rendimiento superior con velocidad de carga optimizada, seguridad garantizada y estabilidad para una experiencia online impecable."
                        },
                        {
                            "pregunta": "¿Quieres un sitio web que pueda crecer contigo y adaptarse a tus necesidades cambiantes?",
                            "respuesta": "Tu sitio web crecerá contigo, adaptándose a tus necesidades y objetivos cambiantes. ¡No te preocupes por quedarte corto en el futuro!"
                        }
                    ],
                    "testimonios": [
                        {
                            "nombre": "[Nombre del cliente]",
                            "cargo": "[Cargo del cliente]",
                            "texto": "El equipo de [Nombre de tu empresa] ha creado un sitio web increíble para nuestro negocio. Estamos muy contentos con los resultados. ¡Ha superado nuestras expectativas!"
                        },
                        {
                            "nombre": "[Nombre del cliente]",
                            "cargo": "[Cargo del cliente]",
                            "texto": "Trabajar con [Nombre de tu empresa] ha sido una experiencia fantástica. Son profesionales, creativos y realmente se preocupan por crear un sitio web que funcione para tu negocio."
                        }
                    ],
                    "llamada_accion": "Solicita una consulta gratuita",
                    "incentivo": "Análisis gratuito de tu sitio web actual y presupuesto personalizado sin compromiso."
                },
            },

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
