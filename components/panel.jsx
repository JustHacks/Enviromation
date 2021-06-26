const Panel = (props) => {
	return(
		<div className="">
			<img src={props.image} />
			<h2 className="">{props.header}</h2>
			<p className="text-gray-900">{props.text}</p>
		</div>
	)
}

export default Panel;