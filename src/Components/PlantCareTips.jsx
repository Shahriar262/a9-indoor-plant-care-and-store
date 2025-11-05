import React from "react";

const PlantCareTips = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#DDE8E1] py-12 px-4 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-5 text-[#1E392A] mb-10">
        Plant Care Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Watering */}
        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition transform hover:scale-105 duration-300">
          <div className="text-4xl mb-4">💧</div>
          <h3 className="text-xl font-semibold mb-2">Watering</h3>
          <p className="text-sm">
            Let the soil dry slightly between waterings. Avoid over-watering.
          </p>
        </div>

        {/* Sunlight */}
        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition transform hover:scale-105 duration-300">
          <div className="text-4xl mb-4">☀️</div>
          <h3 className="text-xl font-semibold mb-2">Sunlight</h3>
          <p className="text-sm">
            Most indoor plants prefer bright indirect light. Adjust per plant
            type.
          </p>
        </div>

        {/* Fertilizing */}
        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition transform hover:scale-105 duration-300">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold mb-2">Fertilizing</h3>
          <p className="text-sm">
            Use balanced fertilizer every 4-6 weeks during the growing season.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantCareTips;
