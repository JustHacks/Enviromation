// Navbar functionality
// If the hamburger menu is toggled the ul with all the links is shows, this also sets the main nav to display fixed

const Navbar = () => {
	const toggle = () => {
		let x = document.getElementById('links');
		let y = document.getElementById('nav');
		(x.style.display === 'none') ? x.style.display = "block" : x.style.display = "none";
		(y.style.position === 'relative') ? y.style.position = "fixed" : y.style.position = "relative"; 
	};
	return (
		<>
			<nav className="p-0 bg-gray-900 text-white relative top-0 w-full h-auto sm:p-2 sm:relative" id="nav">
				<span className="flex justify-end items-center">
					<button className="flex items-center justify-end p-4 sm:hidden sm:pointer-events-none w-max border-none outline-none" onClick={toggle}>
							<svg className="fill-current stroke-0 sm:hidden" viewBox="0 0 100 80" width="16" height="16">
  							<rect width="100" height="10"></rect>
  								<rect y="30" width="100" height="10"></rect>
  							<rect y="60" width="100" height="10"></rect>
							</svg>
						</button>
					</span>
					<span className="mobileNav hidden" id="links">
						<ul className="flex flex-col gap-2 px-6 pb-6 sm:hidden">
							<li className="text-lg sm:text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out sm:font-medium sm:block"><a>Placeholder</a></li>
							<li className="text-lg sm:text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out sm:font-medium sm:block"><a>Placeholder</a></li>
							<li className="text-lg sm:text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out sm:font-medium sm:block"><a>Placeholder</a></li>
						</ul>
					</span>
					<ul className="nonMobileNav hidden sm:flex sm:gap-2 sm:justify-end sm:flex-row sm:gap-3 sm:p-2">
						<li className="text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out font-medium"><a>Placeholder</a></li>
						<li className="text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out font-medium"><a>Placeholder</a></li>
						<li className="text-base cursor-pointer w-max hover:text-indigo-700 transition duration-300 ease-out font-medium"><a>Placeholder</a></li>
					</ul>	
			</nav>
		</>
	)
}

// Theres two navs one for mobile one for desktop

export default Navbar;