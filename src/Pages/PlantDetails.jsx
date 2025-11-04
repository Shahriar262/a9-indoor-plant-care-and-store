import React from "react";
import { useParams } from "react-router";
import usePlants from "../hooks/usePlants";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

const PlantDetails = () => {
  const { plantId } = useParams();
  const { plants, loading } = usePlants();

  const plant = plants.find((p) => p.plantId == Number(plantId));

  const { image, plantName, description, rating, price, availableStock } =
    plant || {};

  return (
    <>
      <Navbar />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-10 mt-20">
          <div className="card bg-[#FFFFFF] h-[620px]  w-10/11 mx-auto p-[10px] rounded-[4px] shadow-sm hover:scale-105 transition ease-in-out">
            <img src={image} className=" w-full h-90 rounded" alt="" />

            <h2 className="mt-4 font-bold text-2xl">{plantName}</h2>
            <p className="mt-4 font-bold">
              Description : <span className="font-normal">{description}</span>
            </p>
            <p className="font-semibold mt-2">
              Price : <span className="font-normal">{price}</span>
            </p>
            <p className="font-semibold mt-2">
              Rating : <span className="font-normal">⭐{rating}</span>
            </p>
            <p className="font-semibold mt-2">
              Stock : <span className="font-normal">{availableStock}</span>
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PlantDetails;
