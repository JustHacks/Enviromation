const Panel = (props) => {
	return(
		<div className="flex md:flex-row flex-col m-auto p-4 bg-gray-900 max-w-6xl m-auto text-gray-100 rounded-sm">
			<article className="pr-4 pb-4 sm:pb-0">
				<h2 className="font-semibold text-green-400 pb-4 text-2xl">{props.header}</h2>
				<p className="text-base text-gray-200 md:pr-4">{props.text}</p>
			</article>
			<img className="max-w-md rounded shadow py-4 max-h-80" src={props.image} />
		</div>
	)
}

export default Panel;