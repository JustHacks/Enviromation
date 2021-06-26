import Head from 'next/head';

const Footer = () => {
	return(
		<>
		<Head>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
		</Head>
			<section className="footer bg-gray-900 text-white p-6 sm:p-8 relative bottom-0 mt-12 sm:mt-60">
				<span className="flex flex-col sm:flex-row items-center gap-4">
				<span className="flex flex-col gap-2 sm:w-full items-center">
					<h4 className="font-semibold text-3xl sm:text-2xl">Socials:</h4>
					<ul className="flex flex-col sm:flex-row gap-2 items-center text-gray-100">
						<li className="cursor-pointer hover:text-gray-200">
							<i className="fab fa-2x fa-github"></i>
						</li>
						<li className="cursor-pointer">
							<i className="fab fa-2x fa-twitter"></i>
						</li>
						<li className="cursor-pointer">
							<i className="fab fa-2x fa-instagram"></i>
						</li>
					</ul>
					</span>
					<ul className="p-4 sm:w-full flex flex-col justify-center items-center">
						<li className="py-1">
							<h4 className="font-semibold text-2xl sm:text-2xl">Placeholder</h4>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
					</ul>

					<ul className="p-4 sm:w-full flex flex-col justify-center items-center">
						<li className="py-1">
							<h4 className="font-semibold text-2xl sm:text-2xl">Placeholder</h4>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
						<li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
							<a>Placeholder</a>
						</li>
					</ul>
				</span>
			</section>
		</>
	)
}

export default Footer;
