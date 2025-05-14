import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="fontStyle bg-orange-300">
      <footer className="md:flex space-y-8 md:space-y-0 justify-between py-10 container mx-auto">
        {/* EventExplorer Info Section */}
        <nav className="flex flex-col items-center md:items-start md:w-1/4  md:-mt-3">
          <NavLink className="text-3xl italic font-bold text-green-700" to="/">
            EventeXplorer
          </NavLink>
          <p className="w-3/4 md:w-48 mt-4 md:mt-0 text-center md:text-left">
            Discover the best events around you, explore unique experiences, and stay updated with the latest happenings in your city.
          </p>
        </nav>

        {/* Browse Section */}
        <nav className="flex flex-col items-center md:items-start md:w-1/4 mt-8 md:mt-0">
          <h6 className="footer-title">Browse</h6>
          <ul className="flex md:flex-col gap-2">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-indigo-500 " : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
                to="/booked-events"
              >
                Booked Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Legal Section */}
        <nav className="flex flex-col items-center md:items-start md:w-1/4 mt-8 md:mt-0">
          <h6 className="footer-title">Legal</h6>
          <div className="space-x-2 md:flex-col">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          {/* Social Icons */}
          <p className="footer-title mt-3">Follow Us</p>
          <div className="flex justify-start text-xl gap-3 md:text-left mt-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </nav>

        {/* Newsletter Section */}
        <form className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 ">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-full">
            <label>Enter your email address</label>
            <div className="join flex flex-col sm:flex-row sm:space-x-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item mt-2 sm:mt-0 sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-center py-5">
        Copyright © {new Date().getFullYear()} – All rights reserved by
        EventeXplorer.bd
      </p>
    </div>
  );
};

export default Footer;
