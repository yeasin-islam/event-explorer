import { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { signUp, signInWithGoogle, signInWithGithub, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", imageUrl: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(form.email, form.password)
      .then(() => {
        if (form.imageUrl) {
          updateUserProfile(form.name, form.imageUrl);
        } else {
          updateUserProfile(form.name);
        }
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGithubSignup = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Signed up with GitHub!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" fontStyle bg-base-200 p-10 rounded-xl flex items-center justify-center min-h-screen">
      <Helmet>
        <title>
          Regerter | EventeXplorer
        </title>
      </Helmet>
      <div className="w-full max-w-sm">
        <div className="card bg-base-100 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Register</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Name"
                required
              />

              <label className="label mt-2">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Email"
                required
              />

              <label className="label mt-2">Password</label>
              <div className="relative flex items-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  className="input input-bordered pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-8 cursor-pointer text-lg text-gray-500"
                  onClick={() => setPasswordVisible(prev => !prev)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <label className="label mt-2">Image URL (Optional)</label>
              <input
                type="url"
                name="imageUrl"
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Image URL"
              />

              <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
            </form>

            <div className="divider">OR</div>

            <button onClick={handleGoogleSignup} className="btn w-full mb-2">
              <FaGoogle /> <span>Sign Up with Google</span>
            </button>
            <button onClick={handleGithubSignup} className="btn w-full">
              <FaGithub /> <span>Sign Up with GitHub</span>
            </button>

            <div className="text-center mt-4">
              Already registered?{" "}
              <Link className="underline text-blue-600" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
