import EstateCard from "./EstateCard";
import PropTypes from "prop-types";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Estates = ({ data }) => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div>
      <h1 className="text-center text-[#120A21] font-roboto font-extrabold text-4xl mt-20  " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1500">
        Discover The Latest Estates
      </h1>
      <p className="text-center max-w-[500px] mx-auto text-[#120A21]  opacity-80 mb-10 mt-2" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1500">Discover the latest in hospitality estates, offering unparalleled comfort unforgettable experiences in every corner of the globe.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((estate) => (
          <EstateCard estate={estate} key={estate.id}></EstateCard>
        ))}
      </div>
    </div>
  );
};
Estates.propTypes = {
  data: PropTypes.array,
};
export default Estates;
