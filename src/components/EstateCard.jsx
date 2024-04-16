import tagImg from "../images/tag.png";
import { FaHome, FaRegMap } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GiPriceTag } from "react-icons/gi";
import { TbChartAreaLineFilled } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";

const EstateCard = ({ estate }) => {

  // console.log(estate.facilities);
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl border relative font-poppins">
        <figure className="px-4 pt-4 ">
          <img src={estate.image_url} alt="Shoes" className="rounded-xl h-[233px] w-full" />
        </figure>
        <div
          className="absolute  left-4 top-7 h-9 w-24 bg-no-repeat bg-cover flex justify-center items-center "
          style={{ backgroundImage: `url('${tagImg}')` }}
        >
          <h1 className="text-white font-roboto mt-1">For {estate.status}</h1>
        </div>
        <div className="card-body ">
          <h2 className="font-bold  text-xl ">{estate.estate_title}</h2>
          <p className="text-sm opacity-80 flex items-center gap-1">
            <FaRegMap />
            {estate.location}
          </p>
          <hr className="border border-orange-200" />
          <p className="text-base font-medium flex items-center gap-1">
          <GiPriceTag/> Price : <span className="text-orange-400">{estate.price}</span>
          </p>
          <p className="text-base font-medium flex items-center gap-1">
          <TbChartAreaLineFilled />Area : {estate.area}</p>
          <ul className="list-disc font-medium ">
            <p className="text-base font-medium flex items-center gap-1"><BiDonateHeart /> Facilities : </p>
            {estate.facilities.map((facility, idx) => (
              <li className="ml-8" key={idx}>
                {facility}
              </li>
            ))}
          </ul>
          <hr className="border border-orange-200" />
          <div className="card-actions items-center">
            <p className="font-semibold flex items-center gap-1">
              <FaHome></FaHome>
              {estate.segment_name}
            </p>
            <Link to={`/estatedetais/${estate.id}`} className="btn bg-transparent text-orange-400 border-orange-400 rounded-2xl hover:bg-orange-400 hover:text-white">
              Vew Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object,
};
export default EstateCard;
