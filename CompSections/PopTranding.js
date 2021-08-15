import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft , faChevronRight} from '@fortawesome/free-solid-svg-icons'
import TrandingCard from '../comps/TrandingCard'
import { PopTrandingData } from '../public/TestData/PopTranding'

const PopTranding = () => {
    return ( 
        <div className="py-20 lg:px-32 md:px-16 px-6">
       <p className="font-bold text-3xl mb-5">Our Most Popular <br></br> <strong className="text-blue-500">Tranding</strong></p>
       <div className="grid grid-cols-12">
       <p className="text-thin text-gray-400 mb-5 md:w-7/12 w-11/12 md:col-span-10 lg:col-span-11 col-span-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore e sed do eiusmod tempor incididunt ut labore e</p>
            <div className="mx-auto w-max text-white text-3xl ">
                <button className="bg-blue-500 py-1 px-2 rounded-md m-2"> <FontAwesomeIcon size="sm" icon={faChevronLeft}></FontAwesomeIcon></button>
                <button className="bg-blue-500 py-1 px-2 rounded-md m-2"> <FontAwesomeIcon size="sm" icon={faChevronRight}></FontAwesomeIcon></button>
            </div>
       </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {PopTrandingData.map ((elem,key) => (
                 <TrandingCard info = {elem}></TrandingCard> 
           ))}
      </div>
            
     </div>
     );
}
 
export default PopTranding;