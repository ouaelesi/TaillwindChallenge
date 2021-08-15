import { faHeart, faShareAlt,faBed , faBath, faClone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TrandingCard = (props) => {
    return ( 
        <div className="rounded-lg bg-gray-100 p-3 ">
            <div className="relative">
            <img src={props.info.image} width="100%" className="rounded-2xl"></img>
            <div class="absolute top-2 left-2 bg-white rounded-xl px-2 py-1 text-blue-400 text-xs">Available Now</div>
            </div>
   
           <div className="my-3 grid grid-cols-6">
              <p className="col-start-1 text-blue-400 font-bold">{props.info.price}</p>
              <div className="col-end-7 text-gray-300"> <button className="rounded-3xl bg-blue-100  px-1"><FontAwesomeIcon size="sm" icon={faHeart}></FontAwesomeIcon></button> <button className="rounded-3xl bg-blue-100  px-1"><FontAwesomeIcon size="sm" icon={faShareAlt}></FontAwesomeIcon></button>
              </div>
           </div>
           <p className="font-bold">{props.info.title}</p>
           <p className="text-gray-500 font-thin text-sm">{props.info.location}</p>
           <div className="mt-2 grid grid-cols-3 lg:w-5/6 gap-1">
              <div className="text-sm text-gray-500"><FontAwesomeIcon icon={faBed} className="text-red-500 mr-1"></FontAwesomeIcon> {props.info.Nbrbd} Bd</div>
              <div className="text-sm text-gray-500"><FontAwesomeIcon icon={faBath} className="text-blue-500 mr-1"></FontAwesomeIcon> {props.info.Nbrbth} Bth</div>
              <div className="text-sm text-gray-500"><FontAwesomeIcon icon={faClone} className="text-green-500 mr-1"></FontAwesomeIcon> {props.info.Nbrsqft} Sqft</div>
           </div>
        </div>
     );
}
 
export default TrandingCard;