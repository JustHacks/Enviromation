import Navbar from '../components/navbar.jsx';
import Head from 'next/head';
import Footer from '../components/footer.jsx';
import Issuesinfo from '../components/issuesinfo.jsx';

const Issues = () => {
	return(
		<>
			<Head>
				<title>Issues - Enviromation</title>
			</Head>
			<Navbar />
			<Issuesinfo />
			<Footer />
		</>
	)
}

export default Issues;