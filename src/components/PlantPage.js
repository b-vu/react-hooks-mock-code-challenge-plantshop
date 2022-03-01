import { React, useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      const newPlantArray = data.map(plant => {
        return {
          ...plant,
          isInStock: true
        }
      });
      setPlants(newPlantArray);
    })
  }, []);

  const handleFormSubmit = newPlant => {
    setPlants([...plants, newPlant]);
  }

  const handleSearchOnPlants = searchTerm => {
    setSearchTerm(searchTerm);
  }

  const handlePlantStock = plantId => {
    const updatedPlants = plants.map(plant => {
      if(plant.id === plantId){
        return {
          ...plant,
          isInStock: false
        }
      }
      else{
        return plant
      }
    });
    setPlants(updatedPlants);
  }

  return (
    <main>
      <NewPlantForm handleFormSubmit={handleFormSubmit}/>
      <Search handleSearchOnPlants={handleSearchOnPlants} searchTerm={searchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm} handlePlantStock={handlePlantStock}/>
    </main>
  );
}

export default PlantPage;
