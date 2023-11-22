import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [showFood, setShowFood] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
