import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const { id, name, calories, image, servings } = props.eachProduct;

  const handleDelete = (indexToDelete) => {
    console.log("Probando eliminar producto", indexToDelete);

    const clone = JSON.parse(JSON.stringify(props.food));
    clone.splice(indexToDelete, 1);
    props.setFood(clone);
  };

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {servings * calories}</b> kcal
        </p>
        <Button type="primary" onClick={() => handleDelete(props.index)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>

    // <div key={id}>
    //   <p>{name}</p>

    //   <img src={image} width={100} />

    //   <p>Calories: {calories}</p>
    //   <p>Servings {servings}</p>

    //   <p>
    //     <b>Total Calories: {servings * calories} </b> kcal
    //   </p>

    //   <button onClick={() => handleDelete(props.index)}>Delete</button>
    // </div>
  );
}

export default FoodBox;
