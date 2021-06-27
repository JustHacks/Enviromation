const Info = () => {
  return (
    <>
    <div className="mt-10 text-center">
    <h1 className="text-3xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-5xl">
        <span className="block text-gray-800 xl:inline">Inspiration</span>
    </h1>
    <p className="my-8 text-base text-gray-700 sm:text-lg max-w-4xl px-4 sm:mx-auto md:text-xl"> More than 75 percent of Earth’s land areas are substantially degraded, undermining the well-being of 3.2 billion people, according to the world’s first comprehensive, evidence-based assessment. These lands that have either become deserts, are polluted, or have been deforested and converted to agricultural production are also the main causes of species extinctions.

    </p>
    </div>
      <div className="flex flex-col items-center justify-center	w-screen">
          <h1 className="mt-10 z-10 text-3xl tracking-tight font-semibold text-gray-900 sm:text-5xl lg:text-5xl">
            <span className="block z-10 text-gray-800 xl:inline">Features</span>
          </h1>
          <p className="mt-8 z-10 text-base text-gray-700 sm:text-lg max-w-4xl px-4 sm:mx-auto md:text-xl text-center">We are urging people come together to save the environment. As climate change can only be saved if all of us are working together. We Create awareness by providing an all in one platform where people can learn about the environment and why its degradation is a major cause of concern in the 21st century,the people can also see the impact of this pollution on the ecosystem .</p>
          
        <div className="my-16 flex flex-wrap gap-10 justify-center" id="features">

        <div className="flex flex-wrap gap-10 justify-center">
            <div className="shadow-lg px-5 z-10 py-3 rounded-2xl md:mr-5 max-w-md">
              <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/greenhouse-effect.png" />
              <h3 className="text-lg font-bold text-green-400 mb-2">Be Aware</h3>
              <p>Be aware on how you are harming the environment and how you can take steps to reduce it.</p>
            </div>

            <div className="shadow-lg px-5 z-10 py-3 rounded-2xl md:mr-5 max-w-md">
              <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/kawaii-taco.png" />
              <h3 className="text-lg font-bold text-green-400 mb-2">Food Ration Manager</h3>
              <p>Food waste is also a big environmental issue, so use this feature to calculate your food!</p>
            </div>
          </div>
          
          <div className="flex flex-wrap z-10 gap-10 justify-center">
            <div className="shadow-lg px-5 py-3 rounded-2xl md:mr-5 max-w-md">
              <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/shark.png" />
              <h3 className="text-lg font-bold text-green-400 mb-2">3D Models</h3>
              <p>Immerse yourself with endangered animals through our 3D models, and lets strive to protect them.</p>
            </div>

            <div className="shadow-lg z-10 px-5 py-3 rounded-2xl md:mr-5 max-w-md">
              <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/group.png" />
              <h3 className="text-lg font-bold text-green-400 mb-2">Donations and Campaigning</h3>
              <p>Create change by supporting organizations that positively impacts the environment!</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Info;
