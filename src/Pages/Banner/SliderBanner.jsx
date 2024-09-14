
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../stylee/stylee.css'

import ranches from '../../assets/rancher.jpg'
import vineyard from '../../assets/vineyard.jpg'
import farms from '../../assets/agricultural.jpg'
import forest from '../../assets/forest.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SliderBanner = () => {

    const bannerInfo =<>
        <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Land Market</h1>
                <p className="mb-5 text-sm md:text-base">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
    </>

    return (
        <Swiper spaceBetween={30} centeredSlides={true}
          autoplay={{delay:2500,disableOnInteraction:false,}}
          pagination={{ clickable: true, }}
          navigation={true} modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[95%] rounded-md my-6 h-72 md:h-[500px]">
            <SwiperSlide className=' ' >
                <div className="hero bgfirst h-full w-full bg-cover" >
                    {bannerInfo}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero bg-cover w-full h-full bgsecond " >
                    {bannerInfo}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero bgthird bg-cover w-full h-full">
                    {bannerInfo}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero bgfour h-full w-full bg-cover">
                    {bannerInfo}
                </div>
            </SwiperSlide>
            
      </Swiper>
    );
};

export default SliderBanner;