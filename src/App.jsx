import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [showFood, setShowFood] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsJson.map((eachProduct, index) => {
        return (
          <FoodBox food={showFood} key={index} eachProduct={eachProduct} />
        );
      })}

      {/* <FoodBox food={showFood} /> */}
    </div>
  );
}

export default App;
