import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner data={data} />
    </div>
  );
};

export default Home;
