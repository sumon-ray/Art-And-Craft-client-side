import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Banner = () => {
  const handleType = (count) => {
    // console.log(count); // access word count number
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  return (
    <div className="relative">
      <div className="">
      
        <Swiper
          className="container mx-auto px-4 lg:px-24 z-0"
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, A11y, EffectFade]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Burger"
              />
              <div className="text-5xl text-red-500  absolute -top-96 left-0 right-0 bottom-0 flex items-center justify-center">
                <Typewriter
                  words={["let's Explore", "Your", "Art and Craft", "Skils!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                  onLoopDone={handleDone}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://plus.unsplash.com/premium_photo-1664301287393-09c41f92258d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Burger"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                  onLoopDone={handleDone}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="Burger"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                  onLoopDone={handleDone}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                alt="Burger"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                  onLoopDone={handleDone}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
