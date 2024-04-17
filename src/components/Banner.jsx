import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-2 z-0" data-aos="zoom-in"
    data-aos-anchor="#example-anchor"
    // data-aos-offset="500"
    data-aos-duration="1000">
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFA920",
          "--swiper-pagination-color": "#FFA920",
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/Qm6NmFX/daybreakwithray-p1i-G6i-WVo-WA-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r  from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              <div>
                <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
                  Choose your Hospitality Real Estates only with <br /> Sweet{" "}
                  <span className="text-orange-400">Stay</span>
                </h1>
                <p className="text-lg font-medium md:w-[750px] text-center text-white opacity-80 mt-2">
                  Indulge in sweet stays at our exquisite hospitality estates.
                  Experience comfort and unforgettable memories in every
                  destination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/4PJYPyF/2h-media-ACMElze1x00-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              <div>
                <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
                  Choose your Hospitality Real Estates only with <br /> Sweet{" "}
                  <span className="text-orange-400">Stay</span>
                </h1>
                <p className="text-lg font-medium md:w-[750px] text-center text-white opacity-80 mt-2">
                  Indulge in sweet stays at our exquisite hospitality estates.
                  Experience comfort and unforgettable memories in every
                  destination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/BPp8rR9/rabhimbh-bardhan-D9m-LSf-GOW7-Q-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              <div>
                <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
                  Choose your Hospitality Real Estates only with <br /> Sweet{" "}
                  <span className="text-orange-400">Stay</span>
                </h1>
                <p className="text-lg font-medium md:w-[750px] text-center text-white opacity-80 mt-2">
                  Indulge in sweet stays at our exquisite hospitality estates.
                  Experience comfort and unforgettable memories in every
                  destination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/dLr4nRr/aditya-chinchure-2-U-o-YXs-Oj9g-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              <div>
                <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
                  Choose your Hospitality Real Estates only with <br /> Sweet{" "}
                  <span className="text-orange-400">Stay</span>
                </h1>
                <p className="text-lg font-medium md:w-[750px] text-center text-white opacity-80 mt-2">
                  Indulge in sweet stays at our exquisite hospitality estates.
                  Experience comfort and unforgettable memories in every
                  destination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/gjGbNf7/william-recinos-DEs-Iimo9kv-E-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              <div>
                <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
                  Choose your Hospitality Real Estates only with <br /> Sweet{" "}
                  <span className="text-orange-400">Stay</span>
                </h1>
                <p className="text-lg font-medium md:w-[750px] text-center text-white opacity-80 mt-2">
                  Indulge in sweet stays at our exquisite hospitality estates.
                  Experience comfort and unforgettable memories in every
                  destination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
