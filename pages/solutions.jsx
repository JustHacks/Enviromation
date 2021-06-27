import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Head from 'next/head';

const Solutions = () => {
	return(
		<>
			<Head>
				<title>Solutions - Enviromation</title>
			</Head>
			<Navbar active4="text-green-400"/>
			<Footer />
		</>
	)
}

export default Solutions;