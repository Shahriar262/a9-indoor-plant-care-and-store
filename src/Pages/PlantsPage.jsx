import React from "react";
import usePlants from "../hooks/usePlants";
import PlantCard from "../Components/PlantCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const PlantsPage = () => {
  const { plants, loading } = usePlants();

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-[#001931] text-center mb-4">
        Our All Plants
      </h1>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantsPage;
