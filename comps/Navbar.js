const Navbar = () => {
    return ( 
        <nav class="absolute w-full z-40">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between ">
			
				
					<div>
						<a href="#" class="flex items-center py-4 px-2">
							<span class="font-semibold text-blue-500 text-lg"
								>Building.Rs</span>
						</a>
					</div>
				
					<div class="hidden md:flex items-center space-x-1">
						<a
							href=""
							class="py-1 px-2 text-gray-900 font-bold border-b-4 border-blue-500"
							>Home</a
						>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>About US</a
						>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>Properties</a
						>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>Agents</a
						>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>Contact</a
						>
					</div>
					<button className=" px-4  bg-blue-500 text-thin  text-white shadow-md h-10 mt-4">Get Started</button>
			
			</div>
		</div>
	</nav>
     );
}
 
export default Navbar;