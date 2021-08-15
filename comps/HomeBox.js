const HomeBox = () => {
    return ( 
        <div className="p-4 relative bg-white md:w-5/6 lg:w-4/6  w-5/6 shadow-sm mt-12">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <div className="border-r-2 border-gray-100 pl-2" >
                  <p className="text-gray-400 ">Location</p>
                  <p className="mt-2">$1500, $1522</p>
              </div>
              <div className="border-r-2 border-gray-100 pl-2">
                  <p className="text-gray-400">Location</p>
                  <p className="mt-2">$1500, $1522</p>
              </div>
              <div className="pl-2" >
                  <p className="text-gray-400">Location</p>
                  <p className="mt-2">$1500, $1522</p>
              </div>
              <div ><button className=" px-8  bg-blue-500 text-thin  text-white shadow-md py-4 mx-auto block ">Get Started</button></div>
          </div>

          <div className="absolute -top-8 left-0 bg-blue-200 grid grid-cols-3 w-max p-2 gap-4 rounded-t-md text-white text-sm">
              <div className="text-blue-500 ">Rent</div>
              <div>Buy</div>
              <div>Sell</div>
          </div>
        </div>
     );
}
 
export default HomeBox;