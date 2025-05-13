import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <NavLink className="text-xl" to="/">EventExplorer</NavLink>
      </div>

      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className={({ isActive }) =>
            isActive ? "text-indigo-500" : ""
          } to="/">Home</NavLink></li>
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
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="h-10 w-10 rounded-full"
                src={user.photoURL}
                alt="User"
              />
            </div>
            <button onClick={logOut} className="btn btn-error text-white">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className={({ isActive }) =>
                    isActive ? "bg-indigo-500 btn" : "btn"
                  }  to="/login">Login</NavLink>
            <NavLink className={({ isActive }) =>
                    isActive ? "bg-indigo-500 btn" : "btn"
                  }  to="/register">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
