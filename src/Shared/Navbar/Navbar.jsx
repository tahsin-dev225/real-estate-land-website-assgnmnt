import { Link, NavLink } from "react-router-dom";
import { GiIsland } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {logOut,user} =useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(console.log('logget out'))
        .catch(error =>console.error(error))
    }

    const links =<>
    <li><NavLink className='mr-2' to='/'>Home</NavLink></li>
    <li><NavLink className='mr-2' to='/help'> Help </NavLink></li>
    <li><NavLink className='mr-2' to='/about'>About</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn z-10 btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="font-bold m-0 text-xl flex gap-2 items-center"> <GiIsland></GiIsland><div className="gap-0"><h1 className="leading-none">Land</h1><p className="text-sm font-normal m-0 leading-none">Market</p></div> </a>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
               
            <div className="navbar-end gap-6">
                
                {/* <Link to='/register' className="btn">Register</Link> */}
                {user ? <>
                    <h2 className="hidden sm:flex">{user.displayName}</h2>
                    <button onClick={handleLogOut} className="btn ">Log Out</button>
                    <h1 className="flex  items-center border p-1 rounded px-2 border-gray-600">
                        <CgProfile></CgProfile>
                        +
                        <Link className="ml-2" to='/userUpdate'>User</Link>
                    </h1>
                </>:
                <Link to='/login' className="md:btn ">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;