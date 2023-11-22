import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [showFood, setShowFood] = useState(foodsJson);

  const [deleteProduct, setProductDelete] = useState(showFood);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {showFood.map((eachProduct, index) => {
        return (
          <FoodBox
            key={eachProduct.id}
            showFood={showFood}
            setShowFood={setShowFood}
            eachProduct={eachProduct}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
