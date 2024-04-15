import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Estates from "../../components/Estates";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <Estates data={data}/>
    </div>
  );
};

export default Home;
