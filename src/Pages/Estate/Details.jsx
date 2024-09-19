import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
    const idm =useParams()
    const landDetails = useLoaderData()
    const details =landDetails.find(land => land.id === idm.id)
    const {location,name,images,size,features,description,id}=details
    console.log(idm,typeof(idm))
    console.log(details)
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-semibold text-center my-5">Land Details</h1>
            <div className="text-center md:w-6/12 mx-auto mb-5">Take a look on this land . You may have know the the value of this land. Buy your dream land from land market.</div>
            <div className="lg:flex my-8 mx-auto w-[95%] gap-6 items-center dark:bg-[#222630fa] p-3 rounded-md shadow ">
                <div className="p-5 ">
                    <img className="rounded-md  " src={images} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold my-2">{name}</h1>
                    <p className="">{description}</p>
                    <h1 className="text-2xl font-">Benifit of this land</h1>
                    <ul className="list-disc ">
                        <li className="ml-7">{features[0]}</li>
                        <li className="ml-7">{features[1]}</li>
                        <li className="ml-7">{features[2]}</li>
                    </ul>
                    <div className='font-medium flex md:gap-5 text-lg my-2'>
                        <p className="">Area : <span className="text-red-400">{size.total_area}</span></p>|
                        <p className=""> Dimensions : <span className="text-red-400">{size.dimensions}</span></p>
                    </div>
                    <div className="my-2 md:text-xl md:flex items-center gap-1 md:font-semibold">
                        <p className="flex justify-center border border-gray-700 p-1 rounded flex-grow items-center gap-2"><FaLocationDot className="text-red-600" />Address : {location.address}</p>
                        <p className="flex justify-center border border-gray-700 p-1 rounded flex-grow items-center gap-2"><FaLocationDot className="text-red-600" />City : {location.city}</p>
                    </div>
                    <div className="flex md:justify-center my-6">
                        <button className="btn btn-primary w-[80%] mx-auto md:px-10 ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;