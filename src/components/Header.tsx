import React from 'react';

export default function Header() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<header className="sticky top-0">
			<nav className="border-b border-gray-200 bg-[#f5f7fa] bg-opacity-30 p-4 text-white backdrop-blur-md backdrop-filter">
				<div className="mx-auto flex max-w-screen-xl flex-wrap justify-between">
					<a href="/">
						<img
							className="h-20 rounded"
							src="assets/logo_name.png"
							alt="slogan logo AIM-Connect"
						/>
					</a>

					<button
						type="button"
						className="peer my-auto ml-1 inline-flex h-min items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:order-2 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							className="hidden h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>

					<div
						className={
							'transition-all duration-300 ease-in-out peer-checked:bg-gray w-full items-center  justify-between lg:order-1 lg:flex lg:w-auto' +
							(navbarOpen ? ' flex' : ' hidden')
						}
					>
						<ul className="mt-4 flex w-full flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
							<li>
								<a
									href="/"
									className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/news"
									className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>
									News
								</a>
							</li>
							<li>
								<a
									href="/team"
									className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>
									Team
								</a>
							</li>
							<li>
								<a
									href="/application"
									className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>
									Apply Now
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
