import { useState } from "react";

function Search(props) {
  const [queryValue, setQueryValue] = useState("");

  console.log("Buscando", props);

  const handleQueryChange = (event) => {
    setQueryValue(event.target.value);

    console.log(event.target.value);

    const filteredArr = props.food.filter((eachProduct) => {
      if (eachProduct.name.includes(event.target.value)) {
        return true;
      } else {
        return false;
      }
    });

    props.setFoodToDisplay(filteredArr);
  };

  return (
    <div>
      <label htmlFor="query">Buscar </label>
      <input
        type="text"
        name="query"
        onChange={handleQueryChange}
        value={queryValue}
      />
    </div>
  );
}

export default Search;
