import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthCredential, reload } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;

    try {
      await updateUserProfile(displayName, photoURL);
      await reload(AuthCredential.currentUser); // get latest info
      toast.success("Profile updated successfully!");
      setShow(false);
      // Optional redirect after update:
      // navigate("/dashboard"); 
    } catch (error) {
      console.error("Profile update failed:", error.message);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // GitHub info
  const githubProvider = user?.providerData?.find(
    (provider) => provider.providerId === "github.com"
  );
  const githubUsername = githubProvider?.uid;
  const githubURL = githubUsername ? `https://github.com/${githubUsername}` : null;
  const githubEmail = githubProvider?.email;

  return (
    <div className="max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-lg text-center my-5">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {user && (
        <div className="space-y-2">
          <img
            className="h-20 w-20 rounded-full mx-auto"
            src={user.photoURL || "https://i.ibb.co/2t2yKjW/default-avatar.png"}
            alt="Profile"
          />
          <div className="text-lg font-semibold">{user.displayName || "No Name Set"}</div>
          <div className="text-sm opacity-70">
            {user.email || githubEmail || "Email not available"}
          </div>

          {githubURL && (
            <div>
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                GitHub Profile
              </a>
            </div>
          )}
        </div>
      )}

      <div className="mt-6">
        <button onClick={() => setShow(!show)} className="btn btn-success">
          {show ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {show && (
        <form onSubmit={handleProfileUpdate} className="mt-6 space-y-4 text-left">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="displayName"
              className="input w-full"
              placeholder="Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              defaultValue={user?.photoURL}
              type="text"
              name="photoURL"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
          </fieldset>

          <button type="submit" className="btn btn-neutral w-full">
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
