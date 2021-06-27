import Panel from './panel.jsx';

const Issuesinfo = () => {
  return (
    <>
      <div className="py-20 mx-auto px-4 text-center sm:px-6">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl py-5 sm:p-0">
          <span className="block text-green-400 xl:inline">Environmental </span>
          <span className="block xl:inline">Issues</span>
        </h1>
        <p className="text-gray-500 mt-4">Environmental topics impact everyone. Caring about it will lead to a better quality of life. To create a sustainable way of life, We must identify the causes of Environmental Issues.</p>
      </div>


      <div className="flex flex-col gap-2 sm:p-2">
        <Panel
          header="Air Pollution"
          image="https://images.unsplash.com/photo-1542203519-615a6fb5710c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvbGx1dGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          text=""
        />
        <Panel
          header="Water Pollution"
          image="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          text=""
        />
        <Panel
          header="Deforestation"
          image="https://images.unsplash.com/photo-1443188987226-256ecbeda3cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          text=""
        />
        <Panel
          header="Plastic Pollution"
          image="https://images.unsplash.com/photo-1585119192228-f072c53bc55c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9sbHV0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
          text=""
        />
        <Panel
          header="Food Waste"
          image="https://images.unsplash.com/photo-1574676039880-73da8368f0eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHdhc3RlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          text=""
        />
        <Panel
          header="Biodiversity Loss"
          image="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1043&q=80"
          text="Biodiversity loss disrupts the functioning of ecosystems, making them more vulnerable to perturbations and less able to supply humans with needed services​. Biodiversity provides many goods and services essential to life on earth. The management of natural resources can determine the baseline health status of a community. The loss of these resources can create the conditions responsible for morbidity or mortality."
        />
      </div>
    </>
  )
}

export default Issuesinfo;