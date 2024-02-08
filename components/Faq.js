export default function Faq({ data }) {
    const { beneficios , titulo } = data
    return <section className="relative not-prose scroll-mt-[72px]" >
            <div className="absolute inset-0 bg-transparent">
            </div>
        <div className="relative mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20  max-w-6xl">
            <div className="mb-4">
                <div className="mb-6 mx-auto md:mb-12 text-center">
                    <p className="text-base font-semibold uppercase tracking-wide ">Preguntas frecuentes</p>
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-4xl text-gray-950">{titulo}</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600  text-center"></p>
                </div>
            </div>
            <div className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700">
                {beneficios.map(item => 
                    <details className="align-center flex justify-between card md:px-6 py-4 px-5 md:py-5 mb-2" name="beneficios">
                        <summary className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 ">{item.pregunta}</summary>
                        <p className='mt-3 select-none'>{item.respuesta}</p>
                    </details>
              )}
                
            </div>
        </div>
    </section>
}