import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import SliderBanner from "../Banner/SliderBanner";
import Estate from "../Estate/Estate";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <SliderBanner></SliderBanner>
            <Estate></Estate>
        </div>
    );
};

export default Home;