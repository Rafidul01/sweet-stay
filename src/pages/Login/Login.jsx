import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';
import Aos from "aos";
import 'aos/dist/aos.css'
const Login = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const { logIn, googleLogIn, githubLogin } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
        toast.success("Login Successful!")
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
        toast.error("login failed..")
      });
    // console.log(name,email,photo,password);
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : '/');
      })
      .catch(()=>{
        toast.error("login failed..")

      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : '/');
      })
      .catch(()=>{
        toast.error("login failed..")
      });
  };
  const handelSeePass = () =>{
    setEye(!eye);
  }
  return (
    <div className="hero min-h-screen font-poppins ">
      <div className="flex flex-col md:flex-row-reverse border-2 md:rounded-2xl border-orange-300  ">
        <div className="text-center lg:text-left w-full md:w-[1/2]  bg-[url('https://i.ibb.co/3zvbykC/bernard-hermant-CLKGGw-IBTa-Y-unsplash.jpg')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 " data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
            <div className="py-6  text-black opacity-80  space-y-4">
              <p>
                Your journey to exceptional real estate experiences starts here!
              </p>
              <p>
                Please login to unlock exclusive access to premium listings,
                expert insights, and unparalleled hospitality solutions.
              </p>
              <p>
                Your journey to exceptional real estate experiences starts here!
              </p>
              <p>Team Sweet Stay!</p>
            </div>
          </div>
        </div>
        <div className="card shrink-0 w-full md:w-1/2 bg-base-100 rounded-l-none rounded-r-none rounded-2xl md:rounded-l-2xl" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
          <div className="card-body">
            <form onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <Link onClick={handelSeePass} className="text-2xl absolute right-3 top-[48px]">{eye ? <FaRegEye />:<FaRegEyeSlash />}</Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FFA920] text-white">Login</button>
              </div>
            </form>
            <div>
              <div>
                
                <div className="mt-6 text-center ">
                  <div className="mb-4 flex gap-3 justify-center items-center">
                    <hr className=" w-14 md:w-20 lg:w-40" />
                    <h1 className="font-bold">Login With</h1>
                    <hr className=" w-14 md:w-20 lg:w-40" />
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={handleGoogleLogIn}
                      className="btn bg-[#c97800] text-white"
                    >
                      <FaGoogle />
                      Google
                    </button>
                    <button
                      onClick={handleGithubLogin}
                      className="btn bg-[#c97800] text-white"
                    >
                      <FaGithub></FaGithub> Github
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-center font-roboto text-lg">
                  New to Sweet Stay? Please{" "}
                  <Link
                    to="/register"
                    className="font-bold text-[#FFA920] hover:text-[#c97800]"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
