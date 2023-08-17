import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderItems } from '../../data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

  return (
    <>
    
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%] h-[65vh] ml-auto mr-auto"
      > 
       <div >

        {sliderItems.map((item)=>(
            <>
             <SwiperSlide key={item.id} ><img className='block w-[100%] h-[110%]' src = {item.img}></img></SwiperSlide>
            </>
            ))
        }
       
        </div> 
      </Swiper>
      
    </>
  );
}

export default Slider;




