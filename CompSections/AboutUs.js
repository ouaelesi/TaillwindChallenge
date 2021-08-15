const AboutUsSection = () => {
    return ( 
        <div className="grid md:grid-cols-2 grid-cols-1 lg:pr-32 pr-6 gap-20 my-20" >
             <div className="relative bg-blue-100 lg:w-5/6 rounded-r-3xl">
                 <img src="/assets/house1.jpg" class="relative md:top-10 lg:left-28 left-6 top-6 rounded-r-3xl" width="100%"></img>
             </div>
             <div className="pt-5 pl-6">
                 <p className="text-blue-400">Abous US</p>
                 <p className="font-bold text-3xl mb-5">We Are providing The Top<br></br> <strong className="text-blue-500">Real State</strong> Property</p>
                 <p className="text-thin text-gray-400 mb-4 w-11/12 col-span-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>
            <p className="text-thin text-gray-400 mb-4 w-11/12 col-span-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e
            </p>
            <div className="mt-8"><button className=" px-4 py-2 bg-blue-500 text-thin  text-white shadow-md mx-2">Learn More</button>
            <button className=" px-4 py-2 bg-transparent text-thin  text-blue-500    border-2 border-blue-500 mx-2">Learn More</button>
            </div>
             </div>
        </div>
     );
}
 
export default AboutUsSection;