import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
  }
  const Links = (
    <>
      <li className="hover:text-[#FFA920]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#FFA920]">
        <NavLink to="/updateprofile">Update Profile</NavLink>
      </li>
      <li className="hover:text-[#FFA920]">
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-poppins"
          >
            {Links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl md:text-3xl font-lato text-black"
        >
          Sweet<span className="text-[#FFA920]">Stay</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black opacity-80 ">
          {Links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-8 mr-4 rounded-full ring ring-[#FFA920] ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="btn bg-[#FFA920] text-white font-poppins rounded-3xl"
            >
              LogOut
            </Link>
            
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#FFA920] text-white font-poppins rounded-3xl"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
