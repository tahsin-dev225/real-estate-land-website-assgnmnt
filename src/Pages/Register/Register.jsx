import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {createUser,updating}= useContext(AuthContext)

    // const notify = () => toast(registerError);
    
    const handleRegister =e=>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        const name = form.get('name');
        console.log(email,password,photo,name)

        // setRegisterError('')
        if(password.length < 7){
            toast('pass should be more than 6 character')
            return ;
        }
        else if(!/[A-Z]/.test(password)){
            toast('pass should have at least one uppercase character')
            return;
        }
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.error(error));

    }

    return (
        <div className="">
            <Navbar></Navbar>
            <h2 className="text-5xl md:mt-10 font-semibold text-center">Register here</h2>
            <div className="hero  ">
                <div className="hero-content lg:w-5/12 flex-col lg:flex-row-reverse">
                <ToastContainer ></ToastContainer>
                    <div className=" bg-base-100 w-full  shrink-0 shadow-2xl ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" className="input input-bordered"  />
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center">All ready have Account <Link className="link  link-primary" to='/login'>Login</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;