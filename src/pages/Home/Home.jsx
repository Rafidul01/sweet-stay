import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Estates from "../../components/Estates";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Sweet Stay | Home</title>
      </Helmet>
      <Banner />
      <Estates data={data}/>
    </div>
  );
};

export default Home;
