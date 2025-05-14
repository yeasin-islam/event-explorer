import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, updateUserProflie } = use(AuthContext);
  const [show, setShow] = useState(false)

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    const displayName = e.target.displayName.value
    const photoURL = e.target.photoURL.value

    updateUserProflie(displayName, photoURL)

  }


  return (
    <>
      <Helmet>
        <title>
          Profile | EventExplorer
        </title>
      </Helmet>
      <div className="text-center p-10">
        {user && (
          <div>
            <img className="h-10 w-10 mx-auto" src={user.photoURL} />
            <div className="">{user.displayName}</div>
            <div className="">{user.email}</div>
          </div>
        )}


        <div className="mt-10">
          <button onClick={() => setShow(!show)} className="btn btn-success">Edit</button>
        </div>

        {show && <div className="flex justify-center mt-10 ">
          <form onSubmit={handleProfileUpdate} className="">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                defaultValue={user.displayName}
                type="text"
                name="displayName"
                className="input"
                placeholder="Name"
                required
              />

              <label className="label">PhotoURL</label>
              <input
                defaultValue={user.photoURL}
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
                required
              />
            </fieldset>

            <button className="btn" type="submit">
              Update
            </button>
          </form>
        </div>}
      </div>
    </>
  );
};

export default Profile;
