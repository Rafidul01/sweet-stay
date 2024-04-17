import { useLoaderData, useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaRegMap } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EstateDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const estate = data.find((estate) => estate.id === +id);
  const {
    estate_title,
    image_url,
    latitude,
    longitude,
    price,
    area,
    segment_name,
    status,
    description,
  } = estate;
  useEffect(() => {
    Aos.init();
  }, []);

  console.log(estate);
  return (
    <div>
      <div
        className="w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  rounded-2xl bg-no-repeat flex justify-center items-center "
        style={{ backgroundImage: `url('${image_url}')` }}
        data-aos="zoom-in"
        data-aos-anchor="#example-anchor"
        // data-aos-offset="500"
        data-aos-duration="1000"
      ></div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between py-4 border rounded-2xl md:pr-4 mt-8 shadow-lg">
        <div className="p-4 w-full" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
     data-aos-duration="1500" >
          <div className="card-body  py-0" >
            <h2 className="font-bold  text-xl text-center" >{estate_title}</h2>
            <p className="text-sm opacity-80 flex items-center gap-1 justify-center">
              <FaRegMap />
              {estate.location}
            </p>
            <hr className="border border-orange-300" />
            <p className="font-semibold">
              Segment Name :{" "}
              <span className="font-normal opacity-80">{segment_name}</span>
            </p>
            <p className="text-base font-medium ">
              {" "}
              Description :{" "}
              <span className="font-normal opacity-80">{description}</span>
            </p>
            <p className="text-base font-medium">
              Status : <span className="font-normal opacity-80">{status}</span>
            </p>
            <p className="text-base font-medium flex items-center gap-1">
              Price : <span className="text-orange-400">{price}</span>
            </p>
            <p className="text-base font-medium">
              Area : <span className="font-normal opacity-80"> {area}</span>
            </p>
            <ul className="list-disc font-medium ">
              <p className="text-base font-medium">Facilities : </p>
              {estate.facilities.map((facility, idx) => (
                <li className="ml-8 font-normal opacity-80" key={idx}>
                  {facility}
                </li>
              ))}
            </ul>
            <hr className="border border-orange-300" />
            <div className="card-actions items-center"></div>
          </div>
        </div>
        <div
          className="rounded-2xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            scrollWheelZoom={true}
            className="w-[315px] md:w-[400px] lg:w-[600px] h-[315px] md:h-full rounded-2xl border-2 border-orange-400"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>{estate_title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
