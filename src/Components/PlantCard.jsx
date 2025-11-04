import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantName, price, rating, image, plantId } = plant;

  return (
    <div className="bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition ease-in-out">
      <img
        src={image}
        alt={plantName}
        className="w-full h-50 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-semibold text-[#1E392A] mb-2">{plantName}</h3>
      <p className="font-semibold text-[#1E392A] mb-2">
        Price : <span className="text-sm text-[#52796F]">${price}</span>
      </p>
      <p className="font-semibold text-[#1E392A] mb-2">
        Rating : <span className="text-sm text-[#F4B400]">⭐{rating}</span>
      </p>
      <Link to={`/plants/${plantId}`} className="btn bg-gradient-to-r from-green-700 to-emerald-500 text-white py-1 px-3 rounded-lg text-sm hover:bg-[#256428] transition">
        View Details
      </Link>
    </div>
  );
};

export default PlantCard;
