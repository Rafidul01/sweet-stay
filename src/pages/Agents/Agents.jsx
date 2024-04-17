import { useLoaderData } from "react-router-dom";
import AgentCard from "../../components/AgentCard";
import { Helmet } from "react-helmet-async";

const Agents = () => {
  const agentData = useLoaderData();
  console.log(agentData);
  return (
    <div>
        <Helmet>
            <title>Estate Agents</title>
        </Helmet>
      <h1
        className="text-center text-[#120A21] font-roboto font-extrabold text-4xl mt-10  "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        Agents List
      </h1>
      <p
        className="text-center max-w-[500px] mx-auto text-[#120A21]  opacity-80 mb-10 mt-2"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
       Discover our expert agents, ready to guide you through buying, selling, or renting properties with dedication and experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agentData.map((agent) => (
          <AgentCard key={agent.id} agent={agent}></AgentCard>
        ))}
      </div>
    </div>
  );
};

export default Agents;
