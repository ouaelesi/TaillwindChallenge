import TrandingCard from "./TrandingCard"
import { Tranding } from '../public/TestData/Tranding'
import { HowItWorks } from '../public/TestData/HowItWorks'
import HwoItWorksCard from "./HowItWorksCard"
const TrandingSection = () => {
    return ( 
        <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  lg:px-32 md:px-16 px-6">
        
        {  
         Tranding.map ((elem,key) => (
                 <TrandingCard info = {elem}></TrandingCard> 
           ))}
        </div>
        <div className="w-max mx-auto mt-12"><button className=" px-4 py-2 bg-blue-500 text-thin  text-white shadow-md">Load More</button></div>
        
        </div>
     );
}
 
export default TrandingSection;