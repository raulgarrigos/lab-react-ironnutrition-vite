import { useState } from "react";

function AddFoodForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [servingsValue, setServingsValue] = useState(0);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageValue(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCaloriesValue(event.target.value);
  };
  const handleServingsChange = (event) => {
    setServingsValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: nameValue,
      image: imageValue,
      calories: caloriesValue,
      servings: servingsValue,
    };

    const clone = JSON.parse(JSON.stringify(props.food));
    clone.push(newProduct);
    props.setFood(clone);
    props.setFoodToDisplay(clone);

    setNameValue("");
    setImageValue("");
    setCaloriesValue(0);
    setServingsValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        onChange={handleNameChange}
        value={nameValue}
      />
      <br />
      <label htmlFor="image">Image </label>
      <input
        type="text"
        name="image"
        onChange={handleImageChange}
        value={imageValue}
      />
      <br />
      <label htmlFor="calories">Calories </label>
      <input
        type="number"
        name="calories"
        onChange={handleCaloriesChange}
        value={caloriesValue}
      />
      <br />
      <label htmlFor="servings">Servings </label>
      <input
        type="number"
        name="servings"
        onChange={handleServingsChange}
        value={servingsValue}
      />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
