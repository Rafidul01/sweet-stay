import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
  const { logIn, googleLogIn,githubLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(name,email,photo,password);
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(()=>{
      
    })
    .catch()
  };
  const handleGithubLogin = () => {
    githubLogin()
    .then(()=>{
      
    })
    .catch()
  };
  return (
    <div className="hero min-h-screen font-poppins ">
      <div className="flex flex-col md:flex-row-reverse   ">
        <div className="text-center lg:text-left w-full md:w-[1/2]  bg-[url('https://i.ibb.co/3zvbykC/bernard-hermant-CLKGGw-IBTa-Y-unsplash.jpg')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 ">
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
        <div className="card shrink-0 w-full md:w-1/2    shadow-2xl bg-base-100 rounded-r-none">
          <form onSubmit={handleLogin} className="card-body ">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FFA920] text-white">Login</button>
            </div>
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
                <button onClick={handleGithubLogin} className="btn bg-[#c97800] text-white">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
