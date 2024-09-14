import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserUpdate = () => {
    const [updateUser,setUpdateUser] = useState(null)

    const {updating,updatePro} =useContext(AuthContext)

     const handleUpdate =(e)=>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');

        updating(name,photo)
        // .then(()=>{
        //     console.log(name,photo)
        //     setUpdateUser(name,photo)
        // })
        // .catch(errror =>{console.log(errror)})
     }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl md:mt-10 font-semibold text-center">User Update</h2>
            <div className="hero  ">
                <div className="hero-content w-11/12 lg:w-5/12 flex-col lg:flex-row-reverse">
                    
                    <div className=" bg-base-100 w-full  shrink-0 shadow-2xl ">
                    <form onSubmit={handleUpdate} className="card-body">
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn  btn-primary">Update</button>
                        </div>
                        {
                            updateUser && <h1>{updateUser.displayName}</h1>
                        }
                    </form>
                    </div>
                </div>
                <h1 className="text-6xl font-bold">{updatePro}</h1>
                
            </div>
        </div>
    );
};

export default UserUpdate;