import React from "react";
import greenShelfImg from '../assets/green-corner-shelf.jpg'
import hangingPlantImg from '../assets/hanging-plant.jpg'
import tableTopGardenImg from '../assets/tabletop-garden.webp'

const EcoDecor = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 md:px-0 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">Eco Decor Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:scale-105 duration-300">
          <img
            src={greenShelfImg}
            alt="Green Corner Shelf"
            className="h-56 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Green Corner Shelf
            </h3>
            <p className="text-gray-700 text-sm">
              Use tiered shelves with small pots to create a cozy green reading
              nook.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:scale-105 duration-300">
          <img
            src={hangingPlantImg}
            alt="Hanging Plant Beauty"
            className="h-56 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Hanging Plant Beauty
            </h3>
            <p className="text-gray-700 text-sm">
              Add hanging plants near windows for natural light and fresh air
              vibes.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:scale-105 duration-300">
          <img
            src={tableTopGardenImg}
            alt="Tabletop Garden"
            className="h-56 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold  mb-2">
              Tabletop Garden
            </h3>
            <p className="text-gray-700 text-sm">
              Mix succulents and air plants on your work desk for a calm
              workspace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoDecor;
