import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
  const { user, setUpdate, update } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState(true);
  const [photoInput, setPhotoInput] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photoUrl");
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        setUpdate(!update);
        e.target.reset();
        setNameInput(true);
        setPhotoInput(true);
      })
      .catch(() => {
        toast.error("Profile Update failed!!");
      });
  };
  const handleNameInput = () => {
    setNameInput(!nameInput);
  };
  const handlePhotoInput = () => {
    setPhotoInput(!photoInput);
  };
  return (
    <div className="hero min-h-screen font-poppins">
      <Helmet>
        <title>Update Profile of {user.displayName}</title>
      </Helmet>
      <div className="flex flex-col md:flex-col gap-4 justify-center items-center ">
        <div
          onSubmit={handleUpdate}
          className="card shrink-0 w-full  shadow-2xl bg-base-100 
          flex justify-center items-center md:flex-row mt-4 md:mt-0"
        >
          <div className="avatar md:m-8 md:mr-0">
            <div
              className=" h-64 md:w-96 md:h-96  ring ring-[#FFA920] ring-offset-base-100 ring-offset-2 rounded-2xl"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={user.photoURL} />
            </div>
          </div>
          <form
            className="card-body "
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <div className="flex justify-between items-center gap-1">
                <input
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="input input-bordered border-[#FFA920] w-full"
                  disabled={nameInput}
                  required
                />
                <div className="label">
                  <Link
                    onClick={handleNameInput}
                    className="btn bg-transparent border-[#FFA920] text-[#FFA920] hover:bg-[#FFA920] hover:text-white"
                  >
                    Edit
                    <MdEdit />
                  </Link>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                className="input input-bordered border-[#FFA920] "
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <div className="flex justify-between items-center gap-1">
                <input
                  type="text"
                  name="photoUrl"
                  placeholder={user.photoURL}
                  className="input input-bordered border-[#FFA920] w-full"
                  disabled={photoInput}
                  required
                />
                <div className="label">
                  <Link
                    onClick={handlePhotoInput}
                    className="btn bg-transparent border-[#FFA920] text-[#FFA920] hover:bg-[#FFA920] hover:text-white"
                  >
                    Edit
                    <MdEdit />
                  </Link>
                </div>
              </div>
            </div>

            <p>
              <span className="font-bold">Note : </span>
              <small className="text-black opacity-80">
                Please use <span className="text-[#FFA920]">Edit </span>
                button to update your{" "}
                <span className="text-[#FFA920]">Name and Photo URL</span> and
                hit <span className="text-[#FFA920]">Save Changes</span> to
                update your Profile
              </small>
            </p>
            <div className="form-control">
              <button className="btn bg-[#FFA920]  text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
