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
			<nav className="p-4 bg-gray-900 text-gray-100 relative top-0 w-full h-auto sm:relative" id="nav">
				<span className="flex items-center justify-between">
        
        <img class="h-8 w-auto" src="https://img.icons8.com/color/48/000000/leaf.png" alt="Logo"/>

					<button className="flex items-center justify-center p-3 sm:hidden sm:pointer-events-none w-max border-none outline-none hover:bg-indigo-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-indigo-400 active:bg-opacity-20 rounded-md" onClick={toggle}>
							<svg className="fill-current stroke-0 sm:hidden" viewBox="0 0 100 80" width="20" height="16">
  							<rect width="100" height="10"></rect>
  								<rect y="30" width="100" height="10"></rect>
  							<rect y="60" width="100" height="10"></rect>
							</svg>
						</button>
					</span>

					<span className="mobileNav hidden" id="links">
						<ul className="flex flex-col gap-2 pb-2 pt-2 justify-start sm:hidden">
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-indigo-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-indigo-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><a>Home</a></li>
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-indigo-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-indigo-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><a>Issues</a></li>
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-indigo-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-indigo-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><a>Impacts</a></li>
              <li className="text-lg sm:text-base cursor-pointer w-full hover:bg-indigo-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-indigo-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><a>Solutions</a></li>
						</ul>
					</span>

					<ul className="nonMobileNav hidden sm:flex sm:gap-2 sm:justify-end sm:flex-row sm:gap-3 sm:p-2">
						<li className="text-base cursor-pointer w-max hover:text-indigo-400 transition duration-300 ease-out font-medium"><a>Home</a></li>
						<li className="text-base cursor-pointer w-max hover:text-indigo-400 transition duration-300 ease-out font-medium"><a>Issues</a></li>
						<li className="text-base cursor-pointer w-max hover:text-indigo-400 transition duration-300 ease-out font-medium"><a>Impacts</a></li>
            <li className="text-base cursor-pointer w-max hover:text-indigo-400 transition duration-300 ease-out font-medium"><a>Solutions</a></li>
					</ul>	
			</nav>
		</>
	)
}

// Theres two navs one for mobile one for desktop

export default Navbar;