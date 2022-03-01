import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, handlePlantStock }) {
  const renderPlants = () => {
    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return filteredPlants;
  }

  return (
    <ul className="cards">{renderPlants().map(plant => <PlantCard key={plant.id} plant={plant} handlePlantStock={handlePlantStock}></PlantCard>)}</ul>
  );
}

export default PlantList;
