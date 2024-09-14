import { Swiper, SwiperSlide } from 'swiper/react';
import ranches from '../../assets/ranches-slider1.jfif'
import vineyard from '../../assets/vineyard-slider1.jfif'
import farms from '../../assets/farms-slider1.jfif'
// import forest from '../../assets/forest.slider1.jfif'
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    return (
        <div className='relative'>
          <div className="">
            
          </div>
          <div>
            <Swiper className='w-9/12 ' modules={[Navigation,Autoplay, Pagination,]} spaceBetween={50} slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>

              <SwiperSlide >
                <img className='w-full' src={ranches} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full' src={vineyard} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full' src={farms} alt="" />
              </SwiperSlide>

            </Swiper>
        </div>
    </div>
    );
};

export default Banner;