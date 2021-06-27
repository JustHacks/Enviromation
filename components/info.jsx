const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center	w-screen z-10">

        <div className="mt-6">
          <h1 className="text-3xl tracking-tight font-semibold text-gray-900 sm:text-5xl lg:text-4xl">
            <span className="block text-green-400 xl:inline">Enviromation's</span>
          </h1>
          <h2 className="text-lg text-gray-700 text-center tracking-wide">Features</h2>
        </div>

        <div className="my-10 flex flex-wrap gap-10 justify-center">

          <div className="shadow-2xl px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 w-80">
            <img className="w-28 float-left md:m-2" src="https://i.ibb.co/XLxy07p/Food-waste.png" />
            <h3 className="font-bold">Food Waste</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="shadow-2xl px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 w-80">
            <img className="w-28 float-left md:m-2" src="https://i.ibb.co/TL5DxJg/Endangered-animals.png" />
            <h3 className="font-bold">Animals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="shadow-2xl px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 w-80">
            <img className="w-28 float-left md:m-2" src="https://i.ibb.co/9yr1TCq/plastic-pollution.png" />
            <h3 className="font-bold">Plastic Waste</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Info;
