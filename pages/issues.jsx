import Navbar from '../components/navbar.jsx';
import Head from 'next/head';
import Footer from '../components/footer.jsx';
import Issuesinfo from '../components/issuesinfo.jsx';

const Issues = () => {
	return(
		<>
		{/*<div className="w-full h-screen bg-forrest z-0 bg-no-repeat bg-cover bg-top bg-fixed"></div>*/}
			<Head>
				<title>Issues - Enviromation</title>
			</Head>

			<Navbar active2="text-green-400"/>
			<Issuesinfo />
			<Footer />
		</>
	)
}

export default Issues;