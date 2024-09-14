import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const notify = ()=>toast("Login first");

    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }
    if(user){
        return children
    }
    
    return <>
        {notify()}
        <ToastContainer />
        <Navigate to='/login'></Navigate>
    </>
};

export default PrivateRoute;