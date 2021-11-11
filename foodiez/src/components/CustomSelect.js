import React from "react";
import Select from "react-select";
import ingredientStore from "../stores/ingredientStore";
import { useState } from "react";
import { Button } from "react-bootstrap";
function CustomSelect() {
  const ingredients = ingredientStore.ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.name,
  }));
  const [Ingredient, setIngredient] = useState([]);

  const handleChange = (value) => {
    // setIngredient({ ...Ingredient, [e.target.options]: e.target.value });
    console.log(value[0]);
  };
  const handlesubmit = () => {
    console.log(ingredients.value);
  };
  //   console.log(handleChange);
  return (
    <div>
      <Select
        defaultValue={[ingredients[1], ingredients[3]]}
        isMulti
        name="colors"
        options={ingredients}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
      />

      <Button variant="light" className="clickme" onClick={handlesubmit}>
        click me
      </Button>
    </div>
  );
}
export default CustomSelect;
