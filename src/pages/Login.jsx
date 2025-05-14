
import { use } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInWithGoogle } = use(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result)
        navigate(location.state || '/')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <>
      <Helmet>
        <title>
          Login | EventExplorer
        </title>
      </Helmet>
      <div className="bg-base-200 p-10 rounded-xl">
        <div className="flex-col justify-center items-center ">

          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl font-bold text-center mt-5">Login</h1>
            <div className="card-body">

              <form

              >
                <div >
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

                        name="password"
                        className="input"
                        placeholder="Password"
                        required
                      />
                      {/* {!show && <span onClick={()=>setShow((prev) => !prev)} className="absolute right-7 z-50 cursor-pointer bottom-3"><FaEye size={18}/></span>}
              {show && <span onClick={()=>setShow((prev) => !prev)} className="absolute right-7 z-50 cursor-pointer bottom-3"><FaEyeSlash size={18}/></span>} */}
                    </div>
                    <div>
                      <div className="link text-left link-hover">
                        Forgot password?
                      </div>
                    </div>
                    <button type="submit" className="btn btn-neutral mt-4">
                      Login
                    </button>

                  </fieldset>


                </div>
              </form>

              <span className="text-center">OR</span>

              <button onClick={handleGoogleLogin} className="btn"><FaGoogle /> Sign in with Google</button>
              <button className="btn"><FaGithub /> Sign in with Github</button>


              <div className="text-center">
                Not registered?{" "}
                <Link className="underline" to={"/register"}>
                  Register
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;