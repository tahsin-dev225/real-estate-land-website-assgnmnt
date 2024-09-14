import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {signIn} =useContext(AuthContext)

    const handleLogin =e=>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{console.error(error)})

    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl md:mt-10 font-semibold text-center">Login here</h2>
            <div className="hero  ">
                <div className="hero-content w-11/12 lg:w-5/12 flex-col lg:flex-row-reverse">
                    
                    <div className=" bg-base-100 w-full  shrink-0 shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="">
                            <div className="flex justify-center gap-5 mb-2">
                                <div className="p-2 px-3 w-28 text-center rounded-md bg-gray-600 link-primary">Google</div>
                                <div className="p-2 px-3 w-28 text-center rounded-md bg-gray-600 link-primary">Facebook</div>
                            </div>
                            <div className="flex justify-center gap-5">
                                <div className="p-2 px-3 w-28 text-center rounded-md bg-gray-600 link-primary">Twiter</div>
                                <div className="p-2 px-3 w-28 text-center rounded-md bg-gray-600 link-primary">Google</div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn  btn-primary">Login</button>
                        </div>
                        <p className="text-center">dont have Account <Link className="link  link-primary" to='/register'>Register</Link></p>
                    </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;