import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    signUpWithGoogle()
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-200 p-10 rounded-xl">
      <div className="flex-col justify-center items-center">
        
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Register</h1>
          <div className="card-body">
            <form>
              <div>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="link text-left link-hover">Forgot password?</div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                </fieldset>
              </div>
            </form>
            <span className="text-center">OR</span>
            <button onClick={handleGoogleSignup} className="btn">
              <FaGoogle /> Sign Up with Google
            </button>
            <button className="btn">
              <FaGithub /> Sign Up with Github
            </button>
            <div className="text-center">
              Already registered? <Link className="underline" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
