import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet-async";
const Register = () => {
    useEffect(()=>{
      Aos.init();
    },[])
    const { createUser, setUpdate, update} = useContext(AuthContext);
    const [eye, setEye] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photoUrl');
        const password = form.get('password');

        if(password.length < 6){
          toast.error("Password must be at least 6 characters !")
          return;
        }
        else if(!/[A-Z]/.test(password)){
          toast.error("Password must have an Uppercase letter!")
          return;
        }
        else if(!/[a-z]/.test(password)){
          toast.error("Password must have a Lowercase letter!")
          return;
        }

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            updateProfile(result.user,{
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
              setUpdate(!update);
            })
            .catch()
            e.target.reset();
            navigate(location?.state ? location.state : '/');
            toast.success("Registered Successful!");
        })
        .catch(error => {
            console.error(error);
            toast.error("Sign Up Failed!");
        })
        // console.log(name,email,photo,password);
    }
    const handelSeePass = () =>{
      setEye(!eye);
    }
    return (
        <div className="hero min-h-screen font-poppins ">
          <Helmet>
        <title>Register - Sweet Stay</title>
      </Helmet>
      <div className="flex flex-col md:flex-row-reverse  border-2 md:rounded-2xl border-orange-300 ">
        <div className="text-center lg:text-left w-full md:w-[1/2]  bg-[url('https://i.ibb.co/3zvbykC/bernard-hermant-CLKGGw-IBTa-Y-unsplash.jpg')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 "         data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Register now!</h1>
            <div className="py-6  text-black opacity-80  space-y-4">
              <p>Your journey to exceptional real estate experiences starts here!</p><p>Please login to unlock exclusive access to
              premium listings, expert insights, and unparalleled hospitality
              solutions.</p> 
               <p>Your journey to exceptional real estate experiences starts here!</p>
              <p>Team Sweet Stay!</p>
            </div>
          </div>
        </div>
        <div onSubmit={handleRegister} className="card shrink-0 w-full md:w-1/2    bg-base-100 rounded-l-none rounded-r-none rounded-2xl md:rounded-l-2xl" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
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
            <p><span className="font-bold">Note : </span><small className="text-black opacity-80">Your password must be at least <span className="text-[#FFA920]">6 characters</span> and includes <span className="text-[#FFA920]">an Uppercase and a Lowercase</span> character.</small></p>
            <div className="form-control mt-6">
              <button className="btn bg-[#FFA920]  text-white">Register</button>
            </div>
            
            <p className="text-center font-roboto text-lg">Already Registered to Sweet Stay? Please <Link to='/login' className="font-bold text-[#FFA920] hover:text-[#c97800]">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;