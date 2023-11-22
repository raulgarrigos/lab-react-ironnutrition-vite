import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import { useState } from "react";

import { Row, Divider } from "antd";
import Search from "./Search";

function FoodList() {
  const [food, setFood] = useState(foodsJson);

  const [foodToDisplay, setFoodToDisplay] = useState(food);

  return (
    <div>
      <Search food={food} setFoodToDisplay={setFoodToDisplay} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
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
      </Row>
    </div>
  );
}

export default FoodList;
