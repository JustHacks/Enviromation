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

      	<div className="bg-cover py-20 mx-auto px-4 text-center sm:px-6">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl py-5 sm:p-0">
          <span className="block text-green-400 xl:inline">Solutions</span>
        </h1>
        <p className="text-gray-500 max-w-4xl m-auto mt-6">Sometimes putting a limit on things can result in being very beneficial. Approximately one third of all food produced annually gets wasted (over 1,000,000,000 tonnes of food). Use the form below to ration the amount of food you use per-day to prevent any of it being wasted!</p>
      </div>


			<div className="flex flex-col gap-0 sm:gap-8">
			<form className="flex flex-col w-full max-w-lg m-auto sm:p-8 p-6 bg-gray-900 text-white sm:rounded-md" action="#" method="post" autoComplete="on">
			<h2 className="text-3xl font-semibold pb-6 text-green-400">Enter Inventory</h2>
				<label className="text-gray-white tracking-tight text-xl font-medium py-2.5" forHTML="identifyfood">Item Name</label>
				<input className="bg-gray-100 text-black w-full rounded-sm outline-none px-2 py-1.5 text-black mb-6 border border-transparent focus:border-green-400 transition duration-200" type="text" id="name" name="name" forHTML="identifyfood" />


				<label className="text-gray-white tracking-tight  text-xl font-medium py-2.5" forHTML="quantity">Quantity of Servings</label>
				<input className="bg-gray-100 text-black w-full rounded-sm outline-none px-2 py-1.5 mb-8 border border-transparent focus:border-green-400 transition duration-200" type="number" id="quantity" name="quantity" value="quant" min="0" required />


				<input className="w-max cursor-pointer m-auto flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-green-500 bg-green-100 hover:bg-green-200 md:text-lg" type="submit" value="Submit" />
			</form>

			<section className="bg-green-100 p-8 w-full max-w-lg m-auto">
				<h2 className="text-3xl font-semibold pb-6 text-green-400">Inventory</h2>
				<section className="bg-green-50 w-full h-56">
				</section>
			</section>
			</div>
			<Footer />
		</>
	)
}

export default Solutions;