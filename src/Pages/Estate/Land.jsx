import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Land = ({land}) => {
    const {location,name,images,size,features,description,id} =land
    return (
        <div className="mx-auto p-3 ml-3 mr-3 md:card-body rounded-md shadow border dark:border-gray-900">
            <img className="rounded  lg:h-80 " src={images} alt="" />
            <div>
                <h1 className="text-2xl my-2">{name}</h1>
                <p className="">{description}</p>
                <div className='font-medium md:flex md:gap-3 text-lg my-1'>
                    <p className="">Area : {size.total_area}</p>
                    <p className=""> Dimensions : {size.dimensions}</p>
                </div>
                {/* <ul className="list-disc">
                    <li className="ml-7">{features[0]}</li>
                    <li className="ml-7">{features[1]}</li>
                    <li className="ml-7">{features[2]}</li>
                </ul> */}
                <div className="md:flex md:justify-between md:items-center">
                    <div className="my-2 md:text-xl md:font-semibold">
                        <p className="">Address : {location.address}</p>
                        <p className="">City : {location.city}</p>
                    </div>
                    <NavLink to={`/details/${id}`} className="md:h-9 h-8 py-1 flex items-center
                     bg-orange-400 text-black lg:font-semibold gap-2 px-3 rounded border">
                        <span className="hidden :flex">View</span>
                         Details <FaArrowRight className="text-stone-700" /></NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Land;