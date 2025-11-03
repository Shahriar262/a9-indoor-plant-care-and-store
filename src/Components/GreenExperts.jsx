import React from "react";
import jenniferBrownImg from "../assets/jennifer-brown.jpg";
import richardImg from "../assets/richard-wilford.jpeg";
import tomHartImg from "../assets/tom-hart-dyke.jpg";

const GreenExperts = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#DDE8E1] pt-6 pb-12 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* expert 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="flex justify-center items-center">
            <img
              src={jenniferBrownImg}
              className="w-15 h-15 rounded-full"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold my-2">Jennifer Brown</h3>
          <p className="text-sm text-[#52796F]">
            “Succulents & botanical herbs specialist”
          </p>
        </div>

        {/* expert 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="flex justify-center items-center">
            <img src={richardImg} className="w-15 h-15 rounded-full" alt="" />
          </div>
          <h3 className="text-xl font-semibold my-2">Richard Wilford</h3>
          <p className="text-sm text-[#52796F]">
            “Indoor & alpine plant care specialist”
          </p>
        </div>

        {/* expert 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="flex justify-center items-center">
            <img src={tomHartImg} className="w-15 h-15 rounded-full" alt="" />
          </div>
          <h3 className="text-xl font-semibold my-2">Tom Hart Dyke</h3>
          <p className="text-sm text-[#52796F]">
            “Rare plant & indoor jungle adviser”
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenExperts;
