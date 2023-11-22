import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import { useState } from "react";

function FoodList() {
  const [food, setFood] = useState(foodsJson);

  const [foodToDisplay, setFoodToDisplay] = useState(food);

  return (
    <div>
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

export default FoodList;
