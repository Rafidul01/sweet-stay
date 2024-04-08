// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    // const {} = useContext(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photoUrl');
        const password = form.get('password');
        console.log(name,email,photo,password);
    }
    return (
        <div className="hero min-h-screen font-poppins ">
      <div className="flex flex-col md:flex-row-reverse   ">
        <div className="text-center lg:text-left w-full md:w-[1/2]  bg-[url('https://i.ibb.co/3zvbykC/bernard-hermant-CLKGGw-IBTa-Y-unsplash.jpg')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center p-4 ">
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
        <div onSubmit={handleRegister} className="card shrink-0 w-full md:w-1/2    shadow-2xl bg-base-100 rounded-r-none">
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
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
              <button className="btn bg-[#FFA920] text-white">Register</button>
            </div>
            
            <p className="mt-4 text-center font-roboto text-lg">Already Registered to Sweet Stay? Please <Link to='/login' className="font-bold text-[#FFA920]">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;