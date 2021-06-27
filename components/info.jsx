const Info = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center w-screen md:items-start md:text-left">
    <div className="md:ml-20 mt-6">
      <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-green-400 xl:inline">Enviromation's</span>
      </h1>
      <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
      </div>
    <div className="md:ml-20 mt-6 flex flex-col md:flex-row">
     <a href=""><div className="shadow-2xl w-max px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 text-center">
      <img className="w-28" src="https://i.ibb.co/XLxy07p/Food-waste.png"/>
      <h3 className="font-bold">Food Waste</h3>
     </div></a>

     <a href=""><div className="shadow-2xl w-max px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 text-center">
      <img className="w-28" src="https://i.ibb.co/TL5DxJg/Endangered-animals.png"/>
      <h3 className="font-bold">Animals</h3>
     </div></a>
     
     <a href=""><div className="shadow-2xl w-max px-5 py-3 rounded-2xl md:mr-5 hover:bg-gray-200 text-center">
      <img className="w-28" src="https://i.ibb.co/9yr1TCq/plastic-pollution.png"/>
      <h3 className="font-bold">Plastic Waste</h3>
     </div></a>
     
    </div>
    </div>

    </>
  )
}

export default Info;
