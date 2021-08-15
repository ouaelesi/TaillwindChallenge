
import FeedbackCarousel from '../comps/FeedbackCarousel'

const FeedBackSection = () => {
    return ( 
        <div className="bg-blue-50 p-2">
       <p className="font-bold text-3xl text-center mb-5">What Are <strong className="text-blue-500">Saying</strong>  Our Client</p>
       <p className="text-thin text-gray-400 mb-5 text-center md:w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>
            <FeedbackCarousel></FeedbackCarousel>
     </div>
     );
}
 
export default FeedBackSection;