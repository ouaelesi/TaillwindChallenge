
import HowItWorksCarousel from '../comps/HowItworksCarousel'
const HowItWorks = () => {
    return ( 
        <div className="py-20 bg-blue-50">
        <p className="font-bold text-3xl text-center mb-5">How It <strong className="text-blue-500">Works</strong></p>
        <p className="text-thin text-gray-400 mb-5 text-center md:w-1/2 p-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>
          <HowItWorksCarousel></HowItWorksCarousel>
         </div>
     );
}
 
export default HowItWorks;