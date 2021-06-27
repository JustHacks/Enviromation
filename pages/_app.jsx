import "tailwindcss/tailwind.css";
import '../styles/global.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return(
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default App;