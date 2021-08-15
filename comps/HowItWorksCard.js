
const HwoItWorksCard = (props) => {
    return ( 
        <div className="rounded-md p-4 bg-white">
           <div className="grid grid-cols-12 gap-4">
               <div className="col-span-3">
                  <img src={props.cardinfo.image} width="90%" className="rounded-md"></img>
               </div>
               <div className="col-span-9 text-gray-600 font-bold text-sm">{props.cardinfo.title}</div>
           </div>
           <p className="mt-8 text-gray-400 text-thin text-sm">{props.cardinfo.description}</p>
           <button className="mt-8 text-gray-400 text-thin text-sm">Read More...</button>
        </div>
     );
}
 
export default HwoItWorksCard;