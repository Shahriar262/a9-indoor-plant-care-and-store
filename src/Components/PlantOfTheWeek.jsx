import React from "react";
import usePlants from "../hooks/usePlants";
import { getWeekNumber } from "../utils/getWeekNumber";

const PlantOfTheWeek = () => {
  const { plants, loading } = usePlants();

  if (loading || plants.length === 0) {
    return null;
  }

  const weekNumber = getWeekNumber();
  const plantInd = weekNumber % plants.length;
  const plant = plants[plantInd];

  const { plantName, image, description, careLevel, price, rating } = plant;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 md:w-[35%] mt-10">
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img
          src={image}
          alt={plantName}
          className="w-full h-50 object-cover rounded-lg mb-3"
        />
        <h3 className="text-xl font-semibold text-[#1E392A] mb-2">
          {plantName}
        </h3>
        <p className="font-bold text-[#1E392A] text-left mb-2">
          Description :{" "}
          <span className="text-sm font-medium">{description}</span>
        </p>
        <p className="font-bold text-[#1E392A] mb-2">
          Price : <span className="text-sm font-medium">${price}</span>
        </p>
        <p className="font-bold text-[#1E392A] mb-2">
          Care level : <span className="text-sm font-medium">{careLevel}</span>
        </p>
        <p className="font-bold text-[#1E392A] mb-2">
          Rating : <span className="text-sm text-[#F4B400]">⭐{rating}</span>
        </p>
        <button className="btn bg-gradient-to-r from-green-700 to-emerald-500 text-white py-1 px-3 rounded-lg text-sm hover:bg-[#256428] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
