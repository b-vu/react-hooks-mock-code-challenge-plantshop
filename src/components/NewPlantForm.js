import { React, useState } from "react";

function NewPlantForm({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  const handleFormChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const onFormSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      handleFormSubmit(data);
      setFormData({
        name: "",
        image: "",
        price: ""
      });
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleFormChange}/>
        <input type="number" name="price" step="1.0" placeholder="Price" value={formData.price} onChange={handleFormChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
