export default function Cta({ data }) {
    return <div className="max-w-6xl mx-auto bg-sky-800 px-4 sm:px-6">
        <div className="relative py-10 px-8 md:py-16 md:px-12 aos-init aos-animate" data-aos="fade-up">
            <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
                
            </div>
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                    <h3 className="h3 text-sky-100 mb-2">Stay in the loop</h3>
                    <p className="text-sky-300 text-lg">Join our newsletter to get top news before anyone else.</p>
                </div>
                <form className="w-full lg:w-1/2">
                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                        <input type="email" className="w-full appearance-none bg-sky-600 border border-sky-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-sky-100" placeholder="Your best email…" aria-label="Your best email…" />
                        <a className="flex justify-center items-center p-2 rounded-md text-sky-700 bg-purple-100 hover:bg-white shadow" href="#0">Subscribe</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
}