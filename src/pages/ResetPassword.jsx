import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await resetPassword(email);
      toast.success("Reset link sent! Check your inbox.");

      // Optional: open Gmail in a new tab
      window.open("https://mail.google.com", "_blank");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fontStyle bg-base-200 p-10 rounded-xl shadow-2xl max-w-md mx-auto my-10">
      <Helmet>
        <title>
          Reset Password | EventeXplorer
        </title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-neutral w-full mt-4">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
