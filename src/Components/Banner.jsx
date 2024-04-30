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
                            src="https://images.unsplash.com/photo-1527383214149-cb7be04ae387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
                            alt="Burger"
                        />
                        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-5xl font-bold">Art and Craft</h1>
                            <p className="text-xl mt-2">Unleash your creativity!</p>
                        </div>
              <div className="text-5xl text-red-500  absolute -top-36 lg:-top-96 left-0 right-0 bottom-0 flex items-center justify-center">
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
                            src="https://plus.unsplash.com/premium_photo-1714060724660-152d1ce1abd9?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGFydCUyMGNyYWZ0fGVufDB8MHx8fDE3MTQ0MzQ1Nzd8MQ&ixlib=rb-4.0.3"
                            alt="Burger"
                        />
                        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-5xl font-bold">Express Yourself</h1>
                            <p className="text-xl mt-2">Discover the joy of creating!</p>
                        </div>
                <div className="text-5xl text-red-500  absolute -top-36 lg:-top-96 left-0 right-0 bottom-0 flex items-center justify-center">
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
                            src="https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fGFydCUyMGNyYWZ0fGVufDB8MHx8fDE3MTQ0MzQ1Nzd8MQ&ixlib=rb-4.0.3"
                            alt="Burger"
                        />
                        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-5xl font-bold">Craft Your Dreams</h1>
                            <p className="text-xl mt-2">Let your imagination soar!</p>
                        </div>
           <div className="text-5xl text-red-500  absolute -top-36 lg:-top-96 left-0 right-0 bottom-0 flex items-center justify-center">
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
