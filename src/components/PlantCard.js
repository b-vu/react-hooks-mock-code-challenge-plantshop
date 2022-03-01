import React from "react";

function PlantCard({ plant, handlePlantStock }) {
  const { id, image, name, price, isInStock } = plant;

  const handleStockChange = () => {
    handlePlantStock(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => handleStockChange()}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
