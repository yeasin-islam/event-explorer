import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp, signInWithGoogle, signInWithGithub, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(form.email, form.password)
      .then((res) => {
        updateUserProfile(form.name);
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
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGithubSignup = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Signed up with GitHub!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="bg-base-200 p-10 rounded-xl">
      <div className="flex-col justify-center items-center">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Register</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" onChange={handleChange} className="input" placeholder="Name" required />
                <label className="label">Email</label>
                <input type="email" name="email" onChange={handleChange} className="input" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" onChange={handleChange} className="input" placeholder="Password" required />
                <button type="submit" className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>

            <span className="text-center mt-2">OR</span>
            <button onClick={handleGoogleSignup} className="btn mt-2"><FaGoogle /> Sign Up with Google</button>
            <button onClick={handleGithubSignup} className="btn mt-2"><FaGithub /> Sign Up with Github</button>

            <div className="text-center mt-4">
              Already registered? <Link className="underline" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
