import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeebBackCard from "./FeedBackCards"
import { faChevronLeft , faChevronRight} from '@fortawesome/free-solid-svg-icons'

const FeedbackCarousel = () => {
    return ( 
        <>
        <div className="md:pl-56 px-6 mx-auto md:flex md:space-x-4 overflow-hidden grid gap-4">
            <FeebBackCard></FeebBackCard>
            <FeebBackCard></FeebBackCard>
        </div>
            <div className="mx-auto w-max text-white text-3xl mt-4">
                <button className="bg-blue-500 py-1 px-3 rounded-md m-3"> <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
                <button className="bg-blue-500 py-1 px-3 rounded-md m-3"> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
            </div>
   </>
     );
}
 
export default FeedbackCarousel;