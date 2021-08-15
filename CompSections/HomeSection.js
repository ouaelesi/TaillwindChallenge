import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import HomeBox from "../comps/HomeBox"

const HomeSection = () => {
    return ( 
        <div className="h-screen ">
            <div className="grid md:grid-cols-2 grid-col-1 h-full relative">
                <div className="hidden md:block"></div>
                <div className="">
                    <img src="/assets/homepageBG.jpg" className="h-full opacity-60"></img>
                </div>

                <div className="absolute w-full h-full pt-36  lg:pl-32 md:pl-20 pl-8">
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold leading-snug">Easy To Find Your Next <br></br> Pergect Place </p>
                  <p className="text-thin lg:text-gray-400 text-gray-700 mb-6 lg:w-1/2 md:w-5/6 pr-20 col-span-11 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>

            <button className=" px-4 py-2 bg-blue-500 text-thin text-white shadow-md ">Learn More</button>
            <button className="bg-blue-200 py-2 ring-2 px-3 rounded-full m-3 text-white text-center"> <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
            <HomeBox></HomeBox>
                </div>
            </div>
        </div>
     );
}
 
export default HomeSection;