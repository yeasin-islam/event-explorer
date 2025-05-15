import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="fontStyle bg-gray-300">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <NavLink className="text-3xl italic font-bold text-green-700" to="/">EventeXplorer</NavLink>
        </div>

        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/booked-events">Booked Events</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/profile">Profile</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end flex justify-between gap-2">
                <label tabIndex={0} className="tooltip tooltip-left btn btn-ghost btn-circle avatar" data-tip={user.displayName}>
                  <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                    <img src={user.photoURL || <FaUserCircle className="text-4xl text-gray-600" />} alt="User" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="font-semibold">{user.displayName || "No Name"}</li>
                  <li className="text-xs opacity-70">{user.email || "No Email"}</li>

                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/">Home</NavLink></li>
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/booked-events">Booked Events</NavLink></li>
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/about">About</NavLink></li>
                  {/* <li className=" md:hidden">
                    <NavLink to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li> */}
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/profile">Profile</NavLink></li>
                  <li className=" md:hidden">
                    <button onClick={logOut} className="text-red-500">
                      Logout
                    </button>
                  </li>
                </ul>

              </div>
              <button onClick={logOut} className="text-red-500 btn hidden md:flex">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login/Register for all screens */}
              <div className="space-x-2 hidden md:flex">
                <NavLink className={({ isActive }) => isActive ? "bg-indigo-500 btn" : "btn"} to="/login">Login</NavLink>
                <NavLink className={({ isActive }) => isActive ? "bg-indigo-500 btn" : "btn"} to="/register">Register</NavLink>
              </div>

              {/* Dropdown only on mobile (visible if logged out) */}
              <div className="md:hidden dropdown dropdown-end flex justify-between gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >

                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/">Home</NavLink></li>
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/booked-events">Booked Events</NavLink></li>
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/about">About</NavLink></li>
                  {/* <li className=" md:hidden">
                    <NavLink to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li> */}
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "text-indigo-500" : ""
                  } to="/profile">Profile</NavLink></li>
                  <li className=" md:hidden"><NavLink className={({ isActive }) =>
                    isActive ? "bg-indigo-500 btn" : "btn"
                  } to="/login">Login</NavLink></li>
                  <li className=" md:hidden mt-2"><NavLink className={({ isActive }) =>
                    isActive ? "bg-indigo-500 btn" : "btn"
                  } to="/register">Register</NavLink></li>
                </ul>

              </div>

            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
