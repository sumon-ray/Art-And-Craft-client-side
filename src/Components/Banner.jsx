import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import Swiper core and required modules
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/effect-fade";
const Banner = () => {
  return (
   

      <Swiper
      className="container mx-auto px-4 lg:px-24 z-0"
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, A11y, EffectFade]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay options
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Burger"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1664301287393-09c41f92258d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Burger"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Burger"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            alt="Burger"
          />
        </SwiperSlide>
     
      </Swiper>
  );
};

export default Banner;
