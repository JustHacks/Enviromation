import Link from 'next/link';

// Navbar functionality
// If the hamburger menu is toggled the ul with all the links is shows, this also sets the main nav to display fixed

const Navbar = (props) => {
	const toggle = () => {
		let x = document.getElementById('links');
		let y = document.getElementById('nav');
		(x.style.display === 'none') ? x.style.display = "block" : x.style.display = "none";
		// (y.style.position === 'relative') ? y.style.position = "fixed" : y.style.position = "relative"; 
	};
	return (
		<>
			<nav className="p-4 px-8 bg-gray-900 text-gray-100 relative top-0 w-full h-auto sm:flex sm:flex-row sm:items-center" id="nav">
				<span className="flex items-center justify-between">
        
        <Link href="/"><a><img className="h-8 w-auto" src="https://img.icons8.com/color/48/000000/leaf.png" alt="Logo"/></a></Link>
					<button className="flex items-center justify-center p-3 sm:hidden sm:pointer-events-none w-max border-none outline-none hover:bg-green-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-green-400 active:bg-opacity-20 rounded-md" onClick={toggle}>
							<svg className="fill-current stroke-0 sm:hidden" viewBox="0 0 100 80" width="20" height="16">
  							<rect width="100" height="10"></rect>
  								<rect y="30" width="100" height="10"></rect>
  							<rect y="60" width="100" height="10"></rect>
							</svg>
						</button>
					</span>

					<span className="mobileNav hidden" id="links">
						<ul className="flex flex-col gap-2 pb-2 pt-2 justify-start sm:hidden">
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-green-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-green-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><Link href="/"><a className="flex">Home</a></Link></li>
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-green-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-green-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><Link href="/issues"><a className="flex">Issues</a></Link></li>
							<li className="text-lg sm:text-base cursor-pointer w-full hover:bg-green-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-green-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><Link href="/impacts"><a className="flex">Impacts</a></Link></li>
              <li className="text-lg sm:text-base cursor-pointer w-full hover:bg-green-400 hover:bg-opacity-20 active:bg-opacity-20 active:bg-green-400 active:bg-opacity-20 rounded-md px-2 py-1.5 transition duration-400 ease-out sm:font-medium sm:block"><Link href="/solutions"><a className="flex">Solutions</a></Link></li>
						</ul>
					</span>

					<ul className="nonMobileNav hidden sm:flex sm:gap-8 sm:justify-end sm:flex-row sm:gap-3 sm:p-2 sm:w-full">
						<li className="text-base cursor-pointer w-max hover:text-green-400 transition duration-300 ease-out font-medium"><Link href="/"><a className={props.active1}>Home</a></Link></li>
						<li className="text-base cursor-pointer w-max hover:text-green-400 transition duration-300 ease-out font-medium"><Link href="/issues"><a className={props.active2}>Issues</a></Link></li>
						<li className="text-base cursor-pointer w-max hover:text-green-400 transition duration-300 ease-out font-medium"><Link href="/impacts"><a className={props.active3}>Impacts</a></Link></li>
            <li className="text-base cursor-pointer w-max hover:text-green-400 transition duration-300 ease-out font-medium"><Link href="/solutions"><a className={props.active4}>Solutions</a></Link></li>
					</ul>	
			</nav>
		</>
	)
}

// Theres two navs one for mobile one for desktop

export default Navbar;