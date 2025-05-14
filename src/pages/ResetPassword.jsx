import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useContext(AuthContext); // You must add this function to your AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await resetPassword(email); // This should call Firebase or your backend
      toast.success("Reset link sent! Check your inbox.");
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-base-200 p-10 rounded-xl shadow-2xl max-w-md mx-auto my-10">
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
