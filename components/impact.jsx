import Panel from './panel.jsx';

const Impact = () => {
	const modelLinkContent = "Experience the 3-D Model";
	const linkBtn = "md:absolute bottom-0 font-medium border border-transparent rounded-md text-white bg-green-400 hover:bg-green-500 py-3 px-5";
	return(
		<>
		<div className="bg-cover py-20 mx-auto px-4 text-center sm:px-6">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl py-5 sm:p-0">
          <span className="block text-green-400 xl:inline">Impact</span>
          <span className="block xl:inline"> on sealife</span>
        </h1>
        <p className="text-gray-500 max-w-4xl m-auto mt-6">Sea creatures are affected massively by things like pollution and global warming. A lot of nutrients or pesticicides used in agriculture are harmful to the oceans. Marine pollution occurs when a harmful body comes in contact with the ocean, causing harmful chemicles to spread. Bellow you can find a selection of endangered sea creatures</p>
      </div>
      <div className="flex flex-col gap-2">
			<Panel
			image="https://images.unsplash.com/photo-1532393950032-b666e39c29b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
			header="Dolphins"
			text="High levels of pollution can directly kill prey species and dolphins, and completely destroy their habitat. As the top predator, river dolphins have been known to have high levels of persistent toxic chemicals in their bodies, which is likely to adversely affect their health."
			linkBtn={ linkBtn }
			link="https://go.echoar.xyz/TgRy"
			linkContent={ modelLinkContent }
			/>
			<Panel
			image="https://images.unsplash.com/photo-1533787896899-91b040188f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80"
			header="Turtles"
			text="Sometimes even food waste from the cities and rural areas makes its way to the habitats of Turtles and other millions of sea animals .Turtles consume this food and die due to many complications.Many turtles, that have been killed by consuming debris, had plastic bags or fishing line in their stomachs, some as small as half of a fingernail. Sea turtles are especially susceptible to the effects of consuming marine debris due to their bodies’ own structure"
			linkBtn={ linkBtn }
			link="https://go.echoar.xyz/QgSN"
			linkContent={ modelLinkContent }
			/>
			<Panel
			image="https://images.unsplash.com/photo-1588522271915-53e06779abac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
			header="Blue Whales"
			text="All of the large whale species have been at risk of extinction due to a long history of whaling. Despite the ban on hunting, blue whales face a number of threats, all of which are caused by humans. These threats include entanglement in fishing gear,food waste, and habitat impacts including noise pollution."
			linkBtn={ linkBtn }
			link="https://go.echoar.xyz/J77S"
			linkContent={ modelLinkContent }
			/>
			</div>
		</>
	)
}

export default Impact;