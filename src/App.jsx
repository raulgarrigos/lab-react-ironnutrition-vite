import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [food, setFood] = useState(foodsJson);

  const [foodToDisplay, setFoodToDisplay] = useState(food);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm
        food={food}
        setFood={setFood}
        setFoodToDisplay={setFoodToDisplay}
      />

      {food.map((eachProduct, index) => {
        return (
          <FoodBox
            key={index}
            food={food}
            setFood={setFood}
            setFoodToDisplay={setFoodToDisplay}
            eachProduct={eachProduct}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
