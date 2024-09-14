import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;