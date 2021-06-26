import Navbar from '../components/navbar.jsx';
import Panel from '../components/panel.jsx';
import Head from 'next/head';

const Impacts = () => {
	return(
		<>
			<Head>
				<title>Impact - Enviromation</title>
			</Head>
			<Navbar />
			{/*you can move it to home page now, style it in ../components/panel.jsx*/}
			<Panel
			image="<imgurl>"
			header="h"
			text="p"/>
		</>
	)
}

export default Impacts;