import React, { useState } from "react";
import { useParams } from "react-router";
import usePlants from "../hooks/usePlants";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { plantId } = useParams();
  const { plants, loading } = usePlants();

  const plant = plants.find((p) => p.plantId == Number(plantId));

  const { image, plantName, description, rating, price, availableStock } =
    plant || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill the required field");
    }

    toast.success("Consultation booked successfully");
    setFormData({ name: "", email: "" });
  };

  return (
    <>
      <Navbar />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-10 mt-20">
          <div className="card bg-[#FFFFFF] min-h-[410px] md:w-[70%] mx-auto p-[15px] rounded-[4px] shadow-sm hover:scale-105 transition ease-in-out">
            <img src={image} className=" w-full h-90 rounded" alt="" />

            <h2 className="mt-4 font-bold text-2xl">{plantName}</h2>
            <p className="mt-4 font-bold">
              Description : <span className="font-normal">{description}</span>
            </p>
            <p className="font-semibold mt-2">
              Price : <span className="font-normal">${price}</span>
            </p>
            <p className="font-semibold mt-2">
              Rating : <span className="font-normal">⭐{rating}</span>
            </p>
            <p className="font-semibold mt-2">
              Stock : <span className="font-normal">{availableStock}</span>
            </p>
          </div>

          <div className=" backdrop-blur-lg bg-white/20 h-[350px] border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-[20px] font-semibold mb-3 text-center">
                Book Consultation
              </h2>

              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button type="submit" className="my-btn">
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PlantDetails;
