import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mt-2">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/wJG1Fwh/bilderboken-rlw-E8f8an-Oc-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
              <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">
                Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/Cz6vtnY/wayne-hollman-thmp-DRiej-D4-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/mqjNy4K/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/zfb4KzV/roberto-nickson-dc0leu1-QSFA-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/Nt0twk7/zero-take-Wv-Hrr-R1-C5-Po-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/L6pHKLf/dallas-reedy-LH1-H30-YWak-E-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/2y53h24/alka-jha-t-T86hu-Qh-F24-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/rGk7XTs/cara-fuller-Be-HRk-ALw-XIw-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/kqjNCt9/allphoto-bangkok-c-G7-oka4rpk-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-black p-4  rounded-2xl">
                <h1 className="text-5xl text-white font-extrabold w-[750px] text-center text-opacity-100 font-roboto">Choose your Hotel, Resorts, Longe and many more with <br /> Sweet <span className="text-orange-400">Stay</span></h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
