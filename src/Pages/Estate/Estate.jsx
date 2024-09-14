import { useEffect, useState } from "react";
import Land from "./Land";


const Estate = () => {
    const [lands ,setLands] =useState([]);

    useEffect(()=>{
        fetch('land.json')
        .then(res =>res.json())
        .then(data =>setLands(data))
    },[])
    
    return (
        <div className='my-9'>
            <h1 className='text-5xl font-semibold text-center '>Our Lands</h1>
            <p className="text-center text-sm mx-auto w-7/12 my-3">Here is our lands which are searching. We have the best planing for your future house or dream project.Find for the best land or house and hane a look on the forest veyard also.</p>
            <div className="grid grid-cols-1 m-4 lg:grid-cols-2 md:gap-8 gap-4">
                {
                    lands.map(land =><Land key={land.id} land={land}></Land>)
                }
            </div>
       </div>
    ); 
};

export default Estate;