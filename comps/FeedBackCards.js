
const FeebBackCard = () => {
    return ( 
        <div className="bg-white grid  md:grid-cols-12 grid-col-1 p-4 gap-4 md:w-8/12 rounded-lg ">
           <div className="md:col-start-1 md:col-end-6 "><img src='/assets/Capture.PNG' className="rounded-md" alt="" width="100%"></img> </div>
           <div className="md:col-start-6 md:col-span-7 pl-2">
               <p className="pt-8  text-gray-500 italic mb-5 text-sm md:text-lg"> Excelent communication and every task has clear instructions 
               wich client provided immediatelyafter accepting the job. Looking forward hearing from michael again in futur</p>
               <p className="font-bold">Shazid imtiaz Maruf</p>
               <p className="text-gray-500 italic"> UI/UX Designer</p>
           </div>
        </div>
     );
}
 
export default FeebBackCard;