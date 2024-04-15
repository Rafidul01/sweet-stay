import EstateCard from "./EstateCard";
import PropTypes from "prop-types";
const Estates = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-[#120A21] font-roboto font-extrabold text-4xl my-10 underline underline-offset-4 ">
        Discover The Latest Estates
      </h1>
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
