import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";
import usePlants from "../hooks/usePlants";

const MyProfile = () => {
  const { user, updateProfileFunc } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);
  const { loading } = usePlants();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!name && !photo) {
      toast.error("Please provide Name or Photo URL to update");
      return;
    }

    setUpdating(true);
    updateProfileFunc(name, photo)
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setUpdating(false));
  };

  if (loading) {
    return <LoadingSpinner />;
  }


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[95%] md:w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Profile</h2>

        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <p className="font-semibold">{user?.displayName || "No Name"}</p>
          <p className="text-gray-700">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <input
            type="text"
            placeholder="Update Name"
            defaultValue={user?.displayName}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            placeholder="Update Photo URL"
            defaultValue={user?.photoURL}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className={`my-btn w-full ${
              updating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
