import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Impact from '../components/impact.jsx';
import Head from 'next/head';

const Impacts = () => {
	return(
		<>
			<Head>
				<title>Impact - Enviromation</title>
			</Head>
			<Navbar active3="text-green-400"/>
			<Impact />
			<Footer />
		</>
	)
}

export default Impacts;