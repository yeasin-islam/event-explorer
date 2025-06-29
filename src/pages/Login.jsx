import { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(form.email, form.password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from);
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from);
      })
      .catch(err => toast.error(err.message));
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Logged in with GitHub!");
        navigate(from);
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className=" fontStyle bg-base-200 p-10 rounded-xl shadow-2xl flex items-center justify-center min-h-screen">
      <Helmet>
        <title>
          Login | EventeXplorer
        </title>
      </Helmet>
      <div className="w-full max-w-sm">
        <div className="card bg-base-100 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Login</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <label className="label mt-2">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  className="input input-bordered w-full pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 cursor-pointer text-lg text-gray-500"
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="text-right mt-1">
                <Link to="/reset-password" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
            </form>

            <div className="divider">OR</div>

            <button onClick={handleGoogleLogin} className="btn w-full mb-2">
              <FaGoogle /> <span>Sign in with Google</span>
            </button>
            <button onClick={handleGithubLogin} className="btn w-full">
              <FaGithub /> <span>Sign in with GitHub</span>
            </button>

            <div className="text-center mt-4">
              Not registered?{" "}
              <Link className="underline text-blue-600" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
