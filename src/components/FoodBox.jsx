function FoodBox({ eachProduct: { name, calories, image, servings } }) {
  return (
    <div>
      <p>{name}</p>

      <img src={image} width={100} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
