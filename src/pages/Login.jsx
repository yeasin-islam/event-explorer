import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

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
    <div className="bg-base-200 p-10 rounded-xl shadow-2xl">
      <div className="flex-col justify-center items-center">
        <div className="text-center my-5">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" onChange={handleChange} className="input" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" onChange={handleChange} className="input" placeholder="Password" required />
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            <span className="text-center">OR</span>
            <button onClick={handleGoogleLogin} className="btn mt-2"><FaGoogle /> Sign in with Google</button>
            <button onClick={handleGithubLogin} className="btn mt-2"><FaGithub /> Sign in with Github</button>

            <div className="text-center mt-4">
              Not registered? <Link className="underline" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
