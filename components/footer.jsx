import Head from 'next/head';

const Footer = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
      </Head>
      <section className="footer bg-gray-900 text-white p-6 sm:p-8 relative bottom-0 mt-12">
        <span className="flex flex-col sm:flex-row items-center gap-4">
          <span className="flex flex-col gap-2 sm:w-full items-center">
            <h4 className="font-semibold text-3xl sm:text-2xl">Socials:</h4>
            <ul className="flex flex-col mt-4 sm:flex-row gap-4 items-center text-gray-100">
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
              <h4 className="font-semibold mb-4 text-2xl sm:text-2xl">CAMPAIGNS</h4>
            </li>

            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>UN75</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Clean Seas</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Wild for Life</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Beat Pollution</a>
            </li>
          </ul>

          <ul className="p-4 sm:w-full flex flex-col justify-center items-center">
            <li className="py-1">
              <h4 className="font-semibold text-2xl mb-4 sm:text-2xl">FUNDS</h4>
            </li>
            
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Facility Green</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Climate Fund</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a>Environment Fund</a>
            </li>
            <li className="text-xl sm:text-lg cursor-pointer text-gray-100 font-normal leading-tight py-0.5 hover:underline transition duration-100 ease-out">
              <a> Global Environment</a>
            </li>
          </ul>
        </span>
				<p className="text-xs text-gray-300 absolute bottom-1 left-1 p-0.5">This site uses <a className="text-xs text-green-400 hover:underline" href="https://icons8.com">icons8</a></p>
      </section>
    </>
  )
}

export default Footer;
