
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-orange-300">
      <footer className="md:flex space-y-4 justify-between py-10 container mx-auto">
        <nav>
          <NavLink className="text-3xl italic font-bold text-green-700" to="/">EventExplorer</NavLink>
          <p className="w-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla, magni deleniti facere quibusdam optio exercitationem sequi placeat consequatur sit!
          </p>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Browse</h6>
          <ul>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/bookedevents">Booked Events</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-indigo-500" : ""
            } to="/profile">Profile</NavLink></li>
          </ul>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;