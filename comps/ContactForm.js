const ContactForm = () => {
    return ( 
        <div class="bg-gray-600 rounded-lg py-10 md:px-32 px-6 text-center relative lg:w-5/6 mx-auto overflow-hidden">
            <img src="/assets/circle.svg" class="absolute -bottom-24 -left-32 rotate-90 opacity-5" width="35%"></img>
            <img src="/assets/circle.svg" class="absolute -top-24 -right-32 rotate-90 opacity-5" width="35%"></img>
            <img src="/assets/rectangle.svg" class="absolute bottom-5 left-5 rotate-90 opacity-90" width="5%"></img>
            <img src="/assets/arrow.svg" class="absolute bottom-32 left-5 rotate-90 opacity-90" width="7%"></img>
            <img src="/assets/shape.svg" class="absolute top-5 right-5 rotate-90 opacity-80" width="8%"></img>
            <img src="/assets/leftarrow.svg" class="absolute bottom-28 right-8 rotate-90 opacity-90" width="7%"></img>

            <h1 className="text-white font-extrabold text-3xl mb-5">Do You Have Any Questions</h1>
            <p className="text-thin text-gray-300 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>
            <div className="bg-white rounded-lg py-2 pl-6 pr-2 grid grid-flow-col grid-cols-2">
                 <span className="text-gray-500 text-left col-span-8 pt-3 inline-block align-text-middle ">Enter Your Email</span>
                 <button className="bg-blue-500 col-span-4 text-white md:px-12 px-5 py-3 rounded-lg">click me</button>
            </div>

     
        </div>
     );
}
 
export default ContactForm;