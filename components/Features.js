export default function Features({ data }) {
    const { features } = data
    return <div className="max-w-6xl mx-auto flex justify-center items-center p-4 flex-wrap">
        <div className="max-w-xl " >
            <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Mayor visibilidad y en un solo lugar</div>
                <h3 className="h3 mb-3 text-black">{features.titulo}</h3>
                <p className="text-xl text-gray-400 mb-4">{features.descripcion}</p>
                <ul className="text-lg text-gray-400 -mb-2">
                    {features.features?.map(item => <li className="flex items-center mb-2 line-clamp-2 ">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                            </path>
                        </svg>
                        <span>{item}</span>
                    </li>)}

                </ul>
            </div>
        </div>
        <div className="max-w-xl md:max-w-none">
            <img alt="Features 01" loading="lazy" width="420" height="405" className="max-w-full mx-auto md:max-w-none h-auto" src={features.imagen} />
        </div>
    </div>
}