const Panel = (props) => {
	return(
		<div className="flex md:flex-row flex-col m-auto p-4 bg-gray-900 sm:max-w-6xl m-auto text-gray-100 rounded-sm w-full">
			<article className="pr-4 pb-4 sm:pb-0 relative">
				<h2 className="font-semibold text-green-400 pb-4 text-2xl">{props.header}</h2>
				<p className="text-base text-gray-200 md:pr-4 mb-8">{props.text}</p>
				<a className={props.linkBtn} href={props.link} target="_blank">{props.linkContent}</a>
			</article>
			<img className="max-w-md rounded shadow py-4 sm:mt-4 max-h-80" src={props.image} />
		</div>
	)
}

export default Panel;