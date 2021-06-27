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

      <div className="flex flex-col items-center justify-center	w-screen z-10">
          <h1 className="mt-6 text-3xl tracking-tight font-semibold text-gray-900 sm:text-5xl lg:text-5xl">
            <span className="block text-gray-800 xl:inline">Features</span>
          </h1>
          <p className="my-8 text-base text-gray-700 sm:text-lg max-w-4xl px-4 sm:mx-auto md:text-xl">What we are doing to help people come together to save the environment. Creates awareness about environmental degradation by providing an all in one platform where people can learn about the environment and why its degradation is a major cause of concern in the 21st century,the people can also see the impact of this pollution on the ecosystem .</p>
        <div className="my-16 flex flex-wrap gap-10 justify-center">

          <div className="shadow-lg px-5 py-3 rounded-2xl md:mr-5 max-w-md">
            <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/greenhouse-effect.png" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Be Aware</h3>
            <p>Be aware how you are harming the world and how you can protect it.</p>
          </div>

          <div className="shadow-lg px-5 py-3 rounded-2xl md:mr-5 max-w-md">
            <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/kawaii-taco.png" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Food Ration Manager</h3>
            <p>Food ration manager to prevent food from being wasted.</p>
          </div>

          <div className="shadow-lg px-5 py-3 rounded-2xl md:mr-5 max-w-md">
            <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/shark.png" />
            <h3 className="text-lg font-bold text-green-400 mb-2">3D Models</h3>
            <p>With Enviromation you can learn about endangered species with cool 3D animated modles.</p>
          </div>

          <div className="shadow-lg px-5 py-3 rounded-2xl md:mr-5 max-w-md">
            <img className="w-28 float-left m-2" src="https://img.icons8.com/bubbles/100/000000/group.png" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Donations and Campaigning</h3>
            <p>we have websites of various verified organizations protecting the environment.People who don't have time to be involved in campaigns could donate to these organizations using the donation links .For the people who want to get involved and come to the campaigns we have accumalated various organizations that hold these campaigns from time to time where the people could come and become a part.</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Info;
