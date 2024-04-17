import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import PropTypes from 'prop-types';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const AgentCard = ({agent}) => {
    const {name, address, email, image_url, phone} = agent;
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div className="card  bg-base-100 shadow-md font-roboto border border-orange-300 shadow-orange-300"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
          className="h-[300px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="opacity-80 text-sm  font-medium flex items-start gap-1"><IoLocationOutline className="font-medium text-lg "/>{address}</p>
        <hr className="border border-orange-300"/>
        <h2 className="text-lg font-medium flex items-center gap-1"><FaPhone /> Phone : <span className="opacity-80 text-sm">{phone}</span></h2>
        <h2 className="text-lg font-medium flex items-center gap-1"><MdOutlineMail />Email : <span className="opacity-80 text-sm">{email}</span></h2>
       
      </div>
    </div>
  );
};
AgentCard.propTypes = {
    agent: PropTypes.object,
}
export default AgentCard;
