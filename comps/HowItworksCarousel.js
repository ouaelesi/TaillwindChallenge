import HwoItWorksCard from "./HowItWorksCard"
import { HowItWorks } from '../public/TestData/HowItWorks'
const HowItWorksCarousel = (props) => {
    return ( 
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 w-10/12 mx-auto">
           
          {HowItWorks.map ((elem,key) => (
                 <HwoItWorksCard cardinfo= {elem}></HwoItWorksCard> 
           ))}
            </div>
            <div className="grid grid-cols-4 gap-4 w-max mx-auto mt-12">
                <div className="bg-gray-200 p-2 rounded-full"></div>
                <div className="bg-blue-400 p-2 rounded-full"></div>
                <div className="bg-gray-200 p-2 rounded-full"></div>
                <div className="bg-gray-200 p-2 rounded-full"></div>
            </div>
        </div>
     );
}
 
export default HowItWorksCarousel;