import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Hero from '../components/hero.jsx';
import Info from '../components/info.jsx';
import Head from 'next/head';

function Home() {
  return (
    <div className="w-full bg-cover h-full overflow-none">
			<Head>
				<title>Home - Eviromation</title>
			</Head>
      <Navbar active1="text-green-400"/>
      <Hero />
      <Info />
      <Footer />
    </div>
  )
}

export default Home;