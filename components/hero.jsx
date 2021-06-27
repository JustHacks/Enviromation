
const Hero = () => {
  return (

    <main className="py-32 mx-auto bg-gray-900 px-4 flex justify-center items-center sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-green-400 xl:inline">Enviromation</span>
              </h1>
              <p className="my-8 text-base text-center text-gray-300 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                The climate crisis is rising at an unprecedented rate. Protecting it, starts with <strong>you</strong>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <a href="/issues" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10">Learn More</a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/impacts" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">3D Models</a>
                </div>
              </div>
            </div>
          </main>
	)       
}

export default Hero;