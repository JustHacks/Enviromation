const Panel = (props) => {
	return(
		<div className="flex sm:flex-row flex-col items-center m-auto w-full p-4 bg-gray-700 text-gray-200">
			<article className="pr-2">
				<h2 className="font-semibold text-2xl">{props.header}</h2>
				<p className="text-sm">{props.text}</p>
			</article>
			<img className="max-w-md rounded shadow" src={props.image} />
		</div>
	)
}

export default Panel;