import React from "react";
import HeroFramer from "../Components/HeroFramer";
import usePlants from "../hooks/usePlants";
import { Link } from "react-router";
import PlantCard from "../Components/PlantCard";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";
import LoadingSpinner from "../Components/LoadingSpinner";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";

const HomePage = () => {
  const { plants, loading } = usePlants();

  const topRatedPlants = plants.slice(0, 6);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Framer motion */}
          <HeroFramer />

          {/* top rated plants section */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#001931] text-center mt-20 mb-4">
            Top Rated Indoor Plants
          </h1>
          <div className="max-w-7xl mx-auto px-4 md:px-0  grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {topRatedPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
            <Link
              to="/plants"
              className="btn w-[130px] h-[45px] bg-gradient-to-r from-green-700 to-emerald-500 rounded-[4px]"
            >
              <span className="text-white font-semibold">Show All</span>
            </Link>
          </div>

          {/* plant care tips section */}
          <PlantCareTips />

          {/* meet our green experts system */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#001931] mt-10 mb-4">
            Meet Our Green Experts
          </h2>
          <GreenExperts />
          
          {/* plant of the week section */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#001931] mt-10 text-center mb-6">
            Plant of the Week
          </h1>
          <PlantOfTheWeek />
        </>
      )}
    </div>
  );
};

export default HomePage;
