import Navbar from '../components/navbar.jsx';
import Head from 'next/head';
import Issuesinfo from '../components/issues.jsx';

const Issues = () => {
	return(
		<>
			<Head>
				<title> - Enviromation</title>
			</Head>
			<Navbar />
			<Issuesinfo />
		</>
	)
}

export default Issues;