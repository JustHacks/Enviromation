import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Hero from '../components/hero.jsx';
import Info from '../components/info.jsx';
import Head from 'next/head';

function Home() {
  return (
    <>
			<Head>
				<title>Home - Eviromation</title>
			</Head>
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </>
  )
}

export default Home;