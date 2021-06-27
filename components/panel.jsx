const Panel = (props) => {
	return(
		<div className="flex md:flex-row flex-col m-auto p-4 bg-gray-900 max-w-6xl m-auto text-gray-100 rounded-sm">
			<article className="pr-4 pb-4 sm:pb-0 relative">
				<h2 className="font-semibold text-green-400 pb-4 text-2xl">{props.header}</h2>
				<p className="text-base text-gray-200 md:pr-4">{props.text}</p>
				<a className="absolute bottom-0 text-center px-4 py-1 border border-transparent font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg sm:my-4 md:px-10" href={props.link} target="_blank">{props.linkContent}</a>
			</article>
			<img className="max-w-md rounded shadow py-4 max-h-80" src={props.image} />
		</div>
	)
}

export default Panel;