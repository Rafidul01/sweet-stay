import tagImg from "../images/tag.png";
import { FaHome, FaRegMap } from "react-icons/fa";
import PropTypes from "prop-types";
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
          <hr className="border border-gray-200" />
          <p className="text-base font-medium">
            Price : <span className="text-orange-400">{estate.price}</span>
          </p>
          <p className="text-base font-medium">Area : {estate.area}</p>
          <ul className="list-disc font-medium ">
            <p className="text-base font-medium">Facilities : </p>
            {estate.facilities.map((facility, idx) => (
              <li className="ml-8" key={idx}>
                {facility}
              </li>
            ))}
          </ul>
          <hr className="border border-gray-200" />
          <div className="card-actions items-center">
            <p className="font-semibold flex items-center gap-1">
              <FaHome></FaHome>
              {estate.segment_name}
            </p>
            <button className="btn bg-orange-400 text-white rounded-2xl">
              Vew Property
            </button>
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
