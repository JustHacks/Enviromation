import Panel from './panel.jsx';

const Issuesinfo = () => {
  return (
    <>
      <div className="bg-cover py-20 mx-auto px-4 text-center sm:px-6">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl py-5 sm:p-0">
          <span className="block text-green-400 xl:inline">Environmental </span>
          <span className="block xl:inline">Issues</span>
        </h1>
        <p className="text-gray-500 mt-6 max-w-4xl m-auto">Environmental topics impact everyone. Caring about it will lead to a better quality of life. To create a sustainable way of life, We must identify the causes of Environmental Issues.</p>
      </div>


      <div className="flex flex-col gap-2 sm:p-2">
        <Panel
          header="Air Pollution"
          image="https://images.unsplash.com/photo-1582377224944-2c2a17affa38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
          text="Air pollution is a significant risk factor for a number of pollution-related diseases, including respiratory infections, heart disease, COPD, stroke and lung cancer. The human health effects of poor air quality are far reaching, but principally affect the body's respiratory system and the cardiovascular system. Polluted air is a public health hazard that cannot be evaded. It is widely known that long-term exposure to air pollution enhances the risks of cardiovascular and respiratory diseases. Air pollution caused 8.8 million premature deaths worldwide in 2015"
        />
        
        <Panel
          header="Deforestation"
          image="https://images.unsplash.com/photo-1443188987226-256ecbeda3cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          text="Deforestation and the destruction of forest habitat is the leading cause of extinction on the planet. The loss of trees and other vegetation can cause climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people. But the risks from deforestation go even wider. Trees absorb and store carbon dioxide. If forests are cleared, or even disturbed, they release carbon dioxide and other greenhouse gases. Forest loss and damage is the cause of around 10% of global warming."
        />
        <Panel
          header="Plastic Pollution"
          image="https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
          text="Plastic sticks around in the environment for ages, threatening wildlife and spreading toxins. Plastic also contributes to global warming. Almost all plastics are made from chemicals that come from the production of planet-warming fuels (gas, oil and even coal). Marine species ingest or are entangled by plastic debris, which causes severe injuries and deaths. Plastic pollution threatens food safety and quality, human health, coastal tourism, and contributes to climate change."
        />
        <Panel
          header="Biodiversity Loss"
          image="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1043&q=80"
          text="Biodiversity loss disrupts the functioning of ecosystems, making them more vulnerable to perturbations and less able to supply humans with needed services​. Biodiversity provides many goods and services essential to life on earth. The management of natural resources can determine the baseline health status of a community. The loss of these resources can create the conditions responsible for morbidity or mortality."
        />
        <Panel
          header="Water Pollution"
          image="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          text="Microbial water pollution is a major problem in the developing world, with diseases such as cholera and typhoid fever being the primary cause of infant mortality. Organic matter and nutrients causes an increase in aerobic algae and depletes oxygen from the water column. When water pollution causes an algal bloom in a lake or marine environment, the proliferation of newly introduced nutrients stimulates plant and algae growth, which in turn reduces oxygen levels in the water."
        />
        <Panel
          header="Food Waste"
          image="https://blog.trycake.com/hubfs/Imported_Blog_Media/food-waste-blog.jpg"
          text="Food waste and waste is a major part of the impact of agriculture on climate change and other environmental issues. Food production is resource-intensive, therefore food lost or wasted entails poor use of resources and will have negative environmental impacts. Reducing food loss and waste will improve resource use efficiency and lower GHG emissions per unit of food consumed because more food reaches the consumer for a given level of resources used. Moreover, food waste that is not handled or reclaimed properly, i.e. through composting, can have many negative environmental consequences "
        />
      </div>
    </>
  )
}

export default Issuesinfo;