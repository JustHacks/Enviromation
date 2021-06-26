import Navbar from '../components/navbar.jsx';
import Panel from '../components/panel.jsx';

const Impacts = () => {
	return(
		<>
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