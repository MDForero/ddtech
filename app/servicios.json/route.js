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
                    'imagen': '/default_banner.jpg',
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
            href: "mantenimiento-web",
            'landing_pages': {
                "servicio": "Mantenimiento Web",
                "titulo": "Mantén tu sitio web actualizado, seguro y funcionando.",
                "imagen": "imagen-mantenimiento-web.jpg",
                "propuesta_valor": "Te ofrecemos soluciones integrales para que tu sitio web siempre esté disponible, protegido y optimizado.",
                "features": {
                    "titulo": "¿Qué incluye nuestro servicio de mantenimiento web?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Características del servicio de mantenimiento web:",
                    "features": [
                        "Actualizaciones de software y plugins",
                        "Copias de seguridad y recuperación de datos",
                        "Monitorización y análisis del rendimiento",
                        "Corrección de errores y bugs",
                        "Soporte técnico y atención al cliente",
                    ]
                },
                "beneficios": {
                    "titulo": "¿Por qué elegir nuestro servicio de mantenimiento web?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Beneficios del mantenimiento web:",
                    "features": [
                        {
                            "titulo": "Seguridad y protección",
                            "descripcion": "Protege tu sitio web de ataques y malware con actualizaciones constantes y copias de seguridad."
                        },
                        {
                            "titulo": "Rendimiento óptimo",
                            "descripcion": "Mejora la velocidad de carga, la estabilidad y la experiencia de usuario de tu sitio web."
                        },
                        {
                            "titulo": "Tranquilidad y confianza",
                            "descripcion": "Delega el mantenimiento de tu sitio web a nuestro equipo de expertos y despreocúpate de las tareas técnicas."
                        },
                        {
                            "titulo": "Ahorro de tiempo y dinero",
                            "descripcion": "Evita costosas reparaciones y problemas técnicos con un mantenimiento preventivo regular."
                        },
                        {
                            "titulo": "Soporte y asesoramiento",
                            "descripcion": "Obtén ayuda y asesoramiento de nuestro equipo de expertos para resolver cualquier problema con tu sitio web."
                        }
                    ]
                },
                "llamada_accion": "Solicita una consulta gratuita",
                "incentivo": "Análisis gratuito de tu sitio web y presupuesto personalizado sin compromiso.",
                "faq": {
                    "titulo": "¿Preguntas frecuentes sobre el mantenimiento web?",
                    "beneficios": [
                        {
                            "pregunta": "¿Qué es el mantenimiento web?",
                            "respuesta": "El mantenimiento web es el proceso continuo de asegurar que un sitio web funcione correctamente, esté actualizado y protegido."
                        },
                        {
                            "pregunta": "¿Por qué es importante el mantenimiento web?",
                            "respuesta": "El mantenimiento web es esencial para la seguridad, el rendimiento y la longevidad de un sitio web."
                        },
                        {
                            "pregunta": "¿Qué incluye un servicio de mantenimiento web?",
                            "respuesta": "Los servicios de mantenimiento web pueden incluir actualizaciones de software, copias de seguridad, monitorización del rendimiento, corrección de errores y soporte técnico.",
                        }
                    ]
                }

            },
        },
        {
            svg: "/images/svg/pen.svg",
            title: 'Marketing de Contenidos',
            description: 'Damos vida a tu marca con contenido cautivador y creativo.',
            href: "marketing-de-contenidos",
            "landing_pages": {
                "servicio": "Marketing Digital",
                "titulo": "Impulsa tu negocio online y alcanza tus objetivos con nuestro servicio de marketing digital personalizado.",
                "imagen": "imagen-marketing-digital.jpg",
                "propuesta_valor": "Te ofrecemos estrategias integrales para aumentar tu visibilidad online, atraer más clientes potenciales y hacer crecer tu negocio.",
                "features": {
                    "titulo": "¿Qué incluye nuestro servicio de marketing digital?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Características del servicio de marketing digital:",
                    "features": [
                        "Análisis y Estrategia",
                        "SEO (Search Engine Optimization)",
                        "SEM (Search Engine Marketing)",
                        "Social Media Marketing",
                        "Email Marketing",
                        "Content Marketing",
                        "Diseño Web",
                        "Desarrollo de Apps",
                        "Análisis y seguimiento de resultados",
                        "Informes periódicos",
                    ]
                },
                "beneficios": {
                    "titulo": "¿Por qué elegir nuestro servicio de marketing digital?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Beneficios del marketing digital:",
                    "features": [
                        {
                            "titulo": "Aumento de la visibilidad online",
                            "descripcion": "Llega a más clientes potenciales y aumenta tu reconocimiento de marca."
                        },
                        {
                            "titulo": "Más tráfico a tu sitio web",
                            "descripcion": "Atrae más visitantes a tu sitio web y aumenta las posibilidades de conversiones."
                        },
                        {
                            "titulo": "Generación de leads",
                            "descripcion": "Capta información de contacto de clientes potenciales interesados en tus productos o servicios."
                        },
                        {
                            "titulo": "Aumento de las ventas",
                            "descripcion": "Convierte más visitantes en clientes y aumenta tus ingresos."
                        },
                        {
                            "titulo": "Mejor ROI (Retorno de la Inversión)",
                            "descripcion": "Invierte en estrategias de marketing digital con un alto retorno de la inversión a largo plazo."
                        },
                        {
                            "titulo": "Crecimiento del negocio",
                            "descripcion": "Impulsa el crecimiento de tu negocio online y alcanza tus objetivos de marketing."
                        }
                    ]
                },
                "testimonios": [
                    {
                        "nombre": "[Nombre del cliente]",
                        "cargo": "[Cargo del cliente]",
                        "texto": "El equipo de [Nombre de tu empresa] ha sido increíble. Gracias a sus estrategias de marketing digital, hemos logrado aumentar nuestras ventas en un 50% en solo 6 meses. ¡Estamos muy contentos con los resultados!"
                    },
                    {
                        "nombre": "[Nombre del cliente]",
                        "cargo": "[Cargo del cliente]",
                        "texto": "Trabajar con [Nombre de tu empresa] ha sido una experiencia",
                    }],
                "faq": {
                    "titulo": "¿Preguntas frecuentes sobre el marketing digital?",
                    "beneficios": [
                        {
                            "pregunta": "¿Qué es el marketing digital?",
                            "respuesta": "El marketing digital es el uso de canales y herramientas digitales para promocionar y vender productos o servicios a un público objetivo específico."
                        },
                        {
                            "pregunta": "¿Por qué necesito el marketing digital para mi negocio?",
                            "respuesta": "El marketing digital te permite llegar a un público más amplio y específico que el marketing tradicional, a un costo más bajo y con resultados medibles. Te ayuda a aumentar la visibilidad de tu negocio, atraer más clientes potenciales, generar leads y aumentar las ventas."
                        },
                        {
                            "pregunta": "¿Qué canales de marketing digital debo usar?",
                            "respuesta": "Los canales de marketing digital más efectivos dependerán de tu negocio, tu público objetivo y tus objetivos. Algunos de los canales más comunes incluyen SEO, SEM, redes sociales, email marketing, content marketing y diseño web."
                        },
                        {
                            "pregunta": "¿Cuánto cuesta el marketing digital?",
                            "respuesta": "El costo del marketing digital varía dependiendo de tus necesidades y objetivos. Sin embargo, puedes empezar con un presupuesto pequeño y escalar tus campañas a medida que ves resultados."
                        },
                        {
                            "pregunta": "¿Cuánto tiempo se tarda en ver resultados con el marketing digital?",
                            "respuesta": "El tiempo para ver resultados con el marketing digital varía dependiendo de tus objetivos y la competitividad de tu sector. Sin embargo, la mayoría de las campañas empiezan a mostrar resultados en 3-6 meses."
                        },
                        {
                            "pregunta": "¿Necesito conocimientos técnicos para hacer marketing digital?",
                            "respuesta": "No necesariamente. Si trabajas con una agencia de marketing digital o contratas a un profesional del marketing, ellos se encargarán de la parte técnica. Sin embargo, es útil tener un conocimiento básico de los diferentes canales y estrategias de marketing digital."
                        }
                    ]
                }

            },
        },
        {
            svg: "/images/svg/sky-vision.svg",
            title: 'SkyVision',
            description: '¡Haz que tu marca vuele alto! Con SkyVision, nuestro servicio de videos con drone, capturamos momentos únicos y vistas impresionantes para llevar tu contenido visual a nuevas alturas.',
            href: "skyvision",
            "landing_pages": {
                "servicio": "Producción de Video y Fotografía con Drone",
                "titulo": "Captura imágenes y videos impactantes.",
                "imagen": "imagen-drone.jpg",
                "propuesta_valor": "Te ofrecemos soluciones creativas e innovadoras para llevar tu contenido visual al siguiente nivel.",
                "features": {
                    "titulo": "¿Qué incluye nuestro servicio de producción de video y fotografía con drone?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Características del servicio de producción de video y fotografía con drone:",
                    "features": [

                        "Equipamiento de última generación",
                        "Grabación en alta definición",
                        "Fotografía aérea de alta resolución",
                        "Edición y postproducción profesional",
                        "Servicio personalizado y adaptado a tus necesidades",
                        "Creatividad e innovación en la producción audiovisual",
                        "Entrega de archivos en diferentes formatos",
                        "Música y efectos de sonido",
                        "Garantía de satisfacción",
                    ]
                },
                "beneficios": {
                    "titulo": "¿Por qué elegir nuestro servicio de producción de video y fotografía con drone?",
                    "imagen": "/default_banner.jpg",
                    "descripcion": "Beneficios de la producción de video y fotografía con drone:",
                    "features": [
                        {
                            "titulo": "Imágenes y videos únicos e impactantes",
                            "descripcion": "Captura la atención de tu público con imágenes y videos aéreos que nadie podrá olvidar."
                        },
                        {
                            "titulo": "Perspectiva única e irrepetible",
                            "descripcion": "Obtén una perspectiva diferente de tu producto, evento o lugar con tomas aéreas espectaculares."
                        },
                        {
                            "titulo": "Contenido visual para diferentes plataformas",
                            "descripcion": "Crea contenido ideal para redes sociales, sitios web, marketing y publicidad."
                        },
                        {
                            "titulo": "Servicio profesional y personalizado",
                            "descripcion": "Trabajamos contigo para entender tus necesidades y crear un producto final que te encantará."
                        },
                        {
                            "titulo": "Resultados de alta calidad",
                            "descripcion": "Te garantizamos imágenes y videos de alta calidad que superarán tus expectativas."
                        }
                    ]
                },
                "testimonios": [
                    {
                        "nombre": "[Nombre del cliente]",
                        "cargo": "[Cargo del cliente]",
                        "texto": "El equipo de [Nombre de tu empresa] ha creado un video increíble para nuestro negocio con imágenes de drone realmente impresionantes. ¡Estamos muy contentos con el resultado!"
                    },
                    {
                        "nombre": "[Nombre del cliente]",
                        "cargo": "[Cargo del cliente]",
                        "texto": "Trabajar con [Nombre de tu empresa] ha sido una experiencia fantástica. Son profesionales, creativos y realmente se preocupan por crear un producto final que sea perfecto para sus clientes."
                    }
                ],
                "llamada_accion": "Solicita una consulta gratuita",
                "incentivo": "Análisis gratuito de tu proyecto y presupuesto personalizado sin compromiso.",
                "faq": {
                    "titulo": "¿Preguntas frecuentes sobre la producción de video y fotografía con drone?",
                    "beneficios": [
                        {
                            "pregunta": "¿Qué tipo de proyectos pueden realizarse con un drone?",
                            "respuesta": "Los drones pueden usarse para una gran variedad de proyectos, como eventos, bodas, paisajes, arquitectura, agricultura, marketing, publicidad, y mucho más."
                        },
                        {
                            "pregunta": "¿Qué necesito para contratar un servicio de producción de video y fotografía con drone?",
                            "respuesta": "Para empezar, solo necesitas una idea o concepto para tu proyecto. Nosotros te asesoraremos y te ayudaremos a convertirlo en una realidad."
                        },
                        {
                            "pregunta": "¿Cuánto cuesta un servicio de producción de video y fotografía con drone?",
                            "respuesta": "El precio de un servicio de producción con drone depende de varios factores, como la duración del proyecto, la complejidad de las tomas, el tipo de equipo utilizado y la edición y postproducción."
                        },
                    ]
                }
            }
        },
    ])
}
